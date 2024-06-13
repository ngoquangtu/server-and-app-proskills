import { StyleSheet, Image, View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {LOCALHOST, PORT} from '@env';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CourseTab from '../../components/CourseTab';
import { Rating } from 'react-native-ratings';
import { CustomButton0 } from '../../components/Button';
import Header from './Header';
import LoadingPage from '../Loading';

const CourseInfo = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [courseData, setCourseData] = useState({
    course:
    {
      description: "",
      id: -1,
      publisher: "",
      rating: 0,
      title: "",
      thumbnail: "",
    },
    numberofRating: 0,
    numberofVideo: 0,
  })

  useEffect(() =>{
    const getCourseById = async () => {
      try {
        const api = await `http://${LOCALHOST}:${PORT}/api/courses/${route.params.courseId}`;
        const response = await fetch(api, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if(response.status === 200){
          const data = await response.json();
          await setCourseData(data);
          setIsLoading(false);
          return;
        }
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    }

    getCourseById();
  });


  return (
    isLoading? <LoadingPage></LoadingPage> : 
    <View style={styles.frameParent}>
      <Header navigation={navigation}/>
      <ScrollView>
        <Image source={{uri: courseData.course.thumbnail}} style={styles.thumbnail} />
        <Text style={styles.publisher}>{courseData.course.publisher}</Text>
        <Text style={styles.title}>{courseData.course.title}</Text>
        <CourseTab type={0}/>
        <View style={styles.smallInfo}>
          <View style={{flexDirection: 'row', textAlign: 'left'}}>
            <Text style={{fontSize: 14, letterSpacing: 0.1, color: '#888c94', marginLeft: 20,}}>{courseData.course.rating}</Text>
            <Rating
                  readonly={true}
                  startingValue={courseData.course.rating}
                  fractions={20}
                  jumpValue={0.1}
                  style={styles.rating}
                  imageSize={16}
            />
            <Text style={{color:'#888C94', marginLeft: 5}}>({courseData.numberofRating} rating{courseData.numberofRating > 1 ?'s':''})</Text>
          </View>
          <View style={{flexDirection: 'row', textAlign: 'right'}}>
            <MaterialCommunityIcons name='video-outline' style={{fontSize: 30, color: '#70747E', marginTop: -5}}/>
            <Text style={{color: '#70747E'}}>{courseData.numberofVideo} Lesson{courseData.numberofVideo > 1 ? 's':''}</Text>
          </View>
        </View>
        <Text style={{fontSize: 14, fontWeight:'700', letterSpacing: 0.1, marginLeft: 19.5}}>What you will learn</Text>
        <Text style={{fontSize: 13, color: '#70747e', letterSpacing: 0.1, marginLeft: 19.5, width: '92%'}}>
          {courseData.course.description}
        </Text>
        <CustomButton0 title={"Start now"} style={{alignSelf: 'center', height: 38}}
        onPress={() => {
          navigation.navigate("WatchVideo", {course: courseData.course})
        }}/>
      </ScrollView>
    </View>);
}

export default CourseInfo
const styles = StyleSheet.create({
  frameParent: {
    flex: 1,
    width: "100%",
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: '100%',
    height: 220,
    resizeMode: 'stretch',
  },
  publisher: {
    marginTop: 9,
    marginLeft: 11,
    fontSize: 14,
    color: '#585d69',
  },
  title:{
    textTransform: 'uppercase',
    marginLeft: 11,
    marginTop: 2,
    fontSize: 17,
    color: '#12b7bd',
    fontWeight: '700',
  },
  smallInfo: {
    flexDirection: 'row',
    marginTop: 16,
    width: '95%',
    justifyContent: "space-between",
  },
  rating: {
    marginLeft: 5, 
    marginTop: 1,
  }
});