import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const VideoButtonItem = ({item, onPress, isCurrentLesson}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.lesson, isCurrentLesson? {backgroundColor: 'rgba(18,183,189,0.2)'}: {}]}>
        <Text 
            style={[{fontSize: 17, alignSelf: 'center', textAlign:'center', width: '14%'}, isCurrentLesson? {} : {color: 'rgba(0,0,0,0.5)'}]}>
            {item.id}
        </Text>
        <Text numberOfLines={1} style={[{width: '73%', alignSelf: 'center', fontSize: 14}, isCurrentLesson? {} : {color: 'rgba(0,0,0,0.5)'}]}>
            {item.title}
        </Text>
        <MaterialCommunityIcons 
            name='play-circle-outline' 
            style={[{fontSize: 30, alignSelf: 'center'}, , isCurrentLesson? {} : {color: 'rgba(0,0,0,0.5)'}]}/>
    </TouchableOpacity>
  )
}

export default VideoButtonItem

const styles = StyleSheet.create({
    lesson:{
        height: 50,
        flexDirection: 'row',
    },
    highLight: {
        backgroundColor: 'rgba(18, 183, 189, 0.2)',
    }
})