import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState } from 'react';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLogin, setLogin] = useState(false);

    const login = async (jwt) => {
      setLogin(true);
      await AsyncStorage.setItem('JWT', jwt);
      console.log(await AsyncStorage.getItem('JWT'));
    };

    const checkLogin = async () => {
        const token = await AsyncStorage.getItem('JWT');
        await setLogin(token ? true: false);
        return token !== null;
    }
  
    const logout = async () => {
      setLogin(false);
      await AsyncStorage.removeItem('JWT');
    };

  return (
    <AuthContext.Provider value={{ isLogin, login, checkLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };