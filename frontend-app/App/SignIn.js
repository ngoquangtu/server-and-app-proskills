import { StyleSheet, Text, View } from 'react-native';
import Proskills from '../assets/Proskills.svg';
import {useFonts} from 'expo-font';
import {CustomTextInput, CustomSecureTextInput} from '../components/TextInput';
import React from 'react'
import {CustomButton0, CustomButton1} from '../components/Button';

const index = () => {
  const [loaded] = useFonts({
    PlusJakartaSans: require('../assets/fonts/Plus Jakarta Sans.ttf'),
    PlusJakartaSansMedium: require('../assets/fonts/Plus Jakarta Sans Medium.ttf'),
  })
  if(!loaded){
    return null;
  }

  return (
    <View style={styles.container}>
      <Proskills style={styles.nameLogo} width={149} height={45}/>
      <Text style={styles.title}>Welcome back! Sign in to continue!</Text>
      <View style={styles.inputField}>
        <CustomTextInput placeHolder={"Username"} warningText={"password is not valid"}/>
        <CustomSecureTextInput placeHolder={"**********"} warningText={"password is not valid"}/>
      </View>

      <View style={styles.buttonField}>
        <CustomButton0 title={"Log in"}/>
        <CustomButton1 title={"Forgot password"}/>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  nameLogo:{
    marginTop: 68,
  },
  title:{
    position: 'absolute',
    top: 214,
    width: 234,
    height: 66,
    fontFamily: 'PlusJakartaSansMedium',
    fontSize: 26,
    textAlign:'center',
    fontWeight:'bold',
  },
  inputField: {
    position: 'absolute',
    top: 372,
    width: 335,
  },
  buttonField: {
    position: 'absolute',
    top: 632,
  }
})