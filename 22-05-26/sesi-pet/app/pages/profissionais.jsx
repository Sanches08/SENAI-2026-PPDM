import { View, Text, StyleSheet, FlatList } from "react-native";
import { profissionais } from "../dados/profissionais";

export default function Profissionais() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Profissionais
            </Text>

            <FlatList
                data={profissionais}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <Text style={styles.nome}>{item.nome}</Text>
                        <Text style={styles.especialidade}>{item.especialidade}</Text>
                    </View>
                )}
                contentContainerStyle={styles.lista}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f7fa',
        paddingTop: 20,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1e293b',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 10,
    },
    lista: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    nome: {
        fontSize: 18,
        fontWeight: '600',
        color: '#0f172a',
        marginBottom: 6,
    },
    especialidade: {
        fontSize: 14,
        color: '#3b82f6',
        fontWeight: '500',
    },
});