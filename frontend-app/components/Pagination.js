import { StyleSheet, View } from 'react-native'
import React from 'react'

const Pagination = ({data, index}) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        return <View key={idx.toString()} style={(idx === index)? styles.dotCurrent : styles.dot}/>;
      })}
    </View>
  );
}

export default Pagination

const styles = StyleSheet.create({
    container:{
      position: 'absolute',
      top: 460,
      flexDirection: 'row'
    },
    dot: {
      width: 4,
      height: 4,
      marginTop: 2,
      marginHorizontal: 3,
      borderRadius: 2,
      backgroundColor: '#9FA3A9'
    },
    dotCurrent: {
      width: 8,
      height: 8,
      backgroundColor: '#ffffff',
      marginHorizontal: 3,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#000',
    }
})