import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import logo from "../../assets/images/a.jpg";


export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function Login() {
    console.log("Dados do Login:");
    console.log({ email, senha });
  }

  return (
    <>
      <ScrollView style={estilos.container}>
        <Image style={estilos.logo} source={logo} resizeMode="contain" />

        <Text style={estilos.titulo}>Login</Text>
        <Text style={estilos.sub}>Insira suas credenciais</Text>

        <View style={estilos.form}>
          <Text style={estilos.label}>Email</Text>

          <TextInput
            style={estilos.input}
            placeholder="Digite seu email"
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <TextInput
            style={estilos.input}
            placeholder="******"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TouchableOpacity style={estilos.botao} onPress={Login}>
            <Text style={estilos.botaoTexto}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", 
    paddingHorizontal: 25,
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  sub: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },
  form: {
    width: "100%",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    height: 55,
    backgroundColor: "#f1f3f5", 
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  botao: {
    backgroundColor: "#007AFF", 
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  botaoTexto: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
