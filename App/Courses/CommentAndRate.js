import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommentBox from '../../components/CommentBox'

const Comment = ({items}) => {
  return (
    <ScrollView style={{marginTop: 20}}>
      {items.map((item, index) => (
        <View key={index}>
          <CommentBox item={item}></CommentBox>
        </View>
      ))}
    </ScrollView>
  )
}

export default Comment

const styles = StyleSheet.create({})