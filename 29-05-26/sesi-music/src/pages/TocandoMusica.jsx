import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { musicasMock } from '../dados/musicas';

export default function TocandoMusica({ route, navigation }) {
  // Resgata a música passada por parâmetro ou usa a primeira do mock como fallback
  const { musicasMock: musicaInicial } = route.params || { musicasMock: musicasMock[0] };

  // Estados dinâmicos obrigatórios para simular o comportamento real do player
  const [estaTocando, setEstaTocando] = useState(false);
  const [eFavorito, setEFavorito] = useState(musicaInicial?.isFavorite || false);

  // Fallback seguro caso os dados falhem
  const musica = musicaInicial || {
    titulo: "Nenhuma música selecionada",
    artista: "Artista desconhecido",
    capa: "https://via.placeholder.com/280",
    duracao: "0:00"
  };

  // Alterna o estado de reprodução (Play / Pause)
  const alternarReproducao = () => {
    setEstaTocando(!estaTocando);
  };

  // Alterna o ícone e o estado visual de favorito
  const alternarFavorito = () => {
    setEFavorito(!eFavorito);
  };

  return (
    <View style={styles.container}>
      {/* Botão de Voltar conforme exigido pela regra de navegação */}
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
        <Text style={styles.textoVoltar}>✕ Fechar</Text>
      </TouchableOpacity>

      {/* Capa do Álbum */}
      <Image source={{ uri: musica.capa }} style={styles.capa} />

      {/* Container de Informações com botão de Favorito alinhado */}
      <View style={styles.infoContainer}>
        <div style={styles.textoContainer}>
          <Text style={styles.titulo}>{musica.titulo}</Text>
          <Text style={styles.artista}>{musica.artista}</Text>
        </div>
        
        {/* Ícone de favorito interativo (Coração) */}
        <TouchableOpacity onPress={alternarFavorito}>
          <Text style={[styles.iconeFavorito, { color: eFavorito ? '#F4A1B5' : '#FFD2CB' }]}>
            {eFavorito ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Barra de Progresso com as novas cores */}
      <View style={styles.barraProgressoContainer}>
        <View style={styles.barraProgressoFundo}>
          {/* Cor sálvia/menta para a barra preenchida */}
          <View style={[styles.barraProgressoPreenchida, { width: estaTocando ? '45%' : '12%' }]} />
        </View>
        <View style={styles.tempoContainer}>
          <Text style={styles.tempoTexto}>{estaTocando ? "1:24" : "0:15"}</Text>
          <Text style={styles.tempoTexto}>{musica.duracao || "3:45"}</Text>
        </View>
      </View>

      {/* Controles de Reprodução posicionados estrategicamente na parte inferior */}
      <View style={styles.controlesContainer}>
        <TouchableOpacity>
          <Text style={styles.botaoControle}>⏮</Text>
        </TouchableOpacity>
        
        {/* Botão de Play principal com a cor rosa goiaba da identidade */}
        <TouchableOpacity style={styles.botaoPlay} onPress={alternarReproducao}>
          <Text style={styles.textoPlay}>{estaTocando ? '⏸' : '▶'}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.botaoControle}>⏭</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#281916", // Marrom Escuro Profundo (Fundo conforme relatório)
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  botaoVoltar: { 
    alignSelf: "flex-start" 
  },
  textoVoltar: { 
    color: "#FFD2CB", // Creme Suave
    fontSize: 16, 
    fontWeight: "bold" 
  },
  capa: { 
    width: 280, 
    height: 280, 
    borderRadius: 12, // Bordas ligeiramente mais arredondadas para estilo moderno
    marginVertical: 20 
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  textoContainer: { 
    flex: 1 
  },
  titulo: { 
    color: "#FFD2CB", // Creme Suave para destaque principal do texto
    fontSize: 22, 
    fontWeight: "bold" 
  },
  artista: { 
    color: "#96B5AD", // Verde Menta Pastel / Sálvia para informações secundárias
    fontSize: 16, 
    marginTop: 5 
  },
  iconeFavorito: { 
    fontSize: 28,
    marginLeft: 10
  },
  barraProgressoContainer: { 
    width: "100%", 
    marginBottom: 20 
  },
  barraProgressoFundo: {
    width: "100%",
    height: 6,
    backgroundColor: "#402b27", // Tom de marrom intermediário para o fundo da barra
    borderRadius: 3,
  },
  barraProgressoPreenchida: {
    height: 6,
    backgroundColor: "#96B5AD", // Verde Menta Pastel / Sálvia na barra ativa
    borderRadius: 3,
  },
  tempoContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Corrigido erro de digitação do original
    marginTop: 8,
  },
  tempoTexto: { 
    color: "#96B5AD", // Verde Menta Pastel
    fontSize: 12 
  },
  controlesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 30,
  },
  botaoControle: { 
    color: "#FFD2CB", // Creme Suave para os botões secundários de controle
    fontSize: 36 
  },
  botaoPlay: {
    backgroundColor: "#E86786", // Rosa Goiaba (Destaque principal Call to Action)
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    // Pequena sombra para dar profundidade e destaque visual ao Play
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  textoPlay: { 
    color: "#281916", // Texto interno escuro para alto contraste sobre o rosa
    fontSize: 28,
    marginLeft: 2, // Ajuste fino de centralização óptica do caractere '▶'
  },
});