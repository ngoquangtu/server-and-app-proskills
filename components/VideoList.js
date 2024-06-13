import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { VideoContext } from '../App/Courses/WatchVideo'
import VideoButtonItem from './VideoButtonItem';

const VideoList = ({items}) => {
  const context = useContext(VideoContext);
  return (
    <ScrollView>
      {items.map((item, index) => (
        <View key={index}>
          <VideoButtonItem 
            item={item} 
            onPress={() => context.setCurrentVideo(item.id)}
            isCurrentLesson={item.id === context.currentVideo}></VideoButtonItem>
        </View>
      ))}
    </ScrollView>
  )
}

export default VideoList

const styles = StyleSheet.create({})