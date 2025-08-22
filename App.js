import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreens';
import ProfileScreen from './screens/ProfileScreen';
import PlayDetailsScreen from './screens/PlayDetailsScreen'; // Asegúrate de que la ruta sea correcta

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Inicio" 
          component={HomeScreen} 
          options={{ title: "BMusicApp - Inicio" }} 
        />
        
        <Stack.Screen 
          name="Perfil" 
          component={ProfileScreen} 
          options={{ title: "Mi Perfil" }}
        />
        
        <Stack.Screen 
          name="Detalles de Playlist" 
          component={PlayDetailsScreen} // 👈 apunta al archivo correcto
          options={{ title: "Detalles de la Playlist" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
