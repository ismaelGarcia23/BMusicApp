import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>🎵 BMusicApp</Text>
      <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

      {/* Card principal */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Login</Text>

        {/* Input de usuario */}
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#94a3b8"
          value={username}
          onChangeText={setUsername}
        />

        {/* Input de contraseña */}
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#94a3b8"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Botón */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Perfil')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#22223B',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#4a4e69',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#2563eb',
    width: '85%',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 40,
    shadowColor: '#2563eb',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#2563eb',
    fontWeight: 'bold',
  },
});
