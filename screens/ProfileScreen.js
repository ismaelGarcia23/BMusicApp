import { useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function ProfileScreen({ navigation }) {
  let userName = 'Ismael Garcia';
  const [myname, setMyname] = useState(userName);
  const followers = 120;
  const following = 75;

  // Ahora los playlists con lógica tipo FlatList
const playlists = [
  {
    id: 1,
    valor: "La chica de ayer",
    cansiones: [
      { idSong: 1, valSong: "Versión acústica" },
      { idSong: 2, valSong: "Versión estudio" },
      { idSong: 3, valSong: "Remix 2020" }
    ]
  },
  {
    id: 2,
    valor: "Yesterday",
    cansiones: [
      { idSong: 1, valSong: "Acústica" },
      { idSong: 2, valSong: "Versión en vivo" }
    ]
  },
  {
    id: 3,
    valor: "Bohemian Rhapsody",
    cansiones: [
      { idSong: 1, valSong: "Original" },
      { idSong: 2, valSong: "Live Aid 1985" }
    ]
  },
  {
    id: 4,
    valor: "Imagine",
    cansiones: [
      { idSong: 1, valSong: "Versión original" },
      { idSong: 2, valSong: "Tributo ONU" }
    ]
  },
  {
    id: 5,
    valor: "Hotel California",
    cansiones: [
      { idSong: 1, valSong: "Versión original" },
      { idSong: 2, valSong: "MTV Unplugged" },
      { idSong: 3, valSong: "Remastered 2013" }
    ]
  }
];


  function onPrees() {

  if (myname === "Gerardo Garcia") {
    setMyname("Ismael Garcia");
  } else {
    setMyname("Gerardo Garcia");
  }
}

  // Navegar con datos
  const goToDetails = (id, valor, cansiones) => {
    navigation.navigate("Detalles de Playlist", {
      listId: id,
      titleList: valor,
      mySongs: cansiones
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtTitle}>BMusicApp</Text>

      <View style={styles.card}>
        <View style={styles.profileRow}>
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/161641330?v=4' }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userLabel}>Usuario:</Text>
            <Text style={styles.userName}>{myname}</Text>
            <View style={styles.socialRow}>
              <View style={styles.socialBox}>
                <Text style={styles.socialNumber}>{followers}</Text>
                <Text style={styles.socialLabel}>Seguidores</Text>
              </View>
              <View style={styles.socialBox}>
                <Text style={styles.socialNumber}>{following}</Text>
                <Text style={styles.socialLabel}>Siguiendo</Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={onPrees}
          activeOpacity={0.7}
        >
          <Text style={styles.TextButton}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.favSection}>
        <Text style={styles.txtCansiones}>Playlists favoritas</Text>

        <FlatList
          style={{ width: "100%", marginTop: 10 }}
          data={playlists}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.songItemBox}
              onPress={() => goToDetails(item.id, item.valor, item.cansiones)}
            >
              <Text style={styles.songItem}>• {item.valor}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <View style={{ marginTop: 30, width: '80%' }}>
        <View style={{ height: 10 }} />
        <Button
          title="Regresar a Inicio"
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
    alignItems: 'center',
    paddingTop: 40,
  },
  txtTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#22223B',
    marginBottom: 20,
    letterSpacing: 1,
  },
  card: {
    backgroundColor: '#2563eb',
    width: 340,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 30,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#fff',
    marginRight: 18,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  userLabel: {
    color: '#c7d2fe',
    fontSize: 16,
    marginBottom: 2,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 24,
    marginTop: 2,
    marginBottom: 2,
  },
  socialBox: {
    alignItems: 'center',
    marginRight: 18,
  },
  socialNumber: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: -2,
  },
  socialLabel: {
    color: '#c7d2fe',
    fontSize: 13,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 0,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#2563eb',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  TextButton: {
    fontSize: 18,
    color: '#2563eb',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  favSection: {
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
  },
  txtCansiones: {
    fontSize: 22,
    color: '#22223B',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  songItemBox: {
    width: "100%",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5"
  },
  songItem: {
    fontSize: 17,
    color: '#3d405b',
    textAlign: 'left',
  },
});
