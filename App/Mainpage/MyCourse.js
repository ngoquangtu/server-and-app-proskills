import { StyleSheet, SafeAreaView, ScrollView, Image, StatusBar } from 'react-native'
import React from 'react'
import { FloatingLoginButton } from '../../components/Button'

const MyCourse = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#12B7BD"/>
      <ScrollView style={styles.scrollView}>
      </ScrollView>
      <FloatingLoginButton title={"Log in / Sign up"} navigation={navigation}/>
      
    </SafeAreaView>
  )
}

export default MyCourse

const styles = StyleSheet.create({})