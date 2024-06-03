import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { CustomTextInput } from '../components/TextInput'
import { CustomButton0 } from '../components/Button'

const ForgotPass_Email = ({navigation}) => {
  const [loaded] = useFonts({
    PlusJakartaSans: require('../assets/fonts/Plus Jakarta Sans.ttf'),
    PlusJakartaSansMedium: require('../assets/fonts/Plus Jakarta Sans Medium.ttf'),
  })
  if(!loaded){
      return null;
  }

  return (
    <View>
      <TouchableOpacity>
        <MaterialCommunityIcons name='chevron-left' style={styles.backIcon}/>
      </TouchableOpacity>
      <Text style={styles.description}>Enter your email</Text>
      <CustomTextInput placeHolder={"email address"} 
      warningText={"The email address you provided is not associated with your account"}
      style={styles.formField}/>
      <CustomButton0 title={"Send email"} style={styles.button} onPress={() => navigation.navigate('ForgotPass2')}/>
    </View>
  )
}

export default ForgotPass_Email;

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
  formField: {
    position: 'absolute',
    top: 201,
    left: 35,
  },
  button:{
    position: 'absolute',
    top: 300,
    alignSelf: 'center',
  }
})