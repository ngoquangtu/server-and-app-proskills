import { StyleSheet, SafeAreaView, ScrollView, Image, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { CustomButton2, CustomButton5, FloatingLoginButton } from '../../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../utils/Context';
import { convertTimestamp } from '../../utils/Utility';

const Info = ({navigation}) => {
  const context = useContext(AuthContext);
  
  const logoutRequest = async () => {
    await AsyncStorage.removeItem('JWT');
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <Image source={require('../../assets/Rectangle.png')} style={styles.img}/>

      </ScrollView>
      {context.isLogin ? <></> : <FloatingLoginButton title={"Log in / Sign up"} navigation={navigation}/>}
      
      <View style={styles.infoView}>
          <Image source={context.isLogin? {uri: context.loginInfo.avatar_url} : require('../../assets/default_avatar.png')} style={styles.avatar}/>

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
            onPress={() => {
              navigation.navigate('ForgotPass2', {currentEmail: context.loginInfo.email});
              }}/>
          <CustomButton5 
            title={"My learning"}
            onPress={()=> navigation.navigate('MyCourse')}/>
          <CustomButton5 
            title={"Contact us"}
            onPress={() => navigation.navigate('Contact')}/>
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
    width: 350,
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
  },
  avatar:{
    borderRadius: 56,
    width: 110, 
    height: 110,
    borderWidth: 4,
    borderColor: '#12B7BD',
  }
})