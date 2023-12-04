// src/FormScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const FormScreen = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleFormSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', { id, name, age, address, phone });
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="ID"
        value={id}
        onChangeText={(text) => setId(text)}
        style={styles.input}
      />
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        label="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
        style={styles.input}
      />
      <TextInput
        label="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
        style={styles.input}
      />
      <TextInput
        label="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleFormSubmit} style={styles.button}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
});

export default FormScreen;
