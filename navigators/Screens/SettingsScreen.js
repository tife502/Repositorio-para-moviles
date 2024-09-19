import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function SettingsScreen({ route, navigation }) {

const { messageScreen2 } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de Configuraciones (SettingsScreen)</Text>
      <Text>{messageScreen2}</Text>
      <Button
        title = "reemplazar"
        onPress = {() => navigation.replace('Home')}
      />
      <Button
        title = "reiniciar"
        onPress = {() => navigation.reset({ index: 0, routes: [{name: 'Home'}]})}
      />
      <Button
        title = "Volver"
        onPress = {() => navigation.goBack()}
      />
    </View>
  );
}