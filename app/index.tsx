import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  ToastAndroid,
  Platform,
} from "react-native";
import Input from "../shared/Input/Input";
import { Colors, Gaps } from "../shared/tokens";
import Button from "../shared/Button/Button";
import ErrorNotification from "../shared/ErrorNotification/ErrorNotification";
import { useState } from "react";
import { Link } from "expo-router";

export default function Login() {
  // const width = Dimensions.get("window").width;
  const [error, setError] = useState<string | undefined>();

  const alert = () => {
    // Platform.OS === "ios"
    //   ? Alert.alert("Ошибка", "Неверный логин или пароль", [
    //       {
    //         text: "Хорошо",
    //         onPress: () => {},
    //         style: "cancel",
    //       },
    //     ])
    //   : ToastAndroid.showWithGravity(
    //       "Неверный логин или пароль",
    //       ToastAndroid.SHORT,
    //       ToastAndroid.CENTER
    //     );
    setError("gfggf");
  };
  return (
    <View style={styles.container}>
      <ErrorNotification error={error} />
      <View style={styles.content}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../assets/logo.png")}
        />
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input isPassword placeholder="Password" />
          <Button text="Войти" onPress={alert} />
        </View>
        <Link href={'/restore'}>Восстановить пароль</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 55,
    flex: 1,
    backgroundColor: Colors.black,
  },
  form: {
    gap: Gaps.g16,
    alignSelf: "stretch",
  },
  content: {
    alignItems: "center",
    gap: Gaps.g50,
  },
  logo: {
    width: 220,
  },
});
