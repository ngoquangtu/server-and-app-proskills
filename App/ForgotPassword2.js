import { StyleSheet, Image, View, Text} from 'react-native';
import { useFonts } from 'expo-font';
import {CustomButton0, CustomButton1 } from '../components/Button';

export default function EmailSentPage({navigation}) {
  const [loaded] = useFonts({
    PlusJakartaSans: require('../assets/fonts/Plus Jakarta Sans.ttf'),
    PlusJakartaSansMedium: require('../assets/fonts/Plus Jakarta Sans Medium.ttf'),
  })
  if(!loaded){
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check your email</Text>
      <Text style={styles.description}>We've sent a password recover instruction to your email</Text>
      <Image source={require('../assets/checkEmail.png')} style={styles.image}/>
      
      <View style={styles.buttonField}>
        <CustomButton0 title="Open email app"/>
        <CustomButton1 title="Will do it later"/>
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
    marginBottom: 170,
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
    width: 286,
    height: 88,
    letterSpacing: 1,
    position: 'absolute',
    top: 100, 
  },

  description: {
    fontFamily: 'PlusJakartaSans',
    fontSize: 14,
    color: '#9fa3a9',
    width: 311,
    height: 60,
    textAlign: 'center',
    position: 'absolute',
    top: 140, 
  },
  buttonField: {
    position: 'absolute',
    top: 520,
  }
});
