import { View, Text, FlatList, StyleSheet } from "react-native";

const medicoes = [
    { id: 1, temp: 30, hum: 50, vento: 20, mes: 'Jan' },
    { id: 2, temp: 60, hum: 20, vento: 60, mes: 'Fev' },
    { id: 3, temp: 20, hum: 80, vento: 20, mes: 'Mar' },
    { id: 4, temp: 35, hum: 58, vento: 23, mes: 'Abr' },
];

// 🌟 GARANTIDO: Nome começando com Letra Maiúscula
function ItemLista({ item }) {
    return (
        <View style={styles.cardItem}>
            <View style={styles.headerMes}>
                <Text style={styles.textoMes}>Mês: {item.mes}</Text>
            </View>
            
            <View style={styles.containerDados}>
                <View style={styles.blocoDado}>
                    <Text style={styles.emoji}>🌡️</Text>
                    <Text style={styles.valorDado}>{item.temp}°C</Text>
                </View>
                
                <View style={styles.blocoDado}>
                    <Text style={styles.emoji}>💧</Text>
                    <Text style={styles.valorDado}>{item.hum}%</Text>
                </View>
                
                <View style={styles.blocoDado}>
                    <Text style={styles.emoji}>💨</Text>
                    <Text style={styles.valorDado}>{item.vento} km/h</Text>
                </View>
            </View>
        </View>
    );
}

// 🌟 GARANTIDO: Exportado como default perfeitamente
export default function Relatorio() {
    return (
        <View style={styles.container}>
            <Text style={styles.tituloPrincipal}>Relatório de Medições</Text>
            
            <FlatList
                data={medicoes}
                keyExtractor={(item) => String(item.id)} 
                renderItem={({ item }) => <ItemLista item={item} />} // 🌟 CORRIGIDO: Agora aponta exatamente para <ItemLista /> com "I" maiúsculo
                contentContainerStyle={styles.listaContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff0f5', 
        alignItems: 'center',
        paddingTop: 30,
    },
    tituloPrincipal: {
        fontSize: 22,
        fontWeight: "bold",
        color: '#ff1493', 
        textAlign: "center",
        marginBottom: 20,
        letterSpacing: 0.5,
        paddingHorizontal: 20,
    },
    listaContainer: {
        paddingBottom: 20,
    },
    cardItem: {
        backgroundColor: '#ffffff',
        width: 340, 
        borderRadius: 18,
        padding: 16,
        marginBottom: 14,
        shadowColor: '#ff69b4',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    headerMes: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffe3f1',
        paddingBottom: 6,
        marginBottom: 10,
    },
    textoMes: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8b008b', 
    },
    containerDados: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    blocoDado: {
        alignItems: 'center',
        flex: 1,
    },
    emoji: {
        fontSize: 18,
        marginBottom: 2,
    },
    valorDado: {
        fontSize: 14,
        fontWeight: '600',
        color: '#ff1493',
    }
});