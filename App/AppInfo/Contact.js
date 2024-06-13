import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Contact = ({navigation}) => {
  return (
    <View>
      <Image source={require('../../assets/Rectangle.png')} style={styles.img}/>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name='chevron-left' style={styles.backIcon}/>
      </TouchableOpacity>
      <Text style={styles.title}>Contact Us</Text>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    img:{
        width: '100%',
        height: 180,
        resizeMode: 'stretch',
    },
    backIcon: {
      position: 'absolute',
      top: -110,
      left: 10,
      fontSize: 40,
      color: '#fff',
    },
    title: {
      position: 'absolute',
      top: 130,
      left: 18,
      fontFamily: 'PlusJakartaSansMedium',
      fontSize: 24,
      fontWeight: '700',
      letterSpacing: 1.2,
      color: '#fff',
    },
})