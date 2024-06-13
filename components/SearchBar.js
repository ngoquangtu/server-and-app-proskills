import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const SearchBar = ({onPress, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Search here' style={styles.input} onChangeText={onChangeText}/>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons name='magnify' width={28} height={28} style={styles.icon}/>
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
      width: 335,
      height: 60,
      backgroundColor: 'rgba(18, 183, 189, 0.25)',
      alignSelf: 'center',
      flexDirection: 'row',
      marginTop: 11,
      borderRadius: 10,
    },
    input:{
      width: '85%',
      height: '100%',
      fontSize: 16,
      marginLeft: 10,
    },
    icon:{
      fontSize: 30,
      height: '100%',
      color: '#888C94',
      verticalAlign: 'middle',
    }
})