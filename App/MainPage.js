import { StyleSheet, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Mainpage/Home';
import Search from './Mainpage/Search';
import MyCourse from './Mainpage/MyCourse';
import Info from './Mainpage/Info';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainPage({navigation}) {
  
  return (
    <View style={{backgroundColor: '#000', position: 'absolute', bottom: 0, width: '100%'}}>
      <Tab.Navigator 
            screenOptions= {
              {
                headerShown: false,
                tabBarShowLabel: false,
              }
            }
          >
            <Tab.Screen name={"Home"} 
              component={Home}
              options={{
                tabBarIcon: ({focused}) => {
                  return <View style={[focused? styles.tabBarActive : {},{alignItems:'center'}]}>
                    <MaterialCommunityIcons name={focused? 'home': 'home-outline'} 
                    style={[focused? styles.tabBarIconActive : styles.tabBarIconInActive, {fontSize: 28}]}/>
                    <Text style={[focused? {color: '#ffffff'} : {color: '#70747E'}, {fontSize: 11}]}>Home</Text>
                  </View>
                },
              }
            }/>
            <Tab.Screen name={"Search"} 
              component={Search}
              options={{
                tabBarIcon: ({focused}) => {
                  return <View style={[focused? styles.tabBarActive : {},{alignItems:'center'}]}>
                    <MaterialCommunityIcons name={'magnify'} 
                    style={[focused? styles.tabBarIconActive : styles.tabBarIconInActive, {fontSize: 28}]}/>
                    <Text style={[focused? {color: '#ffffff'} : {color: '#70747E'}, {fontSize: 11}]}>Search</Text>
                  </View>
                },
              }}
            />
            <Tab.Screen name={"MyCourse"} 
              component={MyCourse}
              options={{
                tabBarIcon: ({focused}) => {
                  return <View style={[focused? styles.tabBarActive : {},{alignItems:'center'}]}>
                    <MaterialCommunityIcons name={focused? 'book': 'book-outline'}  
                    style={[focused? styles.tabBarIconActive : styles.tabBarIconInActive, {fontSize: 28}]}/>
                    <Text style={[focused? {color: '#ffffff'} : {color: '#70747E'}, {fontSize: 11}]}>My Course</Text>
                  </View>
                },
              }}
            />
            <Tab.Screen name={"Info"} 
              component={Info}
              options={{
                tabBarIcon: ({focused}) => {
                  return <View style={[focused? styles.tabBarActive : {},{alignItems:'center'}]}>
                    <MaterialCommunityIcons name={focused? 'account': 'account-outline'}  
                    style={[focused? styles.tabBarIconActive : styles.tabBarIconInActive, {fontSize: 28}]}/>
                    <Text style={[focused? {color: '#ffffff'} : {color: '#70747E'}, {fontSize: 11}]}>Account</Text>
                  </View>
                },
              }}
            />
          </Tab.Navigator>
    </View>
    
  )
}

const styles = StyleSheet.create({
  tabBarActive:{
    backgroundColor: '#3700B3',
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  tabBarIconActive:{
    color: '#ffffff',
    backgroundColor: '#3700B3'
  },
  tabBarIconInActive:{
    color: '#70747E',
  },
  loginButton:{
    width: '100%',
    height: 60,
    borderRadius: 0,
  }
})