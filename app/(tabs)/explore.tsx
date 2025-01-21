import { RoundedButton_V2 } from '@/components/RoundButton';
import { FontAwesomeIcon } from '@/components/Themed';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function TabTwoScreen() {
  const [number, setNumber] = useState('0');

  const plus = (a: number) => {
    const add: number = parseInt(number) + a;
    setNumber(add.toString())
    console.log("I am gonna add");
  }

  const minus = (a: number) => {
    const minus: number = parseInt(number) - a;
    setNumber(minus.toString())
    console.log("I am gonna subtract");
  }



  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-primary-100'>
      <Text className='text-xl text-red-400'>Select the number of dice(s) you wish to play with</Text>
      <View className="flex-row flex items-center justify-center gap-4">
        <RoundedButton_V2 icon={['fas', 'plus']} onPress={(x) => plus(x)} value={1} />
        <TextInput
          className='text-4xl bg-transparent p-4 rounded-lg w-20 h-20 flex items-center justify-center text-center'

          onChangeText={setNumber}
          value={number}
          keyboardType='numeric'
          readOnly
        />
        <RoundedButton_V2 icon={['fas', 'minus']} onPress={(x) => minus(x)} value={1} />
      </View>


    </SafeAreaView>
  );
}