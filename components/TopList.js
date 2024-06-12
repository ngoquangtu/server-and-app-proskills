import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import TopListItem from './TopListItem'

const TopList = ({items, style, navigation}) => {
    const itemData = {items}.items;
  return (
    <View style={[styles.container, style]}>
      <FlatList data={itemData}
        renderItem={({item}) => <TopListItem item={item} navigation={navigation}/>}
        keyExtractor={item => item.id}
        horizontal
      />
    </View>
  )
}

export default TopList

const styles = StyleSheet.create({
  container:{
    marginTop: 12,
  }
})