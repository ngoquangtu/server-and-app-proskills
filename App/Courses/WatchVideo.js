import { StyleSheet, View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState, createContext } from 'react'
import Header from './Header'
import YoutubeIframe from 'react-native-youtube-iframe'
import {LOCALHOST, PORT} from '@env';
import LoadingPage from '../Loading';
import CourseTab from '../../components/CourseTab';
import VideoList from '../../components/VideoList';

export const VideoContext = createContext();

const WatchVideo = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(1);
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const getVideoList = async() => {
      try{
        const api = await `http://${LOCALHOST}:${PORT}/api/courses/video/${route.params.course.id}`;
        
        const response = await fetch(api, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if(response.status === 200){
          const data = await response.json();
          setVideoList(prev => prev = data);
          setIsLoading(false);
          setCurrentVideo(prev => prev = 1);
          return;
        }
      }
      catch (error){
        console.error('There was a problem with your fetch operation:', error);
      }
    }

    getVideoList();
  }, [])

  return (
    isLoading ? <LoadingPage></LoadingPage> :
    <VideoContext.Provider value={{currentVideo, setCurrentVideo, videoList}}>
      <View style={styles.frameParent}>
        <Header navigation={navigation}/>
        <View style={{backgroundColor: '#000'}}>
          <YoutubeIframe
            height={220}
            videoId={videoList[currentVideo - 1].youtube_url}/>
        </View>

        <Text style={styles.publisher}>{route.params.course.publisher}</Text>
        <Text style={styles.title}>{route.params.course.title}</Text>
        <CourseTab type={1}/>
        <VideoList items={videoList}></VideoList>
      </View>
    </VideoContext.Provider>
  )
}

export default WatchVideo

const styles = StyleSheet.create({
  frameParent: {
    flex: 1,
    width: "100%",
    paddingVertical: 10,
    backgroundColor: '#fff',
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
})