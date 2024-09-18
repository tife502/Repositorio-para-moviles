import * as React from 'react';
import { Button, View, Text } from 'react-native';

// El parámetro 'navigation' es automáticamente proporcionado por el StackNavigator
// Sirve para navegar entre pantallas usando métodos como navigate()
// Como recordatorio el objeto que recibe siempre es props
// En este caso, solo estamos interesados en 'navigation'
// Por eso usamos la sintaxis ({ navigation })

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla Principal (HomeScreen)</Text>
      {/* Usamos 'navigation.navigate' para movernos a la pantalla 'Details' */}
      {/* Además, pasamos un parámetro 'message' que será recibido en la pantalla 'Details' */}
      <Button
        title="Ir a Detalles"
        onPress={() => navigation.navigate('Details', { message: 'Hola desde Home!' })}
      />
    </View>
  );
}