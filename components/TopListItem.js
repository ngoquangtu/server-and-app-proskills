import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-ratings';
import { useFonts } from 'expo-font';

const TopListItem = ({item}) => {
    const [loaded] = useFonts({
      PlusJakartaSans: require('../assets/fonts/Plus Jakarta Sans.ttf'),
      PlusJakartaSansMedium: require('../assets/fonts/Plus Jakarta Sans Medium.ttf'),
    })
    if(!loaded){
      return null;
    }


  
    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.8}>
        <Image source={item.thumbnail} style={styles.thumbnail}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.publisher}</Text>
        <View style={styles.ratingContainer}>
            <Text style={styles.rateNum}>{item.rating}</Text>
            <Rating
                readonly={true}
                startingValue={item.rating}
                fractions={20}
                jumpValue={0.1}
                style={styles.rating}
                imageSize={16}
            />
            <Text style={styles.subNum}>(1)</Text>
        </View>
      </TouchableOpacity>
    )
  }

export default TopListItem

const styles = StyleSheet.create({
  container:{
    width: 180,
    height: 216,
    marginRight: 22,
  },
  thumbnail:{
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
  },
  title:{
    fontFamily: 'PlusJakartaSansMedium',
    fontSize: 14,
    fontWeight: 'medium',
    height: 40,
  },
  author:{
    fontFamily: 'PlusJakartaSans',
    fontSize: 12,
    color: '#585D69',
    letterSpacing: 1.2,
    marginTop: 7,
  },
  ratingContainer:{
    flexDirection: 'row',
    marginTop: 8,
  },
  rating:{
    height: 14,
    width: '60%',
  },
  rateNum:{
    fontFamily: 'PlusJakartaSans',
    fontSize: 11,
    color: '#585D69',
    width: '10%',
  },
  subNum:{
    width: '30%',
    color: '#888C94',
    fontFamily: 'PlusJakartaSans',
    fontSize: 11,
    textAlign:'right',
  },
})