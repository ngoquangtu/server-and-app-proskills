import { StyleSheet, Text, View } from 'react-native';
import Proskills from '../assets/Proskills.svg';
import {useFonts} from 'expo-font';
import React from 'react'
import {CustomButton3, CustomButton4} from '../components/Button';

const SignUpPage = ({navigation}) => {
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
      <Text style={styles.title1}>Welcome!</Text>
      <Text style={styles.title2}>Sign up to continue!</Text>
      <CustomButton3 title={"Sign up with email"} style={styles.signUpEmail} onPress={() => navigation.navigate('SignUpForm')}/>
      <Text style={styles.description}>By signing up you are agreed with our friendly terms and condition.</Text>
      <Text style={[styles.description, {position: 'absolute', top: 630}]}>Already have an account?</Text>
      <CustomButton4 title={"Sign in"} style={styles.signInButton} onPress={() => navigation.navigate('SignIn')}/>
    </View>
  )
}

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  nameLogo:{
    marginTop: 68,
  },
  title1:{
    position: 'absolute',
    top: 214,
    width: 234,
    height: 66,
    fontFamily: 'PlusJakartaSansMedium',
    fontSize: 26,
    textAlign:'center',
    fontWeight:'bold',
  },
  title2:{
    position: 'absolute',
    top: 247,
    width: 234,
    height: 66,
    fontFamily: 'PlusJakartaSansMedium',
    fontSize: 26,
    textAlign:'center',
    fontWeight:'bold',
  },
  signUpEmail:{
    position: 'absolute',
    top: 350,
  },
  description:{
    position: 'absolute',
    top: 460,
    width: 241,
    height: 45,
    textAlign: 'center',
    lineHeight: 22,
  },
  signInButton:{
    position: 'absolute',
    top: 630,
  }
})