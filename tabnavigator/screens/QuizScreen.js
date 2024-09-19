import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, alert, Alert } from 'react-native';

// Componente de radio button personalizado
const RadioButton = ({ options, selectedOption, onSelect }) => {
  return (
    <View>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.radioContainer}
          onPress={() => onSelect(option)}
        >
          <View style={styles.radioCircle}>
            {selectedOption === option && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.radioText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Pantalla de cuestionario
export default function QuizScreen() {
  const [question1, setQuestion1] = useState('');
  const [selectedOptionQ1, setSelectedOptionQ1] = useState(null);
  const [selectedOptionQ2, setSelectedOptionQ2] = useState(null);

  const handleSubmit = () => {
    // Aquí puedes manejar la lógica de envío o procesamiento de respuestas
    console.log('Pregunta 1 (TextInput):', question1);
    console.log('Pregunta 2 (Selección múltiple):', selectedOptionQ1);
    console.log('Pregunta 3 (Selección múltiple):', selectedOptionQ2);
  };

  return (
    <View style = {styles.container}>
      <Text style={styles.title}>Pantalla de Examen (QuizScreen)</Text>

      {/* Pregunta 1: TextInput */}
      <Text style={styles.question}>1. ¿Cuál es tu lenguaje de programación favorito?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Escribe tu respuesta aquí"
        value={question1}
        onChangeText={setQuestion1}
      />

      {/* Pregunta 2: Selección múltiple con radio buttons */}
      <Text style={styles.question}>2. ¿Cuál es tu sistema operativo preferido?</Text>
      <RadioButton
        options={['Windows', 'macOS', 'Linux']}
        selectedOption={selectedOptionQ1}
        onSelect={setSelectedOptionQ1}
      />

      {/* Pregunta 3: Selección múltiple con radio buttons */}
      <Text style={styles.question}>3. ¿Prefieres desarrollo frontend o backend?</Text>
      <RadioButton
        options={['Frontend', 'Backend', 'Fullstack']}
        selectedOption={selectedOptionQ2}
        onSelect={setSelectedOptionQ2}
      />

      {/* Botón de envío */}
      <Button title="Enviar Respuestas" onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  radioCircle: {
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2e86de',
  },
});