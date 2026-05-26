import { View, Text, StyleSheet, FlatList } from "react-native";
import { atendimentos } from "../dados/profissionais";

export default function Atendimentos() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Atendimentos
            </Text>

            <FlatList
                style={styles.flatList}
                data={atendimentos}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <Text style={styles.pet}>{item.pet}</Text>
                        <Text style={styles.servico}>{item.servico}</Text>
                        <Text style={styles.horario}>{item.horario}</Text>
                    </View>
                )}
            >
                
            </FlatList>
        </View>
    )
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
    flatList: {
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: '#fff',
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
    pet: {
        fontSize: 18,
        fontWeight: '600',
        color: '#0f172a',
        marginBottom: 6,
    },
    servico: {
        fontSize: 14,
        color: '#334155',
        marginBottom: 4,
    },
    horario: {
        fontSize: 14,
        color: '#3b82f6',
        fontWeight: '500',
        marginTop: 2,
    },
});