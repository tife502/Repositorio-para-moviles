import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ route, navigation}) {
  const { message } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalles Screen</Text>
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