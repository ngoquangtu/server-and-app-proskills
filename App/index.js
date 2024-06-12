import * as React from 'react';
import { AuthContext, AuthProvider } from '../utils/Context';
import StackNav from './StackNav';

export default function App() {

  return (
    <AuthProvider>
      <StackNav></StackNav>
    </AuthProvider>
  );
}
