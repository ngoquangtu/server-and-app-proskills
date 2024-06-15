import { StyleSheet, Image, View, TouchableOpacity, Text, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { CustomButton0 } from '../../components/Button'
import FeedbackSent from './FeedbackSent'
import {LOCALHOST, PORT} from '@env'

const Contact = ({navigation}) => {
  const [feedback, setFeedback] = useState("");
  const [isSent, setIsSent] = useState(false);

  const sendFeedback = async () => {
    if(feedback === "") return;
    try {
      const api = await `http://${LOCALHOST}:${PORT}/api/users/feedback `;
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          feedback: feedback,
        }),
      });
      setIsSent(true);

      if(response.status === 200){
        setIsSent(true);
        setFeedback("");
        return;
      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
    setFeedback("");
  }

  return (
    <View>
      <Image source={require('../../assets/Rectangle.png')} style={styles.img}/>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name='chevron-left' style={styles.backIcon}/>
      </TouchableOpacity>
      <Text style={styles.title}>Contact Us</Text>

      <View style={{marginTop: 12, marginLeft: 24, width: '88%'}}>
        <Text style={styles.subtitle1}>Give us a <Text style={{color: '#12B7BD', fontWeight: '700'}}>Feedback</Text></Text>
        <Text style={styles.description}>If you'd like to talk directly to our team, please just drop us an e-mail using the form below.
           We aim to get back to all messages within 24 hours but we're usually much faster.</Text>
        
        <Text style={{marginTop: 30, fontSize: 18}}>Your Feedback</Text>
        <TextInput style={{borderWidth: 2, textAlignVertical: 'top', padding: 10, borderRadius: 10, marginTop: 10,}}
          placeholder={"Add text here..."}
          onChangeText={(value) => {
            setFeedback(value)
          }}
          defaultValue={""}
          multiline
          numberOfLines={6}></TextInput>
      </View>
      <CustomButton0 
        title={"Send"} 
        style={{width: '90%', alignSelf: 'center', marginTop: 200}}
        onPress={() => {
          sendFeedback();
        }}/>

        <Modal
          animationType='slide'
          visible={isSent}
          transparent={true}>
          <FeedbackSent navigation={navigation}/>
        </Modal>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    img:{
        width: '100%',
        height: 180,
        resizeMode: 'stretch',
    },
    backIcon: {
      position: 'absolute',
      top: -110,
      left: 10,
      fontSize: 40,
      color: '#fff',
    },
    title: {
      position: 'absolute',
      top: 130,
      left: 18,
      fontFamily: 'PlusJakartaSansMedium',
      fontSize: 24,
      fontWeight: '700',
      letterSpacing: 1.2,
      color: '#fff',
    },
    subtitle1: {
      fontSize: 17,
      fontWeight: '500', 
      letterSpacing: 1,
    },
    description: {
      color: '#70747E',
      fontSize: 13,
      lineHeight: 20,
      marginTop: 10,
      textAlign:'justify',
    }
})