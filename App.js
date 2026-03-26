import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home';
import Glicemia from './src/pages/glicemia';

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
            fontWeight: 'bold',
            fontSize: 40,
            color: '#fff',
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen
          name="Glicemia"
          component={Glicemia}
          options={{
            title: 'Glicemia',
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleStyle: {
              justifyContent: 'center',
              color: '#66E4D6',
              fontWeight: 'bold',
              fontSize: 40,
            },
            headerTintColor: '#66E4D6',
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
