import { Pressable, StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Colors, Radius } from "../tokens";
import { useState } from "react";
import OpenedEyeIcon from "../../assets/icons/eye-opened";
import ClosedEyeIcon from "../../assets/icons/eye-closed";

const Input = ({isPassword, ...props}: TextInputProps & { isPassword?: boolean }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  return (
    <View>
      <TextInput
        {...props}
        style={styles.input}
        secureTextEntry={isPassword && !isPasswordVisible}
        placeholderTextColor={Colors.gray}
      />
      {isPassword && (
        <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.eyeIcon}>
          {isPasswordVisible ? <OpenedEyeIcon /> : <ClosedEyeIcon />}
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 58,
    backgroundColor: Colors.violetDark,
    paddingHorizontal: 24,
    borderRadius: Radius.rad10,
    fontSize: 16,
    color: Colors.gray,
    fontFamily: 'FiraSans',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 18
  }
});

export default Input;
