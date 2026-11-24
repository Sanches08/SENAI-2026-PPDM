import { Dimensions, ScrollView, Text, View, StyleSheet } from "react-native";
import { LineChart, PieChart } from "react-native-chart-kit";

const { width } = Dimensions.get("window");

// 🎨 Nomes dos bairros abreviados para caber perfeitamente na legenda sem cortar!
const dadosPizza = [
  { name: "Jd Paulista", temp: 18, color: "#ff1493" },
  { name: "P. dos Nobres", temp: 20, color: "#ff69b4" }, // 🌟 Abreviado aqui
  { name: "Três Pontes", temp: 15, color: "#c71585" },
  { name: "Jd Alto B. Vista", temp: 15, color: "#8b008b" }, // 🌟 Abreviado aqui
];

const dadosLinha = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [{ data: [65, 66, 68, 77, 50, 40] }],
};

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(255, 20, 147, ${opacity})`, 
  labelColor: (opacity = 1) => `rgba(139, 0, 139, ${opacity})`, 
  strokeWidth: 3, 
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  propsForDots: {
    r: "5",
    strokeWidth: "2",
    stroke: "#ff69b4"
  }
};

export default function Dashboard() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.tituloPrincipal}>Estação Meteorológica Senai</Text>
      
      {/* Bloco de Últimas Medições */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>Últimas Medições</Text>
        <View style={styles.linhaMedicao}>
          <Text style={styles.textoData}>12/06/2026</Text>
          <Text style={styles.textoValorTemp}>25°C</Text>
        </View>
        <View style={styles.linhaMedicao}>
          <Text style={styles.textoData}>11/06/2026</Text>
          <Text style={styles.textoValorTemp}>22°C</Text>
        </View>
        <View style={styles.linhaMedicao}>
          <Text style={styles.textoData}>12/06/2026</Text>
          <Text style={styles.textoValorUmi}>60% Umidade</Text>
        </View>
        <View style={styles.linhaMedicao}>
          <Text style={styles.textoData}>11/06/2026</Text>
          <Text style={styles.textoValorUmi}>80% Umidade</Text>
        </View>
      </View>

      {/* Bloco do Gráfico de Linha */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>Acompanhe em Tempo Real</Text>
        <LineChart
          data={dadosLinha}
          width={308} 
          height={180}
          chartConfig={chartConfig}
          bezier 
          style={styles.grafico}
        />
      </View>

      {/* Bloco do Gráfico de Pizza Corrigido */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>Bairros de Mirandópolis</Text>
        <PieChart
          data={dadosPizza}
          width={308} 
          height={180}
          chartConfig={chartConfig}
          accessor="temp"
          backgroundColor="transparent"
          paddingLeft="0" // 🌟 Zerado para dar mais espaço lateral para a legenda
          absolute // 🌟 Mostra a porcentagem/valor de forma limpa
          style={styles.grafico}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5', 
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#ff1493', 
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#ffffff',
    width: 340,         
    borderRadius: 20,
    padding: 16,        
    marginBottom: 20,
    shadowColor: '#ff69b4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#8b008b', 
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ffe3f1',
    paddingBottom: 5,
  },
  linhaMedicao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff0f5',
  },
  textoData: {
    color: '#666666',
    fontSize: 14,
  },
  textoValorTemp: {
    color: '#ff1493',
    fontWeight: 'bold',
    fontSize: 15,
  },
  textoValorUmi: {
    color: '#c71585',
    fontWeight: 'bold',
    fontSize: 15,
  },
  grafico: {
    marginVertical: 8,
    alignSelf: 'center', 
  }
});