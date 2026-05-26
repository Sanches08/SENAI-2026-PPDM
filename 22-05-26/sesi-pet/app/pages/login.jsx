import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Bem-Vindo ao SESI Pet</Text>

      <Text style={styles.subtitulo}>Insira seus dados abaixo</Text>

      <TextInput
        style={styles.input}
        placeholder="Insira seu email"
        value={email}
        onChangeText={setEmail}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="********"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      ></TextInput>

       <TouchableOpacity onPress={() => navigation.replace('Principal')} style={styles.botaoEntrar}> 
            <Text style={styles.textoBotao}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Registro')} style={styles.botaoCadastrar}> 
            <Text style={styles.textoCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: "center",
  },
  tituloPrincipal: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 16,
    color: "#475569",
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#0f172a",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
    elevation: 1,
  },
  botaoEntrar: {
    backgroundColor: "#3b82f6",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
    shadowColor: "#3b82f6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotao: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  botaoCadastrar: {
    alignItems: "center",
    paddingVertical: 10,
  },
  textoCadastrar: {
    color: "#3b82f6",
    fontSize: 16,
    fontWeight: "500",
  },
});
