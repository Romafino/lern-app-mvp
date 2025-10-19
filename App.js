import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './src/screens/DashboardScreen';
import SessionScreen from './src/screens/SessionScreen';
import WeekViewScreen from './src/screens/WeekViewScreen';
import { initializeSeedData } from './src/data/seedData';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    // Initialize seed data on first launch
    initializeSeedData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen}
          options={{ title: 'Study Dashboard' }}
        />
        <Stack.Screen 
          name="Session" 
          component={SessionScreen}
          options={{ title: 'Study Session' }}
        />
        <Stack.Screen 
          name="WeekView" 
          component={WeekViewScreen}
          options={{ title: 'Week Overview' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}