import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Logo from '../../assets/estacao.jpg';

export default function Registro({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    return (
        <View style={styles.container}>
            {/* Logo compacta e redondinha */}
            <Image source={Logo} style={styles.logo} />
            
            <Text style={styles.titulo}>Cadastre-se</Text>
            
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
                placeholder='Senha'
                placeholderTextColor="#ffb3d1"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            
            <TextInput 
                style={styles.input}
                placeholder='Confirme sua senha'
                placeholderTextColor="#ffb3d1"
                value={confSenha}
                onChangeText={setConfSenha}
                secureTextEntry
            />
            
            {/* Botão de Cadastrar menor */}
            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => navigation.replace('Login')}
            > 
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>

            {/* Link para voltar caso o usuário já tenha conta */}
            <TouchableOpacity 
                style={styles.botaoVoltar} 
                onPress={() => navigation.navigate('Login')}
            > 
                <Text style={styles.textoBotaoVoltar}>
                    Já tem uma conta? <Text style={styles.linkNegrito}>Faça Login</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

// 🎨 Estilização idêntica à de Login (elementos menores e delicados)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff0f5', // Fundo rosa pastel bem suave
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: 140, // Tamanho menor e delicado
        height: 140,
        borderRadius: 70,
        marginBottom: 25,
        borderWidth: 3,
        borderColor: '#ff69b4', // Borda Rosa Choque
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ff1493', // Deep Pink
        marginBottom: 25,
        letterSpacing: 1,
    },
    input: {
        width: 280, // 🌟 Tamanho menor controlado (não ocupa a tela toda)
        height: 46,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ffb6c1',
        borderRadius: 23, // Visual estilo "pílula"
        paddingHorizontal: 20,
        fontSize: 15,
        color: '#ff1493',
        marginBottom: 12,
        // Sombras
        shadowColor: '#ff69b4',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    botao: {
        width: 280, // 🌟 Casando perfeitamente com o tamanho do input
        height: 46,
        backgroundColor: '#ff69b4', // Hot Pink
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
    textoBotao: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    botaoVoltar: {
        marginTop: 20,
        padding: 10,
    },
    textoBotaoVoltar: {
        color: '#666',
        fontSize: 14,
    },
    linkNegrito: {
        color: '#ff1493',
        fontWeight: 'bold',
    }
});