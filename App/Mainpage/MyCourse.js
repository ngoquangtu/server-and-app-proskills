import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React, { useContext } from 'react'
import { FloatingLoginButton } from '../../components/Button'
import { AuthContext } from '../../utils/Context'

const MyCourse = ({navigation}) => {
  const context = useContext(AuthContext)
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#12B7BD"/>
      <ScrollView style={styles.scrollView}>
      </ScrollView>
      {context.isLogin ?<></> : <FloatingLoginButton title={"Log in / Sign up"} navigation={navigation}/>}
      
    </SafeAreaView>
  )
}

export default MyCourse

const styles = StyleSheet.create({})