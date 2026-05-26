import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Registro({navigation}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.tituloPrincipal}>
                Bem-Vindo ao SESI Pet
            </Text>
            <Text style={styles.subtitulo}>
                Cadastre-se
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Insira seu email"
                value={email}
                onChangeText={setEmail}
            >
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder="********"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            >
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder="********"
                value={confSenha}
                onChangeText={setConfSenha}
                secureTextEntry
            >
            </TextInput>
            
            <TouchableOpacity 
                style={styles.botaoCadastrar}
                onPress={() => navigation.replace('Login')}
            >
                <Text style={styles.textoBotao}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f7fa',
        paddingHorizontal: 24,
        paddingVertical: 40,
        justifyContent: 'center',
    },
    tituloPrincipal: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1e293b',
        textAlign: 'center',
        marginBottom: 12,
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: '600',
        color: '#475569',
        textAlign: 'center',
        marginBottom: 32,
    },
    input: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        color: '#0f172a',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.02,
        shadowRadius: 2,
        elevation: 1,
    },
    botaoCadastrar: {
        backgroundColor: '#10b981',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 8,
        shadowColor: '#10b981',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    textoBotao: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
    },
});