import { StyleSheet, Image, View, Text, TextInput, Modal } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {LOCALHOST, PORT} from '@env';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CourseTab from '../../components/CourseTab';
import { Rating } from 'react-native-ratings';
import { CustomButton0, CustomButton6, CustomButton4 } from '../../components/Button';
import Header from './Header';
import LoadingPage from '../Loading';
import { AuthContext } from '../../utils/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Comment from './CommentAndRate';
import { CustomButton2 } from '../../components/Button';

const CourseInfo = ({route, navigation}) => {
  const context = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [commentList, setCommentList] = useState([]);

  const [commentMode, setCommentMode] = useState(false);
  const [ratingMode, setRatingMode] = useState(false);
  
  const [rating, setRating] = useState(0);
  const [userComment, setUserComment] = useState("");

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
          setCourseData(data);
          setIsLoading(false);
        }

        const api1 = await `http://${LOCALHOST}:${PORT}/api/courses/comment/${route.params.courseId}`;
        const response1 = await fetch(api1, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if(response1.status === 200){
          const data = await response1.json();
          setCommentList(data);
          return;
        }

      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    }

    getCourseById();
  }, [commentMode, ratingMode]);

  const addCourse = async () => {
    try {
      const api = await `http://${LOCALHOST}:${PORT}/api/courses/enrollmentbyId `;
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId: route.params.courseId,
        }),
      });

      console.log(response.status)
      if(response.status === 200){
        return;
      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  }

  const addRating = async () => {
    try {
      const api = await `http://${LOCALHOST}:${PORT}/api/courses/rating/${route.params.courseId} `;
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating: rating,
        }),
      });

      console.log(response.status)
      if(response.status === 200){
        setRating(0);
        setRatingMode(false);
        return;
      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  }

  const addComment = async () => {
    try {
      const api = await `http://${LOCALHOST}:${PORT}/api/comments/courses/${route.params.courseId}/comments`;
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: userComment,
        }),
      });

      if(response.status === 200){
        const data = await response.json();
        console.log(data);
        setUserComment("");
        setCommentMode(false);
        return;
      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
    setCommentMode(false);
  }

  return (
    isLoading? <LoadingPage></LoadingPage> : 
    <View style={styles.frameParent}>
      <Header navigation={navigation}/>
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
        <CustomButton4 
          title={"Rate this course"} 
          style={{width: '100%'}}
          onPress={() => setRatingMode(true)}/>
        <Modal
          animationType='slide'
          visible={ratingMode}
          transparent={true}>
          <View style={{justifyContent:'center', alignItems:'center', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
              <View style={{backgroundColor:'#fff', height: '30%', width: '80%'}}>
                  <Text style={{backgroundColor: '#6B50C3', color:'#fff', textAlign:'center',fontSize: 20, fontWeight: '600', paddingVertical: 10,}}>
                      Give rating to the course</Text>
                  <Rating
                      startingValue={rating}
                      style={{marginTop: 20,}}
                      imageSize={40}
                      onFinishRating={(value) => {
                          setRating(prev => prev = value);
                      }}
                  />
                  <CustomButton6 onPress={() => {
                      addRating();
                  }} 
                  title={"Submit rating"} style={{marginTop: 25}}/>
                  <CustomButton6 onPress={() => {
                      setRatingMode(false);
                  }} 
                  title={"Back"}/>
              </View>
          </View>
        </Modal>

        <Text style={{fontSize: 16, fontWeight:'700', letterSpacing: 0.1, marginLeft: 19.5}}>What you will learn</Text>
        <Text style={{fontSize: 13, color: '#70747e', letterSpacing: 0.1, marginLeft: 19.5, width: '92%'}}>
          {courseData.course.description}
        </Text>
        <CustomButton0 title={"Start now"} style={{alignSelf: 'center', height: 38, marginTop: 5}}
          onPress={() => {
            addCourse();
            navigation.navigate("WatchVideo", {course: courseData.course});
          }}/>
          
        <Text style={{marginTop: 10, marginLeft: 17, fontSize: 16, fontWeight: 'bold'}}>Student comments</Text>
        <CustomButton4
          title={"Add comment and rate"} 
          style={{width: '60%', alignSelf:'center', height: 30, marginTop: 0, marginBottom: -10}}
          onPress={()=>{
            setCommentMode(true);
          }}/>
          
        {commentList.length !== 0 ? <Comment items={commentList}/> : <></>}
        <Modal
          animationType='slide'
          visible={commentMode}
          transparent={true}>
          <View style={{justifyContent:'center', alignItems:'center', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
              <View style={{backgroundColor:'#fff', height: 260, width: '80%'}}>
                  <Text style={{backgroundColor: '#6B50C3', color:'#fff', textAlign:'center',fontSize: 20, fontWeight: '600', paddingVertical: 10,}}>
                    Add a comment</Text>
                  <TextInput style={{borderWidth: 2, textAlignVertical: 'top', padding: 8, margin: 2,}}
                    placeholder={"Add comment here..."}
                    onChangeText={(value) => {
                      setUserComment((comment) => comment = value)
                    }}
                    defaultValue={""}
                    multiline
                    numberOfLines={3}/>
                  <CustomButton6 onPress={() => {
                      addComment();
                  }}
                  title={"Submit comment"} style={{marginTop: 7, height: '25%'}}/>
                  <CustomButton6 onPress={() => {
                      setCommentMode(false);
                  }}
                  title={"Back"} style={{height: '25%'}}/>
              </View>
          </View>
        </Modal>
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