import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchResult = () => {
  return (
    <View style={styles.container}>
      <FlatList data={itemData}
        renderItem={({item}) => <CarouselItem item={item}/>}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        pagingEnabled
        horizontal
        onViewableItemsChanged={onViewableItemsChanged}
        ref={carouselRef}
      />
      <Pagination data={itemData} index={slideIndex}/>
    </View>
  )
}

export default SearchResult

const styles = StyleSheet.create({
    noResult:{
        backgroundColor: '#000',
    }
})