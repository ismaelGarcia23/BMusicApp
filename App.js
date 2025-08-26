import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();//nuevo

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Pantalla Home</Text>
            <Button title="Ir a Detalles" onPress={() => navigation.navigate('Perfil')} />
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
function GenresScreen() {//nueva
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Pantalla Géneros</Text>
        </View>
    );
}

function TabNavigator() {//nueva
    return (
        <Tab.Navigator screenOptions={{headerShown : false}}>
            <Tab.Screen name="Home" component={StackNavigator} />
            <Tab.Screen name="Genres" component={GenresScreen} />
        </Tab.Navigator>
    );
}


function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={HomeScreen} />
            <Stack.Screen name="Perfil" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{headerShown: false}}>
                <Drawer.Screen name="Inicio" component={TabNavigator} />
                <Drawer.Screen name="Config" component={SettingScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}