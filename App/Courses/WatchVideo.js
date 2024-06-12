import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'

const WatchVideo = ({route, navigation}) => {
  return (
    <View style={styles.frameParent}>
      <Header navigation={navigation}/>
    </View>
  )
}

export default WatchVideo

const styles = StyleSheet.create({
    frameParent: {
        flex: 1,
        width: "100%",
        padding: 10,
        backgroundColor: '#fff',
    },
})