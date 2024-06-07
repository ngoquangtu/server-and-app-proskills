import { StyleSheet, Text, View } from 'react-native';
import Proskills from '../assets/Proskills.svg';
import {useFonts} from 'expo-font';
import {CustomTextInput, CustomSecureTextInput} from '../components/TextInput';
import React, { useState } from 'react'
import {BackToHomeButton, CustomButton0, CustomButton4} from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validateEmail } from '../utils/Utility'
import {LOCALHOST, PORT} from '@env'

export default function SignInPage({navigation}) {
  const [loaded] = useFonts({
    PlusJakartaSans: require('../assets/fonts/Plus Jakarta Sans.ttf'),
  })
  if(!loaded){
    return null;
  }

  const [inputErrors, setInputErrors] = useState({
    email: '',
    password: '',
  })

  const [currentInputs, setInputs] = useState({
    email: '',
    password: '',
  })

  const logInRequest = async (input) => {
    try {
      const api = await `http://192.168.1.144:${PORT}/api/auth/login`;
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: input.email,
          password: input.password,
        }),
      });
      const data = await response.json();
      if(response.status === 200){
        await AsyncStorage.setItem('jwtToken', data.token);
        navigation.navigate('HomePage');
        return;
      }
      if(response.status === 404){
        setInputErrors({...inputErrors, email: 'The email doesn\' exist!'});
        return;
      }
      if(response.status === 401){
        setInputErrors({...inputErrors, password: 'The password is wrong!'});
        return;
      }
      
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  return (
    <View style={styles.container}>
      <BackToHomeButton 
        style={{marginTop: 60}}
        onPress={() => navigation.navigate('HomePage')}/>
      <Proskills style={styles.nameLogo} width={149} height={45}/>
      <Text style={styles.title}>Welcome back! Sign in to continue!</Text>

      <View style={styles.inputField}>
        <CustomTextInput 
          placeHolder={"Email"}  
          onChangeText={(value) => {
            setInputs({...currentInputs, email: value});
            if(value) {
              setInputErrors({...inputErrors, email: ''});
            }
          }}
          onBlur={()=>{
              if(!currentInputs.email) setInputErrors({...inputErrors, email: 'This cannot be empty!'});
              else{
                if(!validateEmail(currentInputs.email)){
                  setInputErrors({...inputErrors, email: 'This is not an email!'});
                }
              }
            }
          }
          warningText={inputErrors.email}/>
        <CustomSecureTextInput 
          placeHolder={"Password"}
          onChangeText={(value) => {
            setInputs({...currentInputs, password: value});
            if(value) {
              setInputErrors({...inputErrors, password: ''});
            }
          }}
          onBlur={()=>{
              if(!currentInputs.password) setInputErrors({...inputErrors, password: 'This cannot be empty!'});
              else if(currentInputs.password.length < 8) setInputErrors({...inputErrors, password: 'Password must be at least 8 characters!'})
            }
          }
          warningText={inputErrors.password}/>
      </View>
      <CustomButton4 
        title={"Forgot password?"} 
        onPress={() => navigation.navigate('ForgotPass1')}
        textColor={'#3700B3'}
        style={styles.fpButton}
      />
      <CustomButton0 
        title={"Log in"} 
        style={styles.loginButton}
        onPress={
          ()=> {
          if(currentInputs.password && currentInputs.email &&
            currentInputs.password.length >= 8){
            logInRequest(currentInputs);
            return;
          }

          const newInputErrors = {};
          !currentInputs.email ? newInputErrors.email = 'This cannot be empty!' :
            (!validateEmail(currentInputs.email))? newInputErrors.email = 'This is not an email!' : {};
          !currentInputs.password ? newInputErrors.password = 'This cannot be empty!' : 
            (currentInputs.password.length < 8)? newInputErrors.password = 'Password must be at least 8 characters!' : {};
          setInputErrors(newInputErrors);
          }
        }
        />
      <View style={styles.createAccountView}>
        <Text style={styles.createAccountText}>New here? </Text>
        <CustomButton4 
          title={"Create account"} 
          onPress={() => {
            navigation.navigate('SignUp')
          }}/>
      </View>
    </View>
  )
}

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
  loginButton: {
    position: 'absolute',
    top: 620,
  },
  fpButton: {
    position: 'absolute',
    top: 515,
    left: 240,
  },
  createAccountText: {
    fontFamily: 'PlusJakartaSans',
    fontSize: 14,
    fontWeight: 'medium',
    marginTop: 5,
  },
  createAccountView: {
    flexDirection: 'row',
    position: 'absolute',
    top: 710,
    left: 110,
  }
})