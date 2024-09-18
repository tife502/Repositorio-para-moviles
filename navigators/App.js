import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importamos las pantallas desde la carpeta 'screens'
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import SettingsScreen from './Screens/SettingsScreen';

// Creamos un StackNavigator
const Stack = createStackNavigator();

export default function App() {
  return (
    // El NavigationContainer es el contenedor principal que maneja toda la navegación en la app
    <NavigationContainer>
      {/* El Stack.Navigator maneja la pila de pantallas para la navegación de stack */}
      <Stack.Navigator initialRouteName="Home">
        {/* Cada Stack.Screen representa una pantalla en el stack */}
        {/* 'navigation' será automáticamente pasado a cada pantalla */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}