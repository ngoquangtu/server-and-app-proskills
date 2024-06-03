import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingPage from './Onboarding';
import SignInPage from './SignIn';
import SignUpPage from './SignUp';
import SignUpForm from './SignUp/form';
import ForgotPass_Email from './ForgotPassword1';
import EmailSentPage from './ForgotPassword2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingPage} options={{headerShown:false}} />
        <Stack.Screen name="SignIn" component={SignInPage} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUpPage} options={{headerShown:false}}/>
        <Stack.Screen name="SignUpForm" component={SignUpForm} options={{headerShown:false}}/>
        <Stack.Screen name="ForgotPass1" component={ForgotPass_Email} options={{headerShown:false}}/>
        <Stack.Screen name="ForgotPass2" component={EmailSentPage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
