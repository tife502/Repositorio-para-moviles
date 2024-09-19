import * as React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Lista de opciones ficticias
const options = [
  { id: '1', name: 'Configuración de notificaciones' },
  { id: '2', name: 'Privacidad' },
  { id: '3', name: 'Cambiar idioma' },
  { id: '4', name: 'Actualizaciones automáticas' },
  { id: '5', name: 'Gestión de cuentas' },
];

// Renderizado de cada opción
const renderItem = ({ item }) => (
  <View style={styles.optionItem}>
    <Text style={styles.optionText}>{item.name}</Text>
  </View>
);

export default function OptionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opciones de Configuración</Text>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

// Estilos para la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  optionItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
  },
});
