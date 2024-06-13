import { StyleSheet, Image, TouchableOpacity, Text, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { CustomButton0 } from '../../components/Button'

const HelpAndSupport = ({navigation}) => {
  return (
    <ScrollView>
      <Image source={require('../../assets/Rectangle.png')} style={styles.img}/>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name='chevron-left' style={styles.backIcon}/>
      </TouchableOpacity>
      <Text style={styles.title}>Help and Support</Text>
      <Text style={styles.text}>
      Welcome to Pro-Skills Help and Support! We’re here to ensure you have a seamless learning experience. 
      If you have any questions or encounter any issues, our support team is ready to assist you. 
      Below are some common topics and resources to help you get started:
      </Text>
      <Text style={styles.subtitle}>Getting Started</Text>
      <Text style={styles.subtext}>•	Creating an Account: Learn how to sign up and create your Pro-Skills account.</Text>
      <Text style={styles.subtext}>•	Navigating the Platform: A guide to help you find and enroll in courses.</Text>
      <Text style={styles.subtext}>•	Personalizing Your Learning Path: Tips on customizing your learning journey based on your interests and goals.</Text>
      <Text style={styles.subtitle}>Account and Profile</Text>
      <Text style={styles.subtext}>•	Managing Your Profile: How to update your profile information and preferences.</Text>
      <Text style={styles.subtext}>•	Password and Security: Steps to reset your password and keep your account secure.</Text>
      <Text style={styles.subtext}>•	Notifications: How to manage email and in-app notifications.</Text>
      <Text style={styles.subtitle}>Courses and Learning</Text>
      <Text style={styles.subtext}>•	Finding Courses: Tips on searching for and selecting the best courses for your needs.</Text>
      <Text style={styles.subtext}>•	Course Enrollment: How to enroll in courses and track your progress.</Text>
      <Text style={styles.subtext}>•	Accessing Course Materials: Information on how to access and download course resources.</Text>
      <Text style={styles.subtitle}>Technical Support</Text>
      <Text style={styles.subtext}>•	Troubleshooting: Solutions to common technical issues.</Text>
      <Text style={styles.subtext}>•	System Requirements: Ensure your device meets the necessary requirements for optimal performance.</Text>
      <Text style={styles.subtext}>•	Contact Support: How to reach our support team for assistance.</Text>
      <Text style={styles.subtext}>•	Providing Feedback: How to submit feedback and suggestions to improve Pro-Skills.</Text>
      <Text style={styles.text}>  
      If you need further assistance, don’t hesitate to reach out to our support team. We’re here to help you every step of the way!
      </Text>
      <CustomButton0 
        title={"Contact us"} 
        style={{alignSelf: 'center', width: '90%'}}
        onPress={() => navigation.navigate("Contact")}/>
    </ScrollView>
  )
}

export default HelpAndSupport

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
  text: {
    marginLeft: 20,
    width: '88%',
    fontSize: 14,
    marginTop: 18,
    color: '#70747E',
    textAlign: 'justify',
  },
  subtitle: {
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 12,
    color: '#12B7BD',
    fontWeight: 'bold',
    fontSize: 15,
  },
  subtext: {
    marginLeft: 20,
    width: '88%',
    fontSize: 14,
    color: '#70747E',
    textAlign: 'justify',
  }
})