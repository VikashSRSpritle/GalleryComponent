import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Gallary from './Screens.js/Gallary';
import ImageViewer from './Screens.js/ImageViewer';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gallery" component={Gallary} />
        <Stack.Screen name="ImageViewer" component={ImageViewer} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
