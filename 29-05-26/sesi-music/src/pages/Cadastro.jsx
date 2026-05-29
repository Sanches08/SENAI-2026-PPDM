import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = () => {
    navigation.replace('Login')
  };

  return (
    <View style={styles.container}>
      {/* Imagem do Logo */}
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      
      <Text style={styles.titulo}>Criar Conta</Text>

      {/* Inputs com as cores da paleta de superfície de conforto acústico */}
      <TextInput 
        style={styles.input} 
        placeholder="Nome Completo" 
        placeholderTextColor="#96B5AD" // Verde Menta Pastel sutil
        value={nome} 
        onChangeText={setNome} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        placeholderTextColor="#96B5AD" 
        keyboardType="email-address" 
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
      <TextInput 
        style={styles.input} 
        placeholder="Confirmar Senha" 
        placeholderTextColor="#96B5AD" 
        secureTextEntry 
        value={confirmarSenha} 
        onChangeText={setConfirmarSenha} 
      />

      {/* Botão de Cadastro com a cor Rosa Goiaba da identidade visual */}
      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.botaoTexto}>CADASTRAR</Text>
      </TouchableOpacity>

      {/* Link para retornar ao login com a cor Creme Suave */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkTexto}>Já tem uma conta? Faça login</Text>
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
    height: 120, // Ajustado levemente para não esmagar os 4 inputs na tela
    resizeMode: "contain",
    marginBottom: 10
  },
  titulo: { 
    fontSize: 24, 
    color: "#FFD2CB", // Creme Suave para títulos principais
    fontWeight: "bold", 
    marginBottom: 20,
    letterSpacing: 0.5
  },
  input: {
    width: "100%",
    backgroundColor: "#402b27", // Cinza/Marrom de Superfície para dar contraste com o fundo
    color: "#FFD2CB", // Texto digitado em Creme Suave
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#543934", // Borda sutil combinando com a identidade quente
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
    // Sombra suave para profundidade do botão
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  botaoTexto: { 
    color: "#281916", // Texto escuro para garantir alto contraste sobre o rosa
    fontWeight: "bold", 
    fontSize: 16,
    letterSpacing: 1
  },
  linkTexto: { 
    color: "#FFD2CB", // Creme Suave legível para links secundários
    fontSize: 14,
    textDecorationLine: "underline" // Sublinhado indicando elemento clicável
  },
});