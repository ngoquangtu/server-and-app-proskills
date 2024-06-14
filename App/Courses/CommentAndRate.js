import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CommentAndRate = ({items}) => {
  return (
    <ScrollView>
      <Text>Student feedback</Text>
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

export default CommentAndRate

const styles = StyleSheet.create({})