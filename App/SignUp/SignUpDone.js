import { StyleSheet, Image, View, Text} from 'react-native';
import { useFonts } from 'expo-font';
import {CustomButton0, CustomButton1 } from '../../components/Button';

export default function SignUpDonePage({navigation}) {
  const [loaded] = useFonts({
    PlusJakartaSans: require('../../assets/fonts/Plus Jakarta Sans.ttf'),
    PlusJakartaSansMedium: require('../../assets/fonts/Plus Jakarta Sans Medium.ttf'),
  })
  if(!loaded){
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Successfully Registered!</Text>
      <Text style={styles.description}>Your new account has been created! Please log in with your new account</Text>
      <Image source={require('../../assets/checkEmail.png')} style={styles.image}/>
      
      <View style={styles.buttonField}>
        <CustomButton0 title="Log in"
        onPress={() => navigation.navigate('SignIn')}/>
        <CustomButton1 title="I'll do it later"
        onPress={() => navigation.navigate('HomePage')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    marginBottom: 130,
    width: 231,
    height: 210,
    resizeMode: 'cover',
  },

  title: {
    fontFamily: 'PlusJakartaSansMedium',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0B121F',
    textAlign: 'center',
    width: 340,
    height: 88,
    letterSpacing: 1,
    position: 'absolute',
    top: 100, 
  },

  description: {
    fontFamily: 'PlusJakartaSans',
    fontSize: 14,
    color: '#9fa3a9',
    width: 250,
    height: 60,
    textAlign: 'center',
    position: 'absolute',
    top: 140, 
  },
  buttonField: {
    position: 'absolute',
    top: 550,
  }
});
