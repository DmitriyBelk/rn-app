import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Input from "./shared/Input/Input";
import { Colors, Gaps } from "./shared/tokens";
import Button from "./shared/Button/Button";

export default function App() {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("./assets/logo.png")}
        />
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input isPassword placeholder="Password" />
          <Button text="Войти"/>
        </View>
        <Text>Восстановить пароль</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // alignItems: 'center',
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
