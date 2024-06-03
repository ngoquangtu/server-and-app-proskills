import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { CustomSecureTextInput, CustomTextInput } from '../components/TextInput'
import { CustomButton0 } from '../components/Button'

const Form = () => {
  const [loaded] = useFonts({
    PlusJakartaSans: require('../assets/fonts/Plus Jakarta Sans.ttf'),
    PlusJakartaSansMedium: require('../assets/fonts/Plus Jakarta Sans Medium.ttf'),
  })
  if(!loaded){
      return null;
  }

  return (
    <View >
      <TouchableOpacity>
        <MaterialCommunityIcons name='chevron-left' style={styles.backIcon}/>
      </TouchableOpacity>
      <Text style={styles.description}>Reset your password</Text>
      <View style={styles.formField}>
        <CustomTextInput placeHolder={"Enter new password"} 
        warningText={"Must contain at least 8 characters"}/>
        <CustomSecureTextInput placeHolder={"**********"} 
        warningText={"Must contain at least 8 characters"}/>
      </View>
      <CustomButton0 title={"Reset"} style={styles.button}/>
    </View>
  )
}

export default Form

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
    top: 380,
    alignSelf: 'center',
  }
})