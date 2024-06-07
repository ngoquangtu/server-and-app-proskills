import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import Proskills from '../assets/Proskills.svg'
import MainLogo from '../assets/MainLogo.svg'

const LoadingPage = () => {
  return (
    <View style={styles.container}>
        <MainLogo width="70" height="70" style={styles.mainLogo}/>
        <Proskills width="200" height="60" style={styles.nameLogo}/>
        <ActivityIndicator size={"large"} style={styles.indicator}></ActivityIndicator>
    </View>
  )
}

export default LoadingPage;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: 250,
    },
    mainLogo: {
        width: 64,
        height: 64,
    },
    nameLogo: {
        marginTop: 12,
    },
    indicator:{
        marginTop: 100,
        transform: [{ scale: 2 }],
    }
})