import { StyleSheet, Image, View, Text} from 'react-native';
import {CustomButton0, CustomButton1 } from '../../components/Button';

export default function ChangeSuccess({navigation}) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Successfully changed!</Text>
      <Text style={styles.description}>Your password has been successfully change! Please log into your account again</Text>
      <Image source={require('../../assets/checkEmail.png')} style={styles.image}/>
      
      <View style={styles.buttonField}>
        <CustomButton0 
          title="Log in"
          onPress={()=> {navigation.navigate('SignIn')}}/>
        <CustomButton1 title="I'll do it later"
          onPress={() => {navigation.navigate('HomePage')}}/>
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
    top: 550,
  }
});
