import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingPage from './Onboarding';
import MainPage from './MainPage';
import SignInPage from './SignIn';
import SignUpForm from './SignUp/form';
import SignUpPage from './SignUp/SignUp';
import SignUpDonePage from './SignUp/SignUpDone';
import ForgotPass from './ForgotPassword/ForgotPassword1';
import ChangeSuccess from './ForgotPassword/ForgotPassword3';
import ChangePasswordForm from './ForgotPassword/ForgotPassword2'
import CourseInfo from './Courses/CourseInfo';
import { AuthContext } from '../utils/Context';
import WatchVideo from './Courses/WatchVideo';
import AboutUs from './AppInfo/AboutUs';
import Contact from './AppInfo/Contact';
import HelpAndSupport from './AppInfo/HelpAndSupport';
import { StatusBar } from 'react-native';
import Info from './Mainpage/Info';
import MyCourse from './Mainpage/MyCourse';

const Stack = createStackNavigator();

export default function StackNav() {
  const context = React.useContext(AuthContext);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#12B7BD"/>
        <Stack.Navigator initialRouteName={context.checkLogin() ? "HomePage" : "Onboarding"}>
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
