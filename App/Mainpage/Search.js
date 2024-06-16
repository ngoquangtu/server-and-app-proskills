import { StyleSheet, SafeAreaView, ScrollView, Text, StatusBar, View, Image } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { FloatingLoginButton } from '../../components/Button'
import SearchBar from '../../components/SearchBar'
import { AuthContext } from '../../utils/Context'
import SearchResult from '../../components/SearchResult'
import {LOCALHOST, PORT} from '@env'


const Search = ({navigation}) => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const searchBarRef = useRef();
  const context = useContext(AuthContext);
  
  const search = async (key) => {
    if(key.replace(/\s+/g, '') === ""){
      setSearchKey(key);
      setSearchResult([]);
      return;
    };
    try {
      const api = await `http://${LOCALHOST}:${PORT}/api/users/search-courses`;
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: key,
        }),
      });
      const data = await response.json();
      if(response.status === 200){
        setSearchResult(data);
        setSearchKey(key);
        return;
      }
      
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  const resetKey= ()=>{
    setSearchKey("");
    searchBarRef.current.clear();
  }
  
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', height: '100%', alignItems: 'center'}}>
      <ScrollView style={[styles.scrollView, {backgroundColor: '#fff', marginBottom: 60}]}>
        <Text style={styles.title}>Search</Text>
        <SearchBar 
        style={styles.searchBar}
        onChangeText={(value) => {
          search(value);
        }}
        reference={searchBarRef}
        />

        {searchKey.replace(/\s+/g, '').length === 0 ? 
        <View style={styles.nonSearchBanner}>
          <Image source={require('../..//assets/onboardCarouselItem3.png')} style={styles.nonSearchImg}/>
          <Text style={styles.nonSearchText}>Search everythings...</Text>
        </View>
         : <SearchResult items={searchResult} navigation={navigation} setKeyFunction={resetKey}></SearchResult> 
         }

      </ScrollView>
      {context.isLogin ? <></> : <FloatingLoginButton title={"Log in / Sign up"} navigation={navigation}/>}
      
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  scrollView:{
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'center',
    marginTop: 20,
    color: '#12B7BD',
  },
  nonSearchText: {
    color: '#70747E',
    fontSize: 14,
    marginTop: 20,
  },
  nonSearchBanner: {
    width: '100%',
    marginTop: 120,
    alignItems: 'center',
  },
  nonSearchImg: {
    width: 210,
    height: 196,
    resizeMode: 'contain',
  },
})