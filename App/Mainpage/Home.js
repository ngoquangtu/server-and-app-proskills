import { Image, SafeAreaView, ScrollView, StyleSheet, StatusBar, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { FloatingLoginButton } from '../../components/Button'
import Proskills from '../../assets/Proskills.svg';
import TopList from '../../components/TopList';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import LoadingPage from '../Loading';
import {LOCALHOST, PORT} from '@env';
import { AuthContext } from '../../utils/Context';

const Home = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [topListData, setTopListData] = useState({
    mostPopularList: [],
    mostRatingList: [],
    mostCommentList: []
  })
  const context = useContext(AuthContext);

  useEffect(() =>{
    setIsLoading(true);
    let result = {};
    const getTopRatingList = async () => {
      try {
        const api = await `http://${LOCALHOST}:${PORT}/api/courses/mostrating`;
        const response = await fetch(api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if(response.status === 200){
          const mostRatingList = await response.json();
          result.mostRatingList = mostRatingList;
        }

        const api1 = await `http://${LOCALHOST}:${PORT}/api/courses/mostenrollment`;
        const response1 = await fetch(api1, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if(response1.status === 200){
          const mostPopularList = await response1.json();
          result.mostPopularList = mostPopularList;
        }

        const api2 = await `http://${LOCALHOST}:${PORT}/api/courses/mostenrollment`;
        const response2 = await fetch(api2, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if(response2.status === 200){
          const mostCommentList = await response2.json();
          result.mostCommentList = mostCommentList;
        }

        setTopListData(prev => prev = result);

      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    }

    getTopRatingList();
    setIsLoading(false);
  }, []);

  return (
    isLoading? <LoadingPage></LoadingPage> :
    <SafeAreaView>
      <ScrollView style={[styles.scrollView, {backgroundColor: '#fff'}, context.isLogin ? {} : { marginBottom: 60}]}>
        <Image source={require('../../assets/homeBanner.png')} style={styles.image}/>
        <View style={{ marginTop: 10,}}>
          <Proskills style={styles.nameLogo} width={140} height={50}/>
          <Text style={styles.mainDescription}>Pro-Skills is a platform that allows users to 
            learn anything they want! Moreover, Pro-Skills is <Text style={styles.textHighlight}>completely free, </Text>
            making knowledge accessible to everyone without worrying about costs.</Text>
          <Text style={styles.title}>Popular Courses of <Text style={styles.textHighlight2}>Month</Text></Text>
          <TopList 
            items={topListData.mostRatingList}
            navigation={navigation}/>

          <Text style={styles.title}>Top Rating Courses of <Text style={styles.textHighlight2}>Month</Text></Text>
          <TopList 
            items={topListData.mostPopularList}
            navigation={navigation}/>

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
          <TopList 
            items={topListData.mostCommentList} 
            style={{marginBottom: 20}}
            navigation={navigation}/>
        </View>
      </ScrollView>
      {context.isLogin ?<></> : <FloatingLoginButton title={"Log in / Sign up"} navigation={navigation}/>}
      
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
    fontSize: 19,
    letterSpacing: 1,
    textAlign: 'center',
    width: 270,
  },
  suggest2:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  }
})