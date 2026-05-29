import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from '@expo/vector-icons/Ionicons';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import Favoritos from '../pages/Favoritos';
import TocandoMusica from '../pages/TocandoMusica';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Estilização do cabeçalho superior (Header) das abas
        headerStyle: { 
          backgroundColor: '#281916', // Marrom Escuro Profundo (Background oficial)
          borderBottomWidth: 0,
          elevation: 0, // Remove sombra no Android
          shadowOpacity: 0, // Remove sombra no iOS
        },
        headerTintColor: '#FFD2CB', // Creme Suave para o título do topo da tela
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        
        // Estilização da barra de abas inferior (Tab Bar)
        tabBarStyle: { 
          backgroundColor: '#402b27', // Cinza/Marrom de Superfície
          borderTopColor: '#543934', // Borda sutil condizente com a paleta
          paddingBottom: 5, 
          height: 60 
        },
        tabBarActiveTintColor: '#E86786',   // Rosa Goiaba para indicar o menu selecionado
        tabBarInactiveTintColor: '#96B5AD', // Verde Menta Pastel para os menus inativos
        tabBarLabelStyle: { 
          fontSize: 12, 
          marginBottom: 5,
          fontWeight: '500'
        },
        
        // Renderização dinâmica dos ícones baseada na paleta lo-fi/indie
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = 'ellipse-outline';

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          }

          if (route.name === 'Favoritos') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          return <IonIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
    </Tab.Navigator>
  );
}

export default function Rotas() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="TocandoMusica" component={TocandoMusica} />
    </Stack.Navigator>
  );
}