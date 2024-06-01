import { StyleSheet, Image, View, Button} from 'react-native';
import Proskills from '../assets/Proskills.svg';
import CarouselData from '../components/CarouselData';
import CustomButton from '../components/Button';
import Carousel from '../components/Carousel';

export default function App() {
  return (
    <View style={styles.container}>
      <Proskills style={styles.nameLogo} width={116} height={35}/>
      <Carousel items={CarouselData}/>

      <CustomButton title="Register" type={0}/>
      <CustomButton title="Log in" type={1}/>
      <CustomButton title="Skip" type={2}/>
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
