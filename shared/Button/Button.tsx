import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, Radius } from "../tokens";

const Button = ({ text, ...props }: PressableProps & { text: string }) => {
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Radius.rad10,
    height: 58,
    backgroundColor: Colors.primary
  },
  text: {
    color: Colors.white,
    fontSize: 18
  },
});

export default Button;