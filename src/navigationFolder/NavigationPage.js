import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SecondHome from '../screens/SecondHome';

const Stack = createNativeStackNavigator();

const NavigationPage = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SecondHome" component={SecondHome} />
          </Stack.Navigator>
        </NavigationContainer>
      );
};

export default NavigationPage;
