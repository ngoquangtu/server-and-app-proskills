import { StyleSheet, View, StatusBar} from 'react-native';
import Proskills from '../assets/Proskills.svg';
import CarouselData from '../components/CarouselData';
import {CustomButton0, CustomButton1, CustomButton2} from '../components/Button';
import Carousel from '../components/Carousel';

export default function OnboardingPage({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#12B7BD"/>
      <Proskills style={styles.nameLogo} width={116} height={35}/>
      <Carousel items={CarouselData}/>

      <View style={styles.buttonField}>
        <CustomButton0 title="Register" onPress={() => navigation.navigate('SignUp')}/>
        <CustomButton1 title="Log in" onPress={() => navigation.navigate('SignIn')}/>
        <CustomButton2 title="Skip" onPress={() => navigation.navigate('HomePage')}/>
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

  nameLogo: {
    marginTop: 40,
  },

  buttonField: {
    position: 'absolute',
    top: 540,
  }
});
