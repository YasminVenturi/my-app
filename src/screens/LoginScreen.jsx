import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
 import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import style from "../config/style";
import { Surface } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    try{
    signInWithEmailAndPassword(auth, email, senha)
        navigation.navigate("News");
    } catch(error) {
        setError(error.message);
        
        showModal(); nb
      }
      
  };

  return (
    <Surface style={style.container}>
    <View style={style.innerContainer}>
    <Text
          variant="headlineMedium"
          style={{
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Faça seu Login
        </Text>
      <TextInput 
      placeholder="Email" 
      onChangeText={setEmail}
      value={email} 
      style={style.input}
      error={error.email}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        style={style.input}
        secureTextEntry
        error={error.senha}
      />
      <Button title="Login" onPress={handleLogin} >
        Fazer Login
      </Button>
      <Button onPress={() => navigation.navigate("RegisterScreen")}>
          Faça seu cadastro
        </Button>
    </View>
    </Surface>
  );
}
