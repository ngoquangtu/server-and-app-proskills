import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import TopListItem from './TopListItem'

const TopList = (items) => {
    const itemData = items.items;
  return (
    <View style={styles.container}>
      <FlatList data={itemData}
        renderItem={({item}) => <TopListItem item={item}/>}
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
    marginLeft: 15,
  }
})