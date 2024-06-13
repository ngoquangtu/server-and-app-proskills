import { StyleSheet, SafeAreaView, ScrollView, Image, Text, View, StatusBar } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { CustomButton2, CustomButton5, FloatingLoginButton } from '../../components/Button'
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../utils/Context';

function convertTimestamp(time) {
  try{
    const date = new Date(time);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
    return formattedDate;
  }
  catch (error){
    return;
  }
}

const Info = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const context = useContext(AuthContext);

  const pickImage = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const base64 = await FileSystem.readAsStringAsync(result.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      setImage(base64);
      console.log(base64);
    }
  }

  const logoutRequest = async () => {
    await AsyncStorage.removeItem('JWT');
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        {/* <CustomButton1 
          title={"Upload"} 
          onPress={ () => {
            pickImage();
          }}></CustomButton1> */}

        <Image source={require('../../assets/Rectangle.png')} style={styles.img}/>

      </ScrollView>
      {context.isLogin ? <></> : <FloatingLoginButton title={"Log in / Sign up"} navigation={navigation}/>}
      
      <View style={styles.infoView}>
        <Image source={require('../../assets/default_avatar.png')} style={{borderRadius: 40, width: 110, height: 110}}/>
        {context.isLogin ? 
        <View style={{width: '100%'}}>
          <Text style={styles.username}>{context.loginInfo.username}</Text>
          <Text style={styles.email}>{context.loginInfo.email}</Text>
          <Text style={{textAlign: 'center', color: '#12B7BD', fontWeight: 'bold', fontSize: 15, marginTop: 20,}}>Student</Text>
          <Text style={{textAlign: 'center', color: '#70747E', fontSize: 10}}>Created at {convertTimestamp(context.loginInfo.created_at)}</Text>
        </View>
        :
        <Text style={{fontSize: 20, fontWeight: '600', marginTop: 10}}>Account</Text>
        }
      </View>

      <View style={{marginTop: 170, width: '100%'}}>
        {context.isLogin ? 
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Text style={{marginLeft: 24, marginBottom: 5, color: '#70747E', letterSpacing: 1, alignSelf: 'flex-start', fontSize: 12}}>
            Account settings
          </Text>
          <CustomButton5 
            title={"Change Password"}
            onPress={() => navigation.navigate('AboutUs')}/>
          <CustomButton5 title={"My learning"}/>
        </View>
        :
        <View></View>
        }
        
        <View style={{alignItems: 'center'}}>
          <Text style={{marginLeft: 24, marginBottom: 5, color: '#70747E', letterSpacing: 1, alignSelf: 'flex-start', fontSize: 12}}>Support</Text>
          <CustomButton5 
            title={"About Pro-Skills"}
            onPress={() => navigation.navigate('AboutUs')}/>
          <CustomButton5 
            title={"Help and Support"}
            onPress={() => navigation.navigate('Support')}/>
          <CustomButton5 
            title={"Contact us"}
            onPress={() => navigation.navigate('Contact')}/>
        </View>
        
      </View>
      {context.isLogin ? 
        <CustomButton2 
        title={"Sign out"}
        onPress={() => {
          navigation.navigate("Onboarding");
          context.logout();
          logoutRequest();
        }}/> : <></>
      }
      
    </SafeAreaView>
  )
}

export default Info

const styles = StyleSheet.create({
  img:{
    width: '100%',
    height: 180,
    resizeMode: 'stretch',
  },
  infoView: {
    position: 'absolute',
    top: 120,
    alignSelf: 'center',
    alignItems: 'center',
    width: 200,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    width: '100%',
    textAlign: 'center',
    letterSpacing: 1,
  },
  email: {
    textAlign: 'center',
    fontSize: 13,
    color: '#70747E',
    letterSpacing: 0.7,
  }
})