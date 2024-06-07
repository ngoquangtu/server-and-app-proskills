import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { CustomSecureTextInput } from '../../components/TextInput'
import { CustomButton0 } from '../../components/Button'
import {LOCALHOST, PORT} from '@env'
import { useState } from 'react'

export default function ChangePasswordForm({navigation, route}) {
  const [loaded] = useFonts({
    PlusJakartaSans: require('../../assets/fonts/Plus Jakarta Sans.ttf'),
    PlusJakartaSansMedium: require('../../assets/fonts/Plus Jakarta Sans Medium.ttf'),
  })
  if(!loaded){
      return null;
  }

  const [inputErrors, setInputErrors] = useState({
    password: '',
    confirmPassword: '',
  })

  const [currentInputs, setInputs] = useState({
    password: '',
    confirmPassword: '',
  })

  const changePasswordRequest = async (input) => {
    try {
      const api = `http://${LOCALHOST}:${PORT}/api/auth/`;
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: route.params.currentEmail,
          password: input.password,
          confirmPassword: input.confirmPassword,
        }),
      });
      console.log(response.status)
      if(response.status === 200){
        navigation.navigate('ForgotPass3');
        return;
      }
      if(response.status === 404){
        setInputErrors('Cannot find this email!');
        return;
      }
      if(response.status === 401){
        setInputErrors('Wrong email or password!');
        return;
      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  return (
    <View >
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPass1')}>
        <MaterialCommunityIcons name='chevron-left' style={styles.backIcon}/>
      </TouchableOpacity>
      <Text style={styles.description}>Reset your password</Text>
      <Text style={styles.description2}>Enter new password </Text>
      <View style={styles.formField}>
        <CustomSecureTextInput 
          placeHolder={"Enter new password"} 
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
          placeHolder={"Confirm password"} 
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
        title={"Reset"}  
        style={styles.button}
        onPress={() => {
          if(currentInputs.password && currentInputs.confirmPassword &&
            currentInputs.password.length >= 8 && currentInputs.confirmPassword === currentInputs.password){
            changePasswordRequest(currentInputs);
            return;
          }

          const newInputErrors = {};
          !currentInputs.password ? newInputErrors.password = 'This cannot be empty!' : 
            (currentInputs.password.length < 8)? newInputErrors.password = 'Password must be at least 8 characters!' : {};
          !currentInputs.confirmPassword ? newInputErrors.confirmPassword = 'This cannot be empty!' :
            (currentInputs.password && currentInputs.confirmPassword !== currentInputs.password) ? newInputErrors.confirmPassword = 'Must match the password': {};
          setInputErrors(newInputErrors);
        }}/>
    </View>
  )
}

const styles = StyleSheet.create({
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
  description2: {
    position: 'absolute',
    top: 159,
    left: 35,
    fontFamily: 'PlusJakartaSans',
    fontSize: 13,
    color: '#70747E'
  },
  formField: {
    position: 'absolute',
    top: 210,
    left: 35,
  },
  button:{
    position: 'absolute',
    top: 650,
    alignSelf: 'center',
  }
})