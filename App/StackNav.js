import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingPage from './Onboarding';
import MainPage from './MainPage';
import SignInPage from './SignIn';
import SignUpForm from './SignUp/form';
import SignUpPage from './SignUp/SignUp';
import SignUpDonePage from './SignUp/SignUpDone';
import ForgotPass from './ChangePassword/ForgotPassword1';
import ChangeSuccess from './ChangePassword/ForgotPassword3';
import ChangePasswordForm from './ChangePassword/ForgotPassword2'
import CourseInfo from './Courses/CourseInfo';
import { AuthContext } from '../utils/Context';
import WatchVideo from './Courses/WatchVideo';
import AboutUs from './AppInfo/AboutUs';
import Contact from './AppInfo/Contact';
import HelpAndSupport from './AppInfo/HelpAndSupport';
import { StatusBar } from 'react-native';
import Info from './Mainpage/Info';
import MyCourse from './Mainpage/MyCourse';
import LoadingPage from './Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOCALHOST, PORT} from '@env';

const Stack = createStackNavigator();

export default function StackNav() {
  const context = React.useContext(AuthContext);
  const [initialRouteName, setInitialRouteName] = React.useState(null);

  React.useEffect(()=>{
    const checkAsyncStorage = async () => {
      try {
        const userToken = await AsyncStorage.getItem('JWT');
        if (userToken) {
          fetchData(userToken);
        } else {
          await AsyncStorage.removeItem('userInfo');
          await AsyncStorage.removeItem('JWT');
          setInitialRouteName('Onboarding');
        }
      } catch (error) {
        console.error('Error checking AsyncStorage:', error);
      } finally {
        context.setIsLoading(false);
      }
    };

    checkAsyncStorage();
  }, [])

  const fetchData = async (token) => {
    try {
      const api = `http://${LOCALHOST}:${PORT}/api/users/getavatar`;
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if(response.status === 200){
        context.setLogin(true);
        context.setLoginInfo(JSON.parse(await AsyncStorage.getItem('userInfo')));
        setInitialRouteName('HomePage');
        return;
      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
    await AsyncStorage.removeItem('userInfo');
    await AsyncStorage.removeItem('JWT');
    setInitialRouteName('Onboarding');
  }

  return (
    context.isLoading ? <LoadingPage/> :
    <NavigationContainer>
      <StatusBar backgroundColor="#12B7BD"/>
        <Stack.Navigator initialRouteName={initialRouteName}>
            <Stack.Screen name="HomePage" component={MainPage} options={{headerShown:false}}/>
            <Stack.Screen name="Onboarding" component={OnboardingPage} options={{headerShown:false}} />
            <Stack.Screen name="SignIn" component={SignInPage} options={{headerShown:false}}/>
            <Stack.Screen name="SignUp" component={SignUpPage} options={{headerShown:false}}/>
            <Stack.Screen name="SignUpForm" component={SignUpForm} options={{headerShown:false}}/>
            <Stack.Screen name="ForgotPass1" component={ForgotPass} options={{headerShown:false}}/>
            <Stack.Screen name="ForgotPass2" component={ChangePasswordForm} options={{headerShown:false}}/>
            <Stack.Screen name="ForgotPass3" component={ChangeSuccess} options={{headerShown:false}}/>
            <Stack.Screen name="SignUpDone" component={SignUpDonePage} options={{headerShown:false}}/>
            <Stack.Screen name="CourseInfo" component={CourseInfo} options={{headerShown:false}}/>
            <Stack.Screen name="WatchVideo" component={WatchVideo} options={{headerShown:false}}/>
            <Stack.Screen name="AboutUs" component={AboutUs} options={{headerShown:false}}/>
            <Stack.Screen name="Contact" component={Contact} options={{headerShown:false}}/>
            <Stack.Screen name="Support" component={HelpAndSupport} options={{headerShown:false}}/>
            <Stack.Screen name="Info" component={Info} options={{headerShown:false}}/>
            <Stack.Screen name="MyCourse" component={MyCourse} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
