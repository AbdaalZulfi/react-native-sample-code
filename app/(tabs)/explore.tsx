import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 20, // half of 40 (height + padding)
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

interface RoundedButtonProps {
  onPress: () => void;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
};

export default function TabTwoScreen() {
  const [number, setNumber] = useState('');

  const addNUMBER = () => {
    console.log("I am pressed");
  } 

  const onChangeText = () => {
    // Handle text input change
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
      <Text style={{ fontSize: 20, color: 'red' }}>Select the number of dice(s) you wish to play with</Text>
      <TextInput
        style={{ backgroundColor: 'gray', padding: 10, borderRadius: 5, marginBottom: 10 }}
        onChangeText={onChangeText}
        placeholder="Enter a number"
        value={number}
      />
      <RoundedButton onPress={addNUMBER} />
    </SafeAreaView>
  );
}