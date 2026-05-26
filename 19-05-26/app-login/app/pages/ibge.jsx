import { useState } from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import logoIbge from "../../assets/images/logo-ibge.jpg";

export default function Ibge() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [pessoas, setPessoas] = useState("");

  const handleCadastro = () => {
    console.log({ nome, idade, localidade, pessoas });
    alert("Pesquisa enviada com sucesso!");
  };

  return (
    <SafeAreaView style={estilos.safeArea}>
      <View style={estilos.circuloTopo} />
      <View style={estilos.circuloBaixo} />

      <ScrollView contentContainerStyle={estilos.scrollContent}>
        <View style={estilos.logoContainer}>
          <Image source={logoIbge} style={estilos.logo} resizeMode="contain" />
        </View>

        <Text style={estilos.titulo}>Pesquisa</Text>

        <View style={estilos.form}>
          <Text style={estilos.label}>Nome</Text>
          <TextInput
            style={estilos.input}
            placeholder="Seu nome"
            placeholderTextColor="#999"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={estilos.label}>Idade</Text>
          <TextInput
            style={estilos.input}
            placeholder="30"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={idade}
            onChangeText={setIdade}
          />

          <Text style={estilos.label}>Localidade</Text>
          <TextInput
            style={estilos.input}
            placeholder="Mirandópolis"
            placeholderTextColor="#999"
            value={localidade}
            onChangeText={setLocalidade}
          />

          <Text style={estilos.label}>Quantas pessoas vivem na sua casa?</Text>
          <TextInput
            style={estilos.input}
            placeholder="20"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={pessoas}
            onChangeText={setPessoas}
          />

          <TouchableOpacity style={estilos.botao} onPress={handleCadastro}>
            <Text style={estilos.botaoTexto}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5faff",
  },
  scrollContent: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    alignItems: "center",
  },
  circuloTopo: {
    position: "absolute",
    top: -100,
    left: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#90d5ff",
    opacity: 0.8,
  },
  circuloBaixo: {
    position: "absolute",
    bottom: -100,
    right: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#90d5ff",
    opacity: 0.8,
  },
  logoContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 25,
    marginTop: 80,
    marginBottom: 30,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  titulo: {
    fontSize: 36,
    color: "#386791",
    fontWeight: "500",
    marginBottom: 30,
  },
  form: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    color: "#386791",
    marginBottom: 8,
    marginLeft: 5,
  },
  input: {
    width: "100%",
    height: 55,
    borderWidth: 2,
    borderColor: "#4a90e2",
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#386791",
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#2b65c0",
    width: "100%",
    height: 65,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
});
