import { StyleSheet, View, FlatList } from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import CarouselItem from './CarouselItem';
import Pagination from './Pagination';

export default function Carousel(items) {
  const itemData = items.items;
  const [slideIndex, setSlideIndex] = useState(0);
  const carouselRef = useRef();

  useEffect(() =>{
    const interval = setInterval(() => {
      if (slideIndex === itemData.length - 1) {
        carouselRef.current.scrollToIndex({ animated: true, index: 0 });
        setSlideIndex(-1);
      } else {
        carouselRef.current.scrollToIndex({ animated: true, index: slideIndex + 1});
        setSlideIndex(slideIndex + 1);
      }
  }, 2000);

  return () => clearInterval(interval);
  });

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    setSlideIndex(viewableItems[0].index);
  }).current;
  
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color:'#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
})