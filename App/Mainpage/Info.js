import { StyleSheet, SafeAreaView, ScrollView, Image, StatusBar } from 'react-native'
import React, { useContext, useState } from 'react'
import { CustomButton1, FloatingLoginButton } from '../../components/Button'
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../utils/Context';

const Info = ({navigation}) => {
  const [image, setImage] = useState(null);
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
      <StatusBar backgroundColor="#12B7BD"/>
      <ScrollView style={styles.scrollView}>
        <CustomButton1 
          title={"Upload"} 
          onPress={ () => {
            pickImage();
          }}></CustomButton1>
        <CustomButton1 
          title={"Logout"}
          onPress={() => {
            context.logout();
            logoutRequest();
            navigation.navigate("Onboarding");
          }}></CustomButton1>
        <Image source={{uri: image}} style={styles.img}></Image>
      </ScrollView>
      {context.isLogin ?<></> : <FloatingLoginButton title={"Log in / Sign up"} navigation={navigation}/>}
      
    </SafeAreaView>
  )
}

export default Info

const styles = StyleSheet.create({
  img:{
    width: 300,
    height: 300,
    resizeMode: 'contain',
  }
})