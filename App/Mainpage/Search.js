import { StyleSheet, SafeAreaView, ScrollView, Text, StatusBar } from 'react-native'
import React from 'react'
import { FloatingLoginButton } from '../../components/Button'

const Search = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#12B7BD"/>
      <ScrollView style={[styles.scrollView, {backgroundColor: '#fff', marginBottom: 60}]}>
        <Text>PMC</Text>
      </ScrollView>
      <FloatingLoginButton title={"Log in / Sign up"} navigation={navigation}/>
      
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  scrollView:{
    width: '100%',
  },
})