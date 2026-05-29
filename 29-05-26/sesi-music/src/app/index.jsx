import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Rotas from '../routes/index';

export default function Index() {
  return (
    <SafeAreaProvider>
      {/* Container global com a cor de fundo oficial para evitar flashes brancos no app */}
      <View style={styles.container}>
        {/* Configuração da StatusBar do celular:
          - backgroundColor: Marrom Escuro Profundo conforme o relatório (#281916)
          - barStyle: 'light-content' faz os ícones de bateria, Wi-Fi e relógio ficarem claros/cremes
        */}
        <StatusBar 
          backgroundColor="#281916" 
          barStyle="light-content" 
          translucent={false} 
        />
        
        {/* Renderiza o gerenciador de rotas com a navegação do app */}
        <Rotas />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#281916", // Garante o Marrom Escuro de fundo desde a inicialização do app
  },
});