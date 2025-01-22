import { RoundedButton_V2 } from '@/components/RoundButton';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function TabTwoScreen() {
  const [number, setNumber] = useState('1');

  const plus = (a: number) => {
    const add: number = parseInt(number) + a;
    setNumber(add.toString())
    // console.log("I am gonna add");
  }

  const minus = (a: number) =>  {
    if (number > '0') {
        const minus: number = parseInt(number) - a;
        setNumber(minus.toString())
        // console.log("I am gonna subtract");
      }
    }


  return (
    <SafeAreaView className='items-center justify-center bg-primary-100'>
      <Text className='text-xl text-primary-500'>Set the number of field(s) you wish to play with</Text>
      <View className="flex-row flex items-center justify-center gap-4">
        
      <RoundedButton_V2 icon={['fas', 'minus']} onPress={minus} value={1} disabled={number === '1'}/>

        <TextInput
          className='text-4xl bg-transparent p-4 rounded-lg w-20 h-20 flex items-center justify-center text-center'
          placeholder="Enter a number"
          onChangeText={setNumber}
          value={number}
          keyboardType="numeric"
          // readOnly // Make the input field read-only
        />

        <RoundedButton_V2 icon={['fas', 'plus']} onPress={plus} value={1} disabled={false} />
      </View>

      {/* <RoundedButton_V2  placeholder="Generate Field(s)"/> */}


    </SafeAreaView>
  ); 
}