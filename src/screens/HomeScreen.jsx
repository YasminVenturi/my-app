import { Button, Surface, Text } from "react-native-paper";
import style from "../config/style";

export default function HomeScreen({ navigation }) {
  return (
    <Surface style={style.container}>
      <Text>Bem vinda(o) ao nosso app</Text>
      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        mode="contained"
      >
        Login
      </Button>
    </Surface>
  );
}
