import React, { useEffect, useState } from "react";
import { ErrorNotificationProps } from "./ErrorNotification.props";
import {
  Alert,
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors } from "../tokens";

const ErrorNotification = ({ error }: ErrorNotificationProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const animatedValue = new Animated.Value(-100);

  const onEnter = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (!error) {
      return;
    }
    setIsShow(true);
    const timerId = setTimeout(() => {
      setIsShow(false);
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, [error]);

  if (!isShow) {
    return <></>;
  }

  return (
    <Animated.View
      style={{ ...styles.error, transform: [{ translateY: animatedValue }] }}
      onLayout={onEnter}
    >
      <Text style={styles.errorText}>{error}</Text>
    </Animated.View>
  );
};

export default ErrorNotification;

const styles = StyleSheet.create({
  error: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    backgroundColor: Colors.red,
    padding: 15,
    top: 50,
  },
  errorText: {
    fontSize: 16,
    color: Colors.white,
    textAlign: "center",
  },
});
