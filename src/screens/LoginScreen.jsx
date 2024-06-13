import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate("News");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          placeholder="Digite seu Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Digite sua Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button
          title="Login"
          onPress={handleLogin}
          color="#AC58FA"
          style={styles.button}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CECEF6",
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: "80%",
    backgroundColor: "#CE95EF",
    borderRadius: 10,
  },
  input: {
    marginBottom: 10,
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#9D2FD1",
  },
  button: {
    marginBottom: 10,
    color: "#9D2FD1",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
