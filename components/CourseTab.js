import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CourseTab = ({type}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.tab, type? {color: 'rgba(0,0,0,0.4)'} : styles.choosen]}>About this courses</Text>
      <Text style={[styles.tab, type? styles.choosen : {color: 'rgba(0,0,0,0.4)'}]}>Lectures</Text>
    </View>
  )
}

export default CourseTab

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    marginTop: 14,
  },
  tab: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14, 
    fontWeight: '700',
  },
  choosen: {
    borderBottomColor: '#12B7BD',
    borderBottomWidth: 1,
  }
})