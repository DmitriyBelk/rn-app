import {
  Animated,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, Radius } from "../tokens";

const Button = ({ text, ...props }: PressableProps & { text: string }) => {
  const animatedValue = new Animated.Value(100);
  const color = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.primaryHover, Colors.primary],
  });

  const fadeIn = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    props.onPressIn && props.onPressIn(e);
  };
  const fadeOut = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 200,
      useNativeDriver: true,
    }).start();
    props.onPressOut && props.onPressOut(e);
  };
  // const animatedValue = new Animated.ValueXY({
  //   x: 0,
  //   y: 0,
  // });

  // Animated.timing(animatedValue, {
  //   toValue: {
  //     x: 1,
  //     y: 1,
  //   },
  //   duration: 200,
  //   useNativeDriver: false
  // }).start();

  return (
    <Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View style={{ ...styles.button, backgroundColor: color }}>
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Radius.rad10,
    height: 58,
    backgroundColor: Colors.primary,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
  },
});

export default Button;
