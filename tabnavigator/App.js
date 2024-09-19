import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Icon from 'react-native-vector-icons/Ionicons'; // Importar íconos de Ionicons

// Importar las pantallas
import ImageScreen from './screens/ImageScreen';
import QuizScreen from './screens/QuizScreen';
import OptionsScreen from './screens/OptionsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Images') {
              iconName = focused ? 'image' : 'image-outline';  // Íconos para Imágenes
            } else if (route.name === 'Quiz') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';  // Íconos para Cuestionario
            } else if (route.name === 'Options') {
              iconName = focused ? 'settings' : 'settings-outline';  // Íconos para Opciones
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            paddingBottom: 10, // Espaciado inferior de la barra
            paddingTop: 10,    // Espaciado superior de la barra
            height: 60,        // Altura de la barra de pestañas
          },
          tabBarItemStyle: {
            marginHorizontal: 10, // Espaciado horizontal entre los íconos de las pestañas
          },
        })}
      >
        <Tab.Screen name="Images" component={ImageScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
        <Tab.Screen name="Options" component={OptionsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}