import { StyleSheet, SafeAreaView, ScrollView, Text, StatusBar, View, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { FloatingLoginButton } from '../../components/Button'
import SearchBar from '../../components/SearchBar'
import SearchResult from '../../components/SearchResult'
import { AuthContext } from '../../utils/Context'


const Search = ({navigation}) => {
  const [searchKey, setSearchKey] = useState("pmc");
  const context = useContext(AuthContext);
  
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', height: '100%', alignItems: 'center'}}>
      <StatusBar backgroundColor="#12B7BD"/>
      <ScrollView style={[styles.scrollView, {backgroundColor: '#fff', marginBottom: 60}]}>
        <Text style={styles.title}>Search</Text>
        <SearchBar style={styles.searchBar}></SearchBar>

        {searchKey ? 
        <View style={styles.nonSearchBanner}>
          <Image source={require('../..//assets/onboardCarouselItem3.png')} style={styles.nonSearchImg}/>
          <Text style={styles.nonSearchText}>Search everythings...</Text>
        </View>
        : <SearchResult></SearchResult>}

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
  searchBar: {
    
  },
  title: {
    fontWeight: 'semibold',
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'center',
    marginTop: 20,
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