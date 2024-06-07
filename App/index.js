import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingPage from './Onboarding';
import SignInPage from './SignIn';
import SignUpPage from './SignUp/SignUp';
import SignUpForm from './SignUp/form';
import ForgotPass from './ForgotPassword/ForgotPassword1';
import ChangeSuccess from './ForgotPassword/ForgotPassword3';
import MainPage from './MainPage';
import ChangePasswordForm from './ForgotPassword/ForgotPassword2'
import SignUpDonePage from './SignUp/SignUpDone';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="HomePage" component={MainPage} options={{headerShown:false}} />
        <Stack.Screen name="Onboarding" component={OnboardingPage} options={{headerShown:false}} />
        <Stack.Screen name="SignIn" component={SignInPage} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUpPage} options={{headerShown:false}}/>
        <Stack.Screen name="SignUpForm" component={SignUpForm} options={{headerShown:false}}/>
        <Stack.Screen name="ForgotPass1" component={ForgotPass} options={{headerShown:false}}/>
        <Stack.Screen name="ForgotPass2" component={ChangePasswordForm} options={{headerShown:false}}/>
        <Stack.Screen name="ForgotPass3" component={ChangeSuccess} options={{headerShown:false}}/>
        <Stack.Screen name="SignUpDone" component={SignUpDonePage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
