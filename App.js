import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Gallary from './Screens/Gallary';
import ImageViewer from './Screens/ImageViewer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Album } from './Screens/Album';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gallery" component={Gallary}
        />
        <Stack.Screen name="ImageViewer" component={ImageViewer}
        />
        <Stack.Screen name="Album" component={Album} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
