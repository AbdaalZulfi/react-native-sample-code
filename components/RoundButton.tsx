import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "./Themed";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { cssInterop } from "nativewind";

cssInterop(View, {
  className: "style",
});

interface RoundedButton_V2Props {
  icon?: IconProp;
  onPress: (a: string) => void;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
}

export const RoundedButton_V2 = ({
  icon,
  onPress,
  value,
  disabled,
  placeholder,
}: RoundedButton_V2Props) => (
  <TouchableOpacity
    onPress={() => onPress(value)}
    style={{
      width: 40,
      height: 40,
      // backgroundColor: '#00000',
      borderWidth: 1, // Add border width
      borderColor: "#00000", // Add border color
      borderTopLeftRadius: 10, // Half of the width and height to make it rounded
      borderBottomRightRadius: 10,
      borderLeftColor: "#FFFFF",
      alignItems: "center",
      justifyContent: "center",
      opacity: disabled ? 0.2 : 1, // Reduce opacity when disabled
    }}
    disabled={disabled}
  >
    {placeholder ? (
      <Text>{placeholder}</Text>
    ) : (
      <FontAwesomeIcon icon={icon} size={26} color="#000000" />
    )}
  </TouchableOpacity>
);
