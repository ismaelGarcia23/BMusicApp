import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity
} from "react-native";

export default function PlaytDetailsScreen({ route, navigation }) {
  // Recibimos los parámetros enviados desde ProfileScreen
  const { titleList, mySongs } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{titleList}</Text>

      <FlatList
        style={styles.songList}
        data={mySongs || []} // Evita error si no hay canciones
        renderItem={({ item }) => (
          <View style={styles.songItem}>
            <Text style={styles.songText}>• {item.valSong}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item.idSong?.toString() || index.toString()}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay canciones disponibles</Text>
        }
      />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>⬅ Regresar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8FC",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#22223B",
    marginBottom: 20,
    textAlign: "center",
  },
  songList: {
    width: "100%",
    marginTop: 10,
  },
  songItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  songText: {
    fontSize: 18,
    color: "#3d405b",
  },
  emptyText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
  },
  backButton: {
    marginTop: 30,
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  backText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
