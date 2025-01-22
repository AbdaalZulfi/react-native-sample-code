import { RoundedButton_V2 } from "@/components/RoundButton";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const [buttonAction, setbuttonAction] = useState<string>("");
  const [number_s, setNumber_s] = useState<string>("1");
  useEffect(() => {
    switch (buttonAction) {
      case "plus":
        if (number_s && parseInt(number_s) && parseInt(number_s) <= 8) {
          const newNumber = parseInt(number_s) + 1;
          setNumber_s(newNumber.toString());
        } else {
          console.log("plus  condition fials");
        }

        break;
      case "minus":
        if (number_s && parseInt(number_s) && parseInt(number_s) >= 2) {
          const newNumber = parseInt(number_s) - 1;
          setNumber_s(newNumber.toString());
        } else {
          console.log("minus  condition fials");
        }
        break;
      default:
        console.log("do nothing");
        break;
    }
    setbuttonAction("");
    if (!parseInt(number_s)) {
      setNumber_s("1");
    }
  }, [buttonAction]);

  const plus = (a: string) => {
    setbuttonAction(a);
    // console.log("I am gonna add");
  };

  const minus = (a: string) => {
    setbuttonAction(a);
  };

  const hello = (subtityle: string) => {
    Alert.alert("fuck you", subtityle)
  }

  return (
    <SafeAreaView className="flex-1 bg-primary-100">
      <View className="mt-20 p-4">
        <Text className="text-lg text-primary-500 text-center mx-4">
          Set the number of field(s) you wish to play with
        </Text>
        <View className="flex-row flex items-center justify-center gap-6 mt-5">
          <RoundedButton_V2
            icon={["fas", "minus"]}
            onPress={minus}
            value={"minus"}
          />

          <TextInput
            className="text-2xl bg-transparent p-4 rounded-lg w-20 h-16 flex items-center justify-center text-center "
            // placeholder="Enter a number"
            onChangeText={setNumber_s}
            value={number_s}
            maxLength={1}
            keyboardType="numeric"
            // readOnly // Make the input field read-only
          />

          <RoundedButton_V2
            icon={["fas", "plus"]}
            onPress={plus}
            value={"plus"}
          />
        </View>
      </View>

      <RoundedButton_V2  placeholder="Generate Field(s)" onPress={hello} value={"fuck u back"} />
    </SafeAreaView>
  );
}
