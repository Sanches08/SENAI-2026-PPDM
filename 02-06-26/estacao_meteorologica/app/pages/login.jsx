import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Logo from '../../assets/estacao.jpg';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            
            <Text style={styles.titulo}>Login</Text>
            
            <TextInput 
                style={styles.input}
                placeholder='Insira seu e-mail'
                placeholderTextColor="#ffb3d1"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            
            <TextInput 
                style={styles.input}
                placeholder='Sua senha'
                placeholderTextColor="#ffb3d1"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            
            <TouchableOpacity 
                style={styles.botaoLogin} 
                onPress={() => navigation.replace('Principal')}
            > 
                <Text style={styles.textoBotaoLogin}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.botaoLogin} 
                onPress={() => navigation.replace('Cadastro')}
            > 
                <Text style={styles.textoBotaoLogin}>Cadastro</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.botaoCadastrar} 
                onPress={() => navigation.navigate('Registro')}
            > 
            
                <Text style={styles.textoBotaoCadastrar}>
                    Não tem uma conta? <Text style={styles.linkNegrito}>Cadastre-se</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff0f5', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: 140, // Reduzi levemente para harmonizar com os inputs menores
        height: 140,
        borderRadius: 70,
        marginBottom: 25,
        borderWidth: 3,
        borderColor: '#ff69b4',
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ff1493', 
        marginBottom: 25,
        letterSpacing: 1,
    },
    input: {
        width: 280, // 🌟 Tamanho fixo menor e centralizado
        height: 46,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ffb6c1',
        borderRadius: 23,
        paddingHorizontal: 20,
        fontSize: 15,
        color: '#ff1493',
        marginBottom: 12,
        shadowColor: '#ff69b4',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    botaoLogin: {
        width: 280, // 🌟 Casando perfeitamente com a largura do input
        height: 46,
        backgroundColor: '#ff69b4', 
        borderRadius: 23,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        shadowColor: '#ff1493',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3,
    },
    textoBotaoLogin: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    botaoCadastrar: {
        marginTop: 20,
        padding: 10,
    },
    textoBotaoCadastrar: {
        color: '#666', 
        fontSize: 14,
    },
    linkNegrito: {
        color: '#ff1493', 
        fontWeight: 'bold',
    }
});