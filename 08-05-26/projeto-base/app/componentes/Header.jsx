import { View, Text, StyleSheet } from "react-native";

export default function Header({titulo}) {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>{titulo}</Text>
            <Text style={estilos.subtitulo}>Organize seus estudos</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#100dc7',
        paddingVertical: 20,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 25,
        fontWeight: 700,
        color: '#fff',
    },
    subtitulo: {
        fontSize: 14,
        color: '#ff7300',
        marginTop: 4,
    },
});