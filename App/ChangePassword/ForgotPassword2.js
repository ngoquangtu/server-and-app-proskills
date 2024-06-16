import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { CustomSecureTextInput } from '../../components/TextInput'
import { CustomButton0 } from '../../components/Button'
import {LOCALHOST, PORT} from '@env'
import { useContext, useState } from 'react'
import { AuthContext } from '../../utils/Context'

export default function ChangePasswordForm({route, navigation}) {
  const context = useContext(AuthContext);
  const [inputErrors, setInputErrors] = useState({
    password: '',
    newPassword: '',
  })

  const [currentInputs, setInputs] = useState({
    password: '',
    newPassword: '',
  })

  const changePasswordRequest = async (input) => {
    try {
      const api = `http://${LOCALHOST}:${PORT}/api/auth/changepassword`;
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${context.token}`
        },
        body: JSON.stringify({
          email: route.params.currentEmail,
          password: input.password,
          newPassword: input.newPassword,
        }),
      });
      
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
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name='chevron-left' style={styles.backIcon}/>
      </TouchableOpacity>
      <Text style={styles.description}>Reset your password</Text>
      <Text style={styles.description2}>Enter new password </Text>
      <View style={styles.formField}>
        <CustomSecureTextInput 
          placeHolder={"Enter old password"} 
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
          placeHolder={"Enter new password"} 
          onChangeText={(value) => {
            setInputs({...currentInputs, newPassword: value});
            if(value) {
              setInputErrors({...inputErrors, newPassword: ''});
            }
          }}
          onBlur={()=>{
              if(!currentInputs.newPassword) setInputErrors({...inputErrors, newPassword: 'This cannot be empty!'});
            }
          }
          warningText={inputErrors.newPassword}/>
      </View>
      <CustomButton0 
        title={"Reset"}  
        style={styles.button}
        onPress={() => {
          if( currentInputs.password.length >= 8 && currentInputs.password.length >= 8){
            changePasswordRequest(currentInputs);
            return;
          }

          const newInputErrors = {};
          !currentInputs.password ? newInputErrors.password = 'This cannot be empty!' : 
            (currentInputs.password.length < 8)? newInputErrors.password = 'Password must be at least 8 characters!' : {};
          !currentInputs.newPassword ? newInputErrors.newPassword = 'This cannot be empty!' : {};
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