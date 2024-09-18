import * as React from 'react';
import { View, Text, Button } from 'react-native';

// El parámetro 'route' contiene información sobre la ruta actual y los parámetros pasados
// En este caso, 'route.params' contiene los parámetros enviados desde 'HomeScreen'
export default function DetailsScreen({ route, navigation}) {
  // Desestructuramos 'message' de 'route.params'
  const { message } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalles Screen</Text>
      {/* Mostramos el mensaje que recibimos desde 'HomeScreen' */}
      <Text>{message}</Text>
      <Button
        title = "Volver"
        onPress = {() => navigation.goBack()}
      />
      <Button
        title='Ir a configuracion'
        onPress={() => navigation.navigate('Settings', { messageScreen2: 'hola, desde Details!' })}
      />
    </View>
  );
}