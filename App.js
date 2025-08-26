import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Button } from 'react-native';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla Home</Text>
      <Button title="Ir a Detalles" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

function SettingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de Configuracion</Text>
    </View>
  );
}

function ProfileScreen() {//nueva
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de perfil</Text>
    </View>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Perfil" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();//nuevo
function GenresScreen() {//nueva
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla Géneros</Text>
    </View>
  );
}
function TabNavigator() {//nueva
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Genres" component={GenresScreen} />
    </Tab.Navigator>
  );
}

export default function App() {//sustitución
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Inicio" component={StackNavigator} />
        <Drawer.Screen name="Config" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}