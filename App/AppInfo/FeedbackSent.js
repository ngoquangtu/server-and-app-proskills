import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomButton3 } from '../../components/Button'

const FeedbackSent = ({navigation}) => {
  return (
    <View style={{justifyContent:'center', alignItems:'center', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <View style={{backgroundColor: '#fff', width: '90%', height:'30%', borderWidth: 10, borderColor: '#6B50C3', borderRadius: 30}}>
        <Text style={{textAlign: 'center', marginTop: 30, fontSize: 19, fontWeight: '600', color: '#12B7BD'}}>The feedback has been sent successfully!</Text>
        <Text style={{textAlign: 'center', fontSize: 15, fontWeight: '400', marginTop: 10}}>Thanks for your contribution!</Text>
        <CustomButton3 
          title={"Go Back"} 
          style={{width: '95%', alignSelf: 'center', marginTop: 40}}
          onPress={() => 
            navigation.navigate('HomePage')
          }
        />
      </View>
    </View>
  )
}

export default FeedbackSent