import * as React from 'react';
import { AuthProvider } from '../utils/Context';
import StackNav from './StackNav';

export default function App() {
  return (
    <AuthProvider>
      <StackNav></StackNav>
    </AuthProvider>
  );
}
