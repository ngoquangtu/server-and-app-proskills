import { Image, SafeAreaView, ScrollView, StyleSheet, StatusBar, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FloatingLoginButton } from '../../components/Button'
import Proskills from '../../assets/Proskills.svg';
import { useFonts } from 'expo-font';
import TopList from '../../components/TopList';
import TopListTestData from '../../components/TopListTestData';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import LoadingPage from '../Loading';
import {LOCALHOST, PORT} from '@env';

const Home = ({navigation}) => {
  const [loaded] = useFonts({
    PlusJakartaSans: require('../../assets/fonts/Plus Jakarta Sans.ttf'),
    PlusJakartaSansMedium: require('../../assets/fonts/Plus Jakarta Sans Medium.ttf'),
  })
  if(!loaded){
      return null;
  }

  const [isLoading, setIsLoading] = useState(false);
  const [topListData, setTopListData] = useState({
    mostPopularList: [],
    mostRatingList: [],
    mostCommentList: []
  })

  useEffect(() =>{
    setIsLoading(true);
    const getTopList = async () => {
      try {
        const api = await `http://${LOCALHOST}:${PORT}/api/courses/mostrating`;
        const response = await fetch(api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          }),
        });

        const mostRatingList = await response.json();
        setTopListData({...topListData, mostRatingList: mostRatingList} )

        if(response.status === 200){
          return;
        }
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    }

    getTopList();
    setIsLoading(false);
  });

  
  return (
    isLoading? <LoadingPage></LoadingPage> :
    <SafeAreaView>
      <StatusBar backgroundColor="#12B7BD"/>
      <ScrollView style={[styles.scrollView, {backgroundColor: '#fff', marginBottom: 60}]}>
        <Image source={require('../../assets/homeBanner.png')} style={styles.image}/>
        <View style={{ marginTop: 10,}}>
          <Proskills style={styles.nameLogo} width={140} height={50}/>
          <Text style={styles.mainDescription}>Pro-Skills is a platform that allows users to 
            learn anything they want! Moreover, Pro-Skills is <Text style={styles.textHighlight}>completely free, </Text>
            making knowledge accessible to everyone without worrying about costs.</Text>
          <Text style={styles.title}>Popular Courses of <Text style={styles.textHighlight2}>Month</Text></Text>
          <TopList items={topListData.mostRatingList}></TopList>

          <Text style={styles.title}>Top Rating Courses of <Text style={styles.textHighlight2}>Month</Text></Text>
          <TopList items={topListData.mostRatingList}></TopList>

          <View style={styles.suggestionField}>
            <Text style={styles.suggest1 }>Join ProSkills today to start your learning journey</Text>

            <MaskedView
              maskElement={
                <Text style={[styles.suggest2]}>!!!AWESOME!!!</Text>}>
              <LinearGradient
                colors={['#3700B3', '#12B7BD']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Text style={[styles.suggest2, {opacity: 0}]}>!!!AWESOME!!!</Text>
              </LinearGradient>
            </MaskedView>
          </View>
          
          <Text style={styles.title}><Text style={styles.textHighlight2}>Most Comments </Text>Courses</Text>
          <TopList items={topListData.mostRatingList}></TopList>
        </View>
      </ScrollView>
      <FloatingLoginButton title={"Log in / Sign up"} navigation={navigation}/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  scrollView:{
    width: '100%',
  },
  image: {
    width: '100%',
    height: 170,
    resizeMode: 'contain',
  },
  nameLogo: {
    marginLeft: 15,
  },
  textHighlight:{
    fontWeight: '700',
    color: '#3700B3',
  },
  textHighlight2:{
    fontWeight: '700',
    color: '#12B7BD',
  },
  mainDescription:{
    marginTop: 10,
    fontFamily: 'PlusJakartaSans',
    fontSize: 13,
    fontWeight: '500',
    color: '#70747E',
    letterSpacing: 1,
    textAlign: 'auto',
    width: '98%',
    marginLeft: 15,
  },
  title:{
    marginTop: 40,
    fontFamily: 'PlusJakartaSans',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
    marginLeft: 15,
  },
  suggestionField:{
    width: '90%',
    height: 165,
    alignItems: 'center',
    justifyContent:'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(18, 183, 189, 0.25)',
    marginTop: 40,
  },
  suggest1:{
    fontFamily: 'PlusJakartaSansMedium',
    fontSize: 19,
    letterSpacing: 1,
    textAlign: 'center',
    width: 270,
  },
  suggest2:{
    fontFamily: 'PlusJakartaSans',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  }
})