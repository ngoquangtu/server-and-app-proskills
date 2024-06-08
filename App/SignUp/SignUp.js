import { StyleSheet, Text, View } from 'react-native';
import Proskills from '../../assets/Proskills.svg';
import {useFonts} from 'expo-font';
import React from 'react'
import {BackToHomeButton, CustomButton3, CustomButton4} from '../../components/Button';

export default function SignUpPage({navigation}) {
  const [loaded] = useFonts({
    PlusJakartaSans: require('../../assets/fonts/Plus Jakarta Sans.ttf'),
    PlusJakartaSansMedium: require('../../assets/fonts/Plus Jakarta Sans Medium.ttf'),
  })
  if(!loaded){
    return null;
  }

  return (
    <View style={styles.container}>
      <BackToHomeButton 
        style={{marginTop: 50}} 
        onPress={() => navigation.navigate('HomePage')} />
      <Proskills 
        style={styles.nameLogo} 
        width={149} 
        height={45}/>
      <Text 
        style={styles.title1}>Welcome!
      </Text>
      <Text  
        style={styles.title2}>Sign up to continue!
      </Text>
      <CustomButton3 
        title={"Sign up"} 
        style={styles.signUpEmail} 
        onPress={() => navigation.navigate('SignUpForm')}/>
      <Text 
        style={styles.description}>By signing up you are agreed with our friendly terms and condition.
      </Text>
      <Text 
        style={[styles.description, {position: 'absolute', top: 660}]}>
          Already have an account?
      </Text>
      <CustomButton4 
        title={"Log in"} 
        style={styles.signInButton} 
        onPress={() => navigation.navigate('SignIn')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
  },
  nameLogo:{
    marginTop: 55,
  },
  title1:{
    position: 'absolute',
    top: 200,
    width: 234,
    height: 66,
    fontFamily: 'PlusJakartaSansMedium',
    fontSize: 26,
    textAlign:'center',
    fontWeight:'bold',
  },
  title2:{
    position: 'absolute',
    top: 240,
    width: 240,
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
    top: 440,
    width: 241,
    height: 45,
    textAlign: 'center',
    lineHeight: 22,
  },
  signInButton:{
    position: 'absolute',
    top: 685,
  }
})