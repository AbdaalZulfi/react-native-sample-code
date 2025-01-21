import { FontAwesomeIcon as DefaultFontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';

interface Nativewind_Props {
    classname?: string;
}

export type FontAwesomeIcon_Props = Nativewind_Props & React.ComponentProps<typeof DefaultFontAwesomeIcon>;



export function FontAwesomeIcon(props: FontAwesomeIcon_Props)  {
    // const { size,  ...otherProps } = props;
    return <DefaultFontAwesomeIcon   {...props} /> 
}