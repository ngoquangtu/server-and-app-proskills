import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { CustomTextInput, CustomSecureTextInput } from '../../components/TextInput'
import { CustomButton0 } from '../../components/Button'

const SignUpForm = ({navigation}) => {
  const [loaded] = useFonts({
    PlusJakartaSans: require('../../assets/fonts/Plus Jakarta Sans.ttf'),
    PlusJakartaSansMedium: require('../../assets/fonts/Plus Jakarta Sans Medium.ttf'),
  })
  if(!loaded){
      return null;
  }

  return (
    <View >
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <MaterialCommunityIcons name='chevron-left' style={styles.backIcon}/>
      </TouchableOpacity>
      <Text style={styles.description}>Enter your details</Text>

      <View style={styles.formField}>
        <CustomTextInput placeHolder={"username"} />
        <CustomTextInput placeHolder={"email address"} warningText={"please enter valid email"}/>
        <CustomSecureTextInput placeHolder={"**********"} warningText={"must contain 8 characters"}/>
        <CustomTextInput placeHolder={"confirm password"} warningText={"must match both password"}/>
      </View>

      <CustomButton0 title={"Continue"} style={styles.button}/>
    </View>
  )
}

export default SignUpForm

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
    top: 700,
    alignSelf: 'center',
  }
})