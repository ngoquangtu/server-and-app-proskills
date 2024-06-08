import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const SearchBar = () => {
  return (
    <View>
      <TextInput />
      <MaterialCommunityIcons name='magnify'/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    
})