import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {

    // Se estiver validado, navega para a tela inicial
    navigation.replace('HomeTabs');
  };

  return (
    <View style={styles.container}>
      {/* Imagem do Logo */}
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      {/* Inputs com as cores da nova paleta de superfície */}
      <TextInput 
        style={styles.input} 
        placeholder="E-mail ou usuário" 
        placeholderTextColor="#96B5AD" // Verde Menta Pastel para os placeholders ficarem sutis
        autoCapitalize="none" 
        value={email} 
        onChangeText={setEmail} 
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        placeholderTextColor="#96B5AD" 
        secureTextEntry 
        value={senha} 
        onChangeText={setSenha} 
      />

      {/* Botão Principal com a cor Rosa Goiaba da identidade visual */}
      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.botaoTexto}>ENTRAR</Text>
      </TouchableOpacity>

      {/* Link para cadastro usando a cor Creme Suave */}
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.linkTexto}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#281916", // Marrom Escuro Profundo (Background conforme relatório)
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: { 
    width: 250, 
    height: 150, 
    marginBottom: 25, 
    resizeMode: "contain" 
  },
  input: {
    width: "100%",
    backgroundColor: "#402b27", // Cinza/Marrom de Superfície para dar contraste com o fundo
    color: "#FFD2CB", // Texto digitado em Creme Suave
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#543934", // Borda sutil para acabamento profissional
    fontSize: 16,
  },
  botao: {
    width: "100%",
    backgroundColor: "#E86786", // Rosa Goiaba (Destaque principal Call to Action)
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    // Pequena sombra para dar profundidade ao botão
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  botaoTexto: { 
    color: "#281916", // Texto escuro para garantir alto contraste e acessibilidade sobre o rosa
    fontWeight: "bold", 
    fontSize: 16,
    letterSpacing: 1,
  },
  linkTexto: { 
    color: "#FFD2CB", // Creme Suave para links e textos secundários legíveis
    fontSize: 14,
    textDecorationLine: "underline" // Sublinhado discreto indicando que é clicável
  },
});