import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loginInfo, setLoginInfo] = useState({})
    const [isLogin, setLogin] = useState(false);

    const login = async (jwt, userInfo) => {
      setLogin(prev => prev = true);
      setLoginInfo(prev => prev = userInfo);
      await AsyncStorage.setItem('JWT', jwt);
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
    };

    const checkLogin = async () => {
        const token = await AsyncStorage.getItem('JWT');
        setLogin(token ? true: false);
        if(token) setLoginInfo(JSON.parse(await AsyncStorage.getItem('userInfo')));
        return token !== null;
    }
  
    const logout = async () => {
      setLogin(false);
      await AsyncStorage.removeItem('JWT');
      await AsyncStorage.removeItem('userInfo');
    };

  return (
    <AuthContext.Provider value={{ isLogin, loginInfo, login, checkLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };