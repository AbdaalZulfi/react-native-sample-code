import { StyleSheet, Image, Platform, View, Text, TouchableOpacity, TextInput  } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function TabTwoScreen() {
  const [number, setNumber] = useState<string>();

  const addNUMBER = () => {
    console.log("i am pressed")
  } 

  const onChangeText = () => {

  }
  
  return (
    <SafeAreaView  className='flex-1 items-center justify-center bg-red-100 dark:bg-gray-800' edges={['top', 'bottom']}>
        <Text className="text-xl text-red-500 dark:text-white"> pLEASE ENTER HOW MANY DICE YOU WEANT</Text>
        <TextInput
          className='bg-slate-100 px-4 py-2 border border-gray-200 rounded-sm'        
          onChangeText={onChangeText}
          placeholder="useless placeholder OWE"
          value={number}
        />
        <TextInput
          className='bg-slate-100 px-4 py-2 border border-gray-200 rounded-sm'        
          onChangeText={() => onChangeText()}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <TouchableOpacity className='mt-10 px-6 py-3 bg-red-600 rounded-lg'>
          <Text className="text-lg text-white" onPress={addNUMBER}>Add Number</Text>          
        </TouchableOpacity>
    </SafeAreaView >
    )
    
}
