import { StyleSheet, SafeAreaView, ScrollView, Image, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { CustomButton1, FloatingLoginButton } from '../../components/Button'
import * as ImagePicker from 'expo-image-picker';

const Info = ({navigation}) => {
  const [image, setImage] = useState(null);

  const pickImage = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setImage(result.assets[0].uri);
    }
  }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#12B7BD"/>
      <ScrollView style={styles.scrollView}>
        <CustomButton1 title={"Upload"} 
        onPress={ () => {
          pickImage();
        }}></CustomButton1>
        <Image source={{uri: image}} style={styles.img}></Image>
      </ScrollView>
      <FloatingLoginButton title={"Log in / Sign up"} navigation={navigation}/>
      
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