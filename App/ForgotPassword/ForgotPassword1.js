import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { CustomTextInput } from '../../components/TextInput'
import { CustomButton0 } from '../../components/Button'
import { useState } from 'react'
import {LOCALHOST, PORT} from '@env'
import { validateEmail } from '../../utils/Utility'

export default function ForgotPass({navigation}) {
  const [loaded] = useFonts({
    PlusJakartaSans: require('../../assets/fonts/Plus Jakarta Sans.ttf'),
    PlusJakartaSansMedium: require('../../assets/fonts/Plus Jakarta Sans Medium.ttf'),
  })
  if(!loaded){
      return null;
  }

  const [currentEmail, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkEmailRequest = async (email) => {
    try {
      const api = await `http://192.168.1.144:8000/api/auth/resetpassword`;
      setIsLoading(true);
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if(response.status === 200){
        setIsLoading(false);
        navigation.navigate('ForgotPass2', {currentEmail});
        return;
      }
      if(response.status === 404){
        setEmailError('Cannot find this email!');
        setIsLoading(false);
        return;

      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
    setIsLoading(false);
  };

  return (
    <View>
      {isLoading? <ActivityIndicator size={"large"} style={styles.indicator}/> : <></>}
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <MaterialCommunityIcons name='chevron-left' style={styles.backIcon}/>
      </TouchableOpacity>
      <Text style={styles.description}>Reset password</Text>
      <Text style={styles.description2}>Enter the email associated with your account</Text>

      <View style={styles.formField}>
        <CustomTextInput placeHolder={"Email address"} 
        warningText={emailError}
        onChangeText={(value) => {
          setEmail(value);
          if(value) {
            setEmailError('');
          }
        }}
        onBlur={()=>{
            if(!currentEmail) setEmailError('This cannot be empty!');
            else{
              if(!validateEmail(currentEmail)){
                setEmailError('This is not an email!');
              }
            }
          }
        }/>
      </View>
      <CustomButton0 title={"Submit"} style={styles.button} onPress={() => checkEmailRequest(currentEmail)}/>
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
  },
  indicator: {
    position: 'absolute',
    top: 400,
    left: 180,
  }
})