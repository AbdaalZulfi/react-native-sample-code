import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from './Themed'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { cssInterop } from 'nativewind'

cssInterop(View, {
    className: "style"
})

interface RoundedButton_V2Props {
    icon: IconProp; 
    onPress: (a: number) => void; 
    value: number;
}

export const RoundedButton_V2 = ({ icon, onPress, value }: RoundedButton_V2Props) => (
    <TouchableOpacity onPress={() => onPress(value)}  style={{ width: 30, height: 30, backgroundColor: '#00000' }}>
        <FontAwesomeIcon icon={icon} size={26} color='#000000' />
    </TouchableOpacity>

)
