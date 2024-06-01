import { StyleSheet, View, Text, Image, useWindowDimensions} from 'react-native'
import { useFonts } from 'expo-font';
import React from 'react'

const CarouselItem = ({item}) => {
  const {width} = useWindowDimensions();

  const [loaded] = useFonts({
    PlusJakartaSans: require('../assets/fonts/Plus Jakarta Sans.ttf'),
    PlusJakartaSansMedium: require('../assets/fonts/Plus Jakarta Sans Medium.ttf'),
  })
  if(!loaded){
    return null;
  }

  return (
    <View style={[styles.container, {width}]}>
      <Image source={item.image} style={styles.image}/>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      color:'#000',
      alignItems: 'center',
    },

    image:{
      width: 210,
      height: 196,
      marginTop: 41,
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
      marginTop: 60,
    },

    description: {
      fontFamily: 'PlusJakartaSans',
      fontSize: 14,
      color: '#9fa3a9',
      width: 311,
      height: 60,
      textAlign: 'center',
    },
  })

export default CarouselItem