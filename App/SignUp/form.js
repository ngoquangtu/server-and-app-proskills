import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { CustomTextInput, CustomSecureTextInput } from '../../components/TextInput'
import { CustomButton0 } from '../../components/Button'
import { useState } from 'react'
import {LOCALHOST, PORT} from '@env'
import { validateEmail } from '../../utils/Utility'

export default function SignUpForm({navigation}) {
  const [loaded] = useFonts({
    PlusJakartaSans: require('../../assets/fonts/Plus Jakarta Sans.ttf'),
    PlusJakartaSansMedium: require('../../assets/fonts/Plus Jakarta Sans Medium.ttf'),
  })
  if(!loaded){
      return null;
  }

  const [inputErrors, setInputErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [currentInputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })


  const sendRegisterRequest = async (input) => {
    try {
      const api = await `http://${LOCALHOST}:${PORT}/api/auth/register`;
      
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: input.username,
          password: input.password,
          email: input.email,
        }),
      });

      if(response.status === 200){
        navigation.navigate('SignUpDone');
        return;
      }
      if(response.status === 409){
        setInputErrors({...inputErrors, email: 'The email is already exist'});
        return;
      }
      
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <MaterialCommunityIcons name='chevron-left' style={styles.backIcon}/>
      </TouchableOpacity>
      <Text style={styles.description}>Enter your details</Text>

      <View style={styles.formField}>
        <CustomTextInput 
          placeHolder={"username"} 
          onChangeText={(value) => {
            setInputs({...currentInputs, username: value});
            if(value) {
              setInputErrors({...inputErrors, username: ''});
            }
          }}
          onBlur={()=>{
              if(!currentInputs.username) setInputErrors({...inputErrors, username: 'This cannot be empty!'});
            }
          }
          warningText={inputErrors.username}
        />
        <CustomTextInput 
          placeHolder={"email address"} 
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
          warningText={inputErrors.email}
        />
        <CustomSecureTextInput 
          placeHolder={"your password"} 
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
        <CustomSecureTextInput 
          placeHolder={"confirm password"} 
          onChangeText={(value) => {
            setInputs({...currentInputs, confirmPassword: value});
            if(value) {
              setInputErrors({...inputErrors, confirmPassword: ''});
            }
          }}
          onBlur={()=>{
              if(!currentInputs.confirmPassword) setInputErrors({...inputErrors, confirmPassword: 'This cannot be empty!'});
            }
          }
          warningText={inputErrors.confirmPassword}/>
      </View>

      <CustomButton0 
        title={"Continue"} 
        style={styles.button}
        onPress={
          () => {
            if(currentInputs.username && currentInputs.password && currentInputs.email && currentInputs.confirmPassword &&
              currentInputs.password.length >= 8 && currentInputs.confirmPassword === currentInputs.password){
              sendRegisterRequest(currentInputs);
              return;
            }

            const newInputErrors = {};
            !currentInputs.username ? newInputErrors.username = 'This cannot be empty!' : {};
            !currentInputs.email ? newInputErrors.email = 'This cannot be empty!' :
              (!validateEmail(currentInputs.email))? newInputErrors.email = 'This is not an email!' : {};
            !currentInputs.password ? newInputErrors.password = 'This cannot be empty!' : 
              (currentInputs.password.length < 8)? newInputErrors.password = 'Password must be at least 8 characters!' : {};
            !currentInputs.confirmPassword ? newInputErrors.confirmPassword = 'This cannot be empty!' :
              (currentInputs.password && currentInputs.confirmPassword !== currentInputs.password) ? newInputErrors.confirmPassword = 'Must match the password': {};
            setInputErrors(newInputErrors);
          }
        }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: -30,
  },
  backIcon: {
    position: 'absolute',
    top: 84,
    left: 20,
    fontSize: 40,
    color: '#292D32',
  },
  description: {
    position: 'absolute',
    top: 130,
    left: 34,
    fontFamily: 'PlusJakartaSansMedium',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
  formField: {
    position: 'absolute',
    top: 201,
    left: 35,
  },
  button:{
    position: 'absolute',
    top: 700,
    alignSelf: 'center',
  }
})