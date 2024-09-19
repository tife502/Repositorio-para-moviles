import * as React from 'react';
import { Button, View, Text, TextInput, Alert } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [inputText, setInputText] = React.useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla Principal (HomeScreen)</Text>

      <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '80%',
          marginBottom: 20,
          paddingHorizontal: 10
        }}
        placeholder="Escribe 'soy admin'"
        onChangeText={text => setInputText(text)}
        value={inputText}
      />

      <Button
        title="Ir a Siguiente Pantalla"
        onPress={() => {
          if (inputText.toLowerCase() === 'soy admin') {
            navigation.navigate('Details', { message: 'Bienvenido, donde deseas ir' });
          } else {
            Alert.alert('Acceso denegado', 'Debes escribir "soy admin" para continuar.');
          }
        }}
      />
    </View>
  );
}
