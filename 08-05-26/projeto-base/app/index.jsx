import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./componentes/Header";
import tarefas from "./dados/tarefas.js";

function ItemTarefa({ item }) {
  return (
    <View style={estilos.card}>
      <Image source={{ uri: item.photo }} style={estilos.foto} />
      <View style={estilos.conteudo}>
        <View style={estilos.linha}>
          <Text style={estilos.titulo}>{item.title}</Text>
          <Text style={estilos.status}>{item.status}</Text>
        </View>
        <Text style={estilos.desc}>{item.description}</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    
    backgroundColor: "rgba(255, 255, 255, 0.75)", 
    borderRadius: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    
    elevation: 5,
    
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.8)",
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 30, 
    marginRight: 14,
    backgroundColor: "#f0f0f0", 
  },
  conteudo: {
    flex: 1,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  titulo: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1c1c1e", 
    letterSpacing: -0.3,
  },
  status: {
    fontSize: 13,
    fontWeight: "500",
    color: "#007aff", 
    backgroundColor: "rgba(0, 122, 255, 0.1)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: "hidden",
  },
  desc: {
    fontSize: 14,
    color: "#3a3a3c",
    lineHeight: 20,
  },
});


export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header titulo="SENAI Tasks" />

      <FlatList
        data={tarefas}
        KeyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ItemTarefa item={item} />}
      />
    </SafeAreaView>
  );
}
