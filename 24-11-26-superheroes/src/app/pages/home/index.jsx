
import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Home() {
  const [herois, setHerois] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const carregaHeroes = async () => {
    try {
      setCarregando(true);
      setErro(null);

      const response = await fetch(
        'https://superheroes-api-one.vercel.app/api/herois'
      );

      if (!response.ok) {
        throw new Error('Erro ao buscar heróis');
      }

      const data = await response.json();
      const lista = Array.isArray(data)
        ? data
        : data?.herois || [];

      setHerois(lista);
    } catch (e) {
      setErro(e.message || 'Erro inesperado');
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregaHeroes();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {!!item.foto && (
        <Image
          source={{ uri: item.foto }}
          style={styles.thumbnail}
        />
      )}

      <View style={styles.cardInfo}>
        <Text style={styles.videoTitle}>
          ✨ {item.nome}
        </Text>

        <View style={styles.metaBadge}>
          <Text style={styles.metaText}>
            💪 Força: {item.forca}
          </Text>
        </View>

        <View style={styles.skillsContainer}>
          <Text style={styles.skillsLabel}>
            🎀 Habilidades
          </Text>

          <Text style={styles.skillsText}>
            {item.habilidade}
          </Text>
        </View>

        <Text style={styles.cardDecoration}>
          ♡ ｡ﾟ･ ｡ﾟ･ ♡
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerIcon}>୨୧</Text>

        <View>
          <Text style={styles.headerTitle}>
            Heróis fofinhos!
          </Text>
          <Text style={styles.headerSubtitle}>
            ✧ Conheça seus personagens ✧
          </Text>
        </View>

        <Text style={styles.headerHeart}>♡</Text>
      </View>

      <View style={styles.intro}>
        <Text style={styles.introTitle}>
          ✨ Universo dos Heróis ✨
        </Text>
        <Text style={styles.introText}>
          Descubra os poderes e habilidades de cada um! 💗
        </Text>
      </View>

      {carregando && (
        <View style={styles.feedbackContainer}>
          <Text style={styles.loadingText}>
            🌸 Carregando heróis...
          </Text>
          <Text style={styles.loadingSubtext}>
            Preparando a magia! ♡
          </Text>
        </View>
      )}

      {erro && (
        <View style={styles.feedbackContainer}>
          <Text style={styles.errorText}>
            💔 Ops! Algo deu errado.
          </Text>
          <Text style={styles.errorSubtext}>
            {erro}
          </Text>
        </View>
      )}

      {!carregando && !erro && herois.length === 0 && (
        <View style={styles.feedbackContainer}>
          <Text style={styles.emptyText}>
            🌷 Nenhum herói encontrado!
          </Text>
        </View>
      )}

      {!carregando && !erro && (
        <FlatList
          data={herois}
          keyExtractor={(item, index) =>
            String(item.id ?? index)
          }
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Text style={styles.footer}>
        Feito com amor ♡ ｡ﾟ･
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F6',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8BBD0',
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    gap: 12,
    elevation: 5,
  },

  headerIcon: {
    fontSize: 34,
    color: '#FFFFFF',
  },

  headerTitle: {
    color: '#803D62',
    fontSize: 22,
    fontWeight: '900',
  },

  headerSubtitle: {
    color: '#985D7B',
    fontSize: 11,
    marginTop: 3,
  },

  headerHeart: {
    marginLeft: 'auto',
    fontSize: 30,
    color: '#FFFFFF',
  },

  intro: {
    backgroundColor: '#FFFFFF',
    margin: 18,
    padding: 18,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FAD1E1',
  },

  introTitle: {
    color: '#B45F89',
    fontSize: 17,
    fontWeight: '900',
  },

  introText: {
    color: '#A47C91',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 7,
  },

  listContent: {
    paddingHorizontal: 18,
    paddingBottom: 15,
    gap: 18,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#F8C9DD',
    elevation: 4,
  },

  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#FCE4EC',
    resizeMode: 'cover',
  },

  cardInfo: {
    padding: 16,
    gap: 10,
  },

  videoTitle: {
    color: '#A64D79',
    fontSize: 20,
    fontWeight: '900',
  },

  metaBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FCE4EC',
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 20,
  },

  metaText: {
    color: '#B45F89',
    fontSize: 12,
    fontWeight: '800',
  },

  skillsContainer: {
    backgroundColor: '#F4EEFF',
    padding: 13,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E5D7FF',
    gap: 5,
  },

  skillsLabel: {
    color: '#9571BD',
    fontSize: 13,
    fontWeight: '900',
  },

  skillsText: {
    color: '#78628E',
    fontSize: 13,
    lineHeight: 20,
  },

  cardDecoration: {
    color: '#E9A6C5',
    textAlign: 'center',
    fontSize: 16,
  },

  feedbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  loadingText: {
    color: '#B45F89',
    fontSize: 18,
    fontWeight: '900',
  },

  loadingSubtext: {
    color: '#C28AA8',
    marginTop: 8,
  },

  errorText: {
    color: '#D65B80',
    fontSize: 17,
    fontWeight: '900',
  },

  errorSubtext: {
    color: '#A47C91',
    marginTop: 8,
    textAlign: 'center',
  },

  emptyText: {
    color: '#B45F89',
    fontSize: 16,
    fontWeight: '800',
  },

  footer: {
    color: '#C28AA8',
    textAlign: 'center',
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '700',
  },
});
