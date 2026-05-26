import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import img from "../assets/images/mnia.png";

export default function Index() {
  return (
    <ScrollView className="container">
      <View style={estilos.container}>
        <Text style={estilos.titulo}>My First App</Text>
        <Image source={img} style={estilos.img} />
      </View>

      <View style={estilos.container}>
        <Text style={estilos.miniTitulo}>Sobre o App</Text>
        <Text style={estilos.text}>
          Aplicativo desenvolvido pelo estudantes do Sesi Mirandopolis para
          aprendizado do framework React Native
        </Text>
      </View>

      <View style={estilos.container}>
        <Text style={estilos.miniTitulo}>O que aprenderemos</Text>
        <Text style={estilos.text}>- Layout responsivo</Text>
        <Text style={estilos.text}>- Push Notification</Text>
        <Text style={estilos.text}>- Acesso a APIs</Text>
      </View>

      <View style={estilos.container}>
        <Text style={estilos.miniTitulo}>Do que precisamos</Text>
        <Text style={estilos.text}>- Node.js</Text>
        <Text style={estilos.text}>- Vs code</Text>
        <Text style={estilos.text}>- Foco, força e fé</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#1b1b1b",
  },
  
  titulo: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: "Arial",
  },
  
  miniTitulo: {
    color: "#fff",
    fontFamily: "Arial",
    fontSize: 30,
  },
  
  text: {
    color: "#b4b4b4",
    fontFamily: "Arial",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },

  img: {
    marginTop: 20,
    width: 380,
    height: 200,
    borderRadius: 20,
  },
});
