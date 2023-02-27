import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigations from './app/navigation';
import {LogBox} from 'react-native';

export default function App() {
    LogBox.ignoreLogs(['Warning: ...', LogBox.ignoreAllLogs()]);  
    
    return (
      <NavigationContainer>
        <Navigations/>
      </NavigationContainer>
    );
  }