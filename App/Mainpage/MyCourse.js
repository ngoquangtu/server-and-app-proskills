import { StyleSheet, SafeAreaView, ScrollView, Text, Image, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { FloatingLoginButton } from '../../components/Button'
import { AuthContext } from '../../utils/Context'
import {LOCALHOST, PORT} from '@env'
import SearchResult from '../../components/SearchResult'

const MyCourse = ({navigation}) => {
  const context = useContext(AuthContext);
  const [myCourseList, setMyCourseList] = useState([])
  useEffect(() => {
    const getMyCourseList = async (key) => {
      try {
        const api = await `http://${LOCALHOST}:${PORT}/api/courses/enrollments`;
        const response = await fetch(api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${context.token}`
          },
        });
        

        if(response.status === 200){
          const data = await response.json();
          setMyCourseList(data);
          return;
        }
        
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    };
    getMyCourseList();

  })

  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', height: '100%', alignItems: 'center'}}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>My Learning Courses</Text>
        {!context.isLogin ? 
        <View style={{alignItems: 'center'}}>
          <Image source={require('../../assets/myCourseUnauthen.png')} style={{alignSelf: 'center', marginTop: 60}}/>
          <Text style={styles.description}>Join Pro-Skills today to start your learning journey!</Text>
        </View> : 
        <SearchResult items={myCourseList} navigation={navigation}/>
        }
        
      </ScrollView>
      {context.isLogin ? <></> : <FloatingLoginButton title={"Log in / Sign up"} navigation={navigation}/>}

    </SafeAreaView>
  )
}

export default MyCourse

const styles = StyleSheet.create({
  scrollView:{
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 60,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'center',
    marginTop: 20,
    color: '#12B7BD',
  },
  description: {
    width: '50%',
    textAlign: 'center',
    fontSize: 14, 
    letterSpacing: 1,
    color: '#70747E',
    marginTop: 30,
  },
})