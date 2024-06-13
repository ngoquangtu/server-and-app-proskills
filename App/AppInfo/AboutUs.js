import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Proskills from '../../assets/Proskills.svg';

const AboutUs = ({navigation}) => {
  return (
    <View>
      <Image source={require('../../assets/Rectangle.png')} style={styles.img}/>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name='chevron-left' style={styles.backIcon}/>
      </TouchableOpacity>
      <Text style={styles.title}>About Pro-Skills</Text>
      <View style={{flexDirection: 'row', alignContent: 'center', marginLeft: 20, marginTop: 13}}>
        <Proskills style={styles.nameLogo} width={125} height={40}/>
        <Text style={{textAlignVertical: 'center', textAlign: 'right', width: '60%', letterSpacing: 1, color: '#70747E'}}>v0.0.1</Text>
      </View>
      <Text style={styles.text}>
      With a vast library of courses and tutorials across a wide range of subjects, 
      Pro-Skills ensures that learners of all levels can find the resources they need to grow and succeed. 
      </Text>
      <Text style={styles.text}>
      Whether you’re looking to advance your career, pick up a new hobby, or simply expand your horizons,
       Pro-Skills offers high-quality content created by experts in their fields.
       The platform is designed to be user-friendly, allowing for easy navigation and a personalized learning experience. 
      </Text>
      <Text style={styles.text}>
        Join the Pro-Skills community today and unlock your full potential without spending a dime!
      </Text>
    </View>
  )
}

export default AboutUs

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
    text: {
      marginLeft: 20,
      width: '88%',
      fontSize: 14,
      marginTop: 18,
      lineHeight: 21,
      color: '#70747E',
    }
})