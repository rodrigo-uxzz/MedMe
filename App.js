import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//rotas
import Home from './src/pages/home';
import Glicemia from './src/pages/glicemia';
import Agua from './src/pages/agua';
import Frutas from "./src/pages/frutas"
import Vacinas from "./src/pages/vacinas"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#66E4D6',
            
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 30,
            color: '#fff',
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen
          name="Glicemia"
          component={Glicemia}
          options={{
            title: 'GLICEMIA',
            
            headerStyle: {
              backgroundColor: '#FFF',
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              justifyContent: 'center',
              textAlign: 'center',
              color: '#66E4D6',
              fontWeight: '500',
              fontSize: 30,
            },
            headerTintColor: '#66E4D6',
          }}
        />
        <Stack.Screen 
          name="Agua" 
          component={Agua} 
          options={{
            
          }}
        />
        <Stack.Screen
          name="Frutas"
          component={Frutas}
          options={{
            title: "Frutas",
            headerStyle: { backgroundColor: "#66E4D6" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Vacinas"
          component={Vacinas}
          options={{
            title: "Vacinas",
            headerStyle: { backgroundColor: "#66E4D6" },
            headerTintColor: "#fff",
          }}
        />

        
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
