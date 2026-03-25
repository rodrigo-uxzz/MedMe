import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="HOME" 
        component={Home}
        options={{
          headerStyle: { 
            backgroundColor: '#66E4D6',
          },
          headerTintColor:  "#fff" ,
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
        }} 
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

