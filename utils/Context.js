import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';
import {LOCALHOST, PORT} from '@env';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loginInfo, setLoginInfo] = useState({})
    const [isLogin, setLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [deleteComment, setDeleteComment] = useState(false);

    const login = async (jwt, userInfo) => {
      setLogin(true);
      setLoginInfo(userInfo);
      await AsyncStorage.setItem('JWT', jwt);
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
    };

    const logout = async () => {
      setLogin(false);
      await AsyncStorage.removeItem('JWT');
      await AsyncStorage.removeItem('userInfo');
    };

    
  const delComment = async (course_id, comment_id) => {
    try {
      const api = `http://${LOCALHOST}:${PORT}/api/comments/courses/${course_id}/comments/${comment_id}`;
      const response = await fetch(api, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: loginInfo.id,
        })
      });

      if(response.status === 200){
        const data = await response.json();
        console.log(data);
        setDeleteComment(false);
        return;
      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
    setDeleteComment(false);
  }

  return (
    <AuthContext.Provider value={{ isLogin, setLogin, loginInfo, setLoginInfo, login, logout, isLoading, setIsLoading, delComment, deleteComment, setDeleteComment }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };