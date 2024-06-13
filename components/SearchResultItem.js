import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-ratings'

const SearchResultItem = ({item, navigation}) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate("CourseInfo", {courseId: item.id})}>
      <Image source={{uri: item.thumbnail}} style={styles.img}/>
      <View style={{width: '70%', height: '100%', marginTop: 10, marginLeft: 12}}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.publisher}>{item.publisher}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{width: '6%', color: '#70747E', fontSize: 13}}>{item.rating}</Text>
          <Rating
            readonly={true}
            startingValue={item.rating}
            fractions={20}
            jumpValue={0.1}
            style={styles.rating}
            imageSize={16}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default SearchResultItem

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    height: 92,
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: .2,
    borderRadius: 10,
  },
  img: {
    width: '30%',
    height: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontSize: 15,
    letterSpacing: 1,
    height: '45%',
  },
  publisher: {
    fontSize: 12, 
    letterSpacing: 0.8,
    height: '20%',
    color: '#282F3E',
  },
  rating: {
    width:'40%',
  }
})