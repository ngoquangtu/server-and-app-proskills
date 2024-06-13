import { Image, StyleSheet, ScrollView, View, Text } from 'react-native'
import React from 'react'
import SearchResultItem from './SearchResultItem'

const SearchResult = ({items, navigation}) => {
  return (
    items.length ? 
    <ScrollView>
      {items.map((item, index) => (
        <View key={index}>
          <SearchResultItem 
            item={item}
            navigation={navigation}
          />
        </View>
      ))}
    </ScrollView>
    : 
    <View style={{width: '100%', justifyContent:'center', marginTop: 100}}>
      <Image source={require('../assets/onboardCarouselItem2.png')} style={styles.noResult}/>
      <Text style={styles.noResultText}>No Results</Text>
    </View>
  )
}

export default SearchResult

const styles = StyleSheet.create({
    noResult:{
      width: 210,
      height: 196,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    noResultText: {
      color: '#70747E',
      fontSize: 16,
      marginTop: 20,
      textAlign: 'center',
    },
})