import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
          <MaterialCommunityIcons style={styles.arrowLeftIcon} resizeMode="cover" name='chevron-left'/>
        </TouchableOpacity>
        <Text style={styles.courseDetail}>Course Detail</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    arrowLeftIcon: {
        fontSize: 30,
    },
    header: {
        width: '100%',
        flexDirection: "row",
        zIndex: 1,
        paddingVertical: 4,
    },
    courseDetail: {
      fontSize: 20,
      letterSpacing: 0.2,
      fontWeight: "600",
      color: "#000",
      textAlign: "left",
      marginLeft: 95,
    },
})