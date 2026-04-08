import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//rotas
import Splash from './src/pages/Splash';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Home from './src/pages/home';
import Glicemia from './src/pages/glicemia';
import Agua from './src/pages/agua';
import Frutas from "./src/pages/frutas"
import Vacinas from "./src/pages/vacinas"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash}
            options={{ headerShown: false,}}
        />
        <Stack.Screen name="Login" component={Login}
          options={{ headerShown: false,}}
        />
        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{ headerShown: false,}}
        />
        <Stack.Screen name="Home" 

        component={Home} 
        options={{ 
          title: "MedMe",
          headerStyle: { backgroundColor: "#66E4D6" },
          headerTintColor: "#fff",
          
        }} />
        <Stack.Screen
          name="Glicemia"
          component={Glicemia}
          options={{
              title: "Glicemia",
              headerStyle: { backgroundColor: "#66E4D6" },
              headerTintColor: "#fff",
          }}
        />
        <Stack.Screen 
          name="Agua" 
          component={Agua} 
          options={{
            title: "Água",
            headerStyle: { backgroundColor: "#66E4D6" },
            headerTintColor: "#fff",
            
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
