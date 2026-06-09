import { useState } from 'react'; 
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Cadastro({ navigation }) {
    const [temp, setTemp] = useState('');
    const [hum, setHum] = useState('');
    const [kmVento, setKmVento] = useState('');
    
    return (
        <View style={styles.container}>
            <Text style={styles.tituloPrincipal}>Cadastro de Medição</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Temperatura ºC"
                placeholderTextColor="#ffb3d1"
                value={temp}
                onChangeText={setTemp}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Umidade %"
                placeholderTextColor="#ffb3d1"
                value={hum}
                onChangeText={setHum}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Velocidade do Vento Km/h"
                placeholderTextColor="#ffb3d1"
                value={kmVento}
                onChangeText={setKmVento}
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.botaoSalvar} onPress={() => navigation.navigate('Principal')}>
                <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}

// 🎨 Identidade visual rosa perfeitamente integrada
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5', // Fundo rosa pastel suave padrão
    alignItems: 'center',       // Centraliza os elementos na horizontal
    justifyContent: "center",   // Centraliza os elementos na vertical
    padding: 20,
  },
  tituloPrincipal: {
    fontSize: 26,
    fontWeight: "bold",
    color: '#ff1493',           // Deep Pink
    textAlign: "center",
    marginBottom: 30, 
    letterSpacing: 1,
  },
  input: {
    width: 280,                 // 🌟 Largura menor e fofa controlada
    height: 46,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: '#ffb6c1',     // Rosa claro nas bordas
    borderRadius: 23,           // Formato pílula idêntico às outras telas
    paddingHorizontal: 20,
    fontSize: 15,
    color: '#ff1493',
    marginBottom: 12,
    // Sombras estruturadas
    shadowColor: '#ff69b4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  botaoSalvar: {
    width: 280,                 // 🌟 Mesma largura dos inputs
    height: 46,
    backgroundColor: '#ff69b4', // Hot Pink
    borderRadius: 23,           // Formato pílula
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    shadowColor: '#ff1493',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotao: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});