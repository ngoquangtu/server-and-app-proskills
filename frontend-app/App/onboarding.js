import { StyleSheet, Image, View, Button} from 'react-native';
import Proskills from '../assets/Proskills.svg';
import CarouselData from '../components/CarouselData';
import {CustomButton0, CustomButton1, CustomButton2} from '../components/Button';
import Carousel from '../components/Carousel';

export default function App() {
  return (
    <View style={styles.container}>
      <Proskills style={styles.nameLogo} width={116} height={35}/>
      <Carousel items={CarouselData}/>

      <CustomButton0 title="Register"/>
      <CustomButton1 title="Log in"/>
      <CustomButton2 title="Skip"/>
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

});
