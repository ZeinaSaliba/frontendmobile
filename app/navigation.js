import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Matches from './screens/Matches/index';
import Conversation from './screens/Conversation/index';

const Stack = createNativeStackNavigator();
export default function Navigations(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Matches">
      <Stack.Screen name="Matches" component={Matches} />
      <Stack.Screen name="Conversation" component={Conversation} />
    </Stack.Navigator>
  );
}
