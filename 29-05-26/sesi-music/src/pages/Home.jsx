import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { musicasMock } from '../dados/musicas';

export default function Home({ navigation }) {
  
  // Renderização de cada linha de música da lista vertical
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.cardMusica} 
      // Passa o parâmetro como 'musicasMock' para casar perfeitamente com o seu arquivo TocandoMusica.jsx
      onPress={() => navigation.navigate('TocandoMusica', { musicasMock: item })}
    >
      <Image source={{ uri: item.capa }} style={styles.capaMusica} />
      <View style={styles.infoMusica}>
        <Text style={styles.tituloMusica}>{item.titulo}</Text>
        <Text style={styles.artistaMusica}>{item.artista}</Text>
      </View>
      <Text style={styles.duracaoMusica}>{item.duracao}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Cabeçalho com saudação personalizada */}
      <Text style={styles.saudacao}>Olá, Ouvinte!</Text>
      
      {/* SEÇÃO DE DESTAQUES (Exigência obrigatória da Trilha de Desenvolvimento) */}
      <Text style={styles.tituloSecao}>Álbuns em Destaque</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carrosselDestaques}>
        <View style={styles.cardDestaque}>
          <Image source={{ uri: 'https://via.placeholder.com/120' }} style={styles.capaDestaque} />
          <Text style={styles.textoDestaqueTitulo} numberOfLines={1}>Lo-Fi Cafe</Text>
          <Text style={styles.textoDestaqueSub} numberOfLines={1}>Chill Beats</Text>
        </View>
        <View style={styles.cardDestaque}>
          <Image source={{ uri: 'https://via.placeholder.com/120' }} style={styles.capaDestaque} />
          <Text style={styles.textoDestaqueTitulo} numberOfLines={1}>Estudos & Foco</Text>
          <Text style={styles.textoDestaqueSub} numberOfLines={1}>Instrumental</Text>
        </View>
        <View style={styles.cardDestaque}>
          <Image source={{ uri: 'https://via.placeholder.com/120' }} style={styles.capaDestaque} />
          <Text style={styles.textoDestaqueTitulo} numberOfLines={1}>Fim de Tarde</Text>
          <Text style={styles.textoDestaqueSub} numberOfLines={1}>Indie Vibe</Text>
        </View>
      </ScrollView>

      {/* SEÇÃO PRINCIPAL DE MÚSICAS */}
      <Text style={styles.subtitulo}>Músicas Recomendadas</Text>

      {/* Como inserimos um ScrollView global para caber os destaques e a lista juntos de forma fluida, 
          usamos o FlatList com a propriedade scrollEnabled={false} para evitar conflitos de rolagem */}
      <FlatList
        data={musicasMock}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#281916", // Marrom Escuro Profundo (Background conforme relatório)
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  saudacao: {
    fontSize: 26,
    color: "#FFD2CB", // Creme Suave para títulos principais
    fontWeight: "bold",
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  tituloSecao: {
    fontSize: 18,
    color: "#FFD2CB",
    fontWeight: "bold",
    marginBottom: 12,
  },
  carrosselDestaques: {
    marginBottom: 25,
    flexDirection: 'row',
  },
  cardDestaque: {
    width: 120,
    marginRight: 15,
    backgroundColor: "#402b27", // Cinza/Marrom de Superfície
    padding: 8,
    borderRadius: 8,
  },
  capaDestaque: {
    width: 104,
    height: 104,
    borderRadius: 6,
    marginBottom: 8,
  },
  textoDestaqueTitulo: {
    color: "#FFD2CB",
    fontSize: 14,
    fontWeight: "bold",
  },
  textoDestaqueSub: {
    color: "#96B5AD", // Verde Menta Pastel para informações secundárias
    fontSize: 12,
  },
  subtitulo: { 
    fontSize: 18, 
    color: "#FFD2CB", 
    fontWeight: "bold",
    marginBottom: 12 
  },
  lista: { 
    paddingBottom: 40 
  },
  cardMusica: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#402b27", // Cinza/Marrom de Superfície
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#543934", // Detalhe sutil de borda
  },
  capaMusica: { 
    width: 50, 
    height: 50, 
    borderRadius: 6 
  },
  infoMusica: { 
    flex: 1, 
    marginLeft: 15 
  },
  tituloMusica: { 
    color: "#FFD2CB", // Creme Suave
    fontSize: 16, 
    fontWeight: "bold" 
  },
  artistaMusica: { 
    color: "#96B5AD", // Verde Menta Pastel
    fontSize: 14 
  },
  duracaoMusica: { 
    color: "#96B5AD", 
    fontSize: 14, 
    marginRight: 5 
  },
});