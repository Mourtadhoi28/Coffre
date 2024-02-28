import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const LockScreen = ({ navigation }) => {
  const [code, setCode] = useState('');

  const handleSubmit = () => {
    if (code === '1234') {
      // Logique de verrouillage réussie
      Alert.alert('Coffre verrouillé');
    } else {
      Alert.alert('Code incorrect');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saisissez le code de verrouillage</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCode}
        value={code}
        keyboardType="numeric"
        maxLength={4}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Verrouiller</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDFEFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    width: 200,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#052F25',
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LockScreen;
