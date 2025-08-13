import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function App() {

  let userName = 'Ismael Garcia';
  const [myname, setMyname] = useState(userName)
  const followers = 120;
  const following = 75;

  function onPrees(){
    setMyname("Gerardo Garcia")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtTitle}>BMusicApp</Text>
      <View style={styles.card}>
        <View style={styles.profileRow}>
          <Image 
            source={{uri: 'https://avatars.githubusercontent.com/u/161641330?v=4'}}
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
          onPress={() => onPrees()}
          activeOpacity={0.7}
        >
          <Text style={styles.TextButton}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.favSection}>
        <Text style={styles.txtCansiones}>Canciones favoritas</Text>
        <View style={styles.songList}>
          <Text style={styles.songItem}>• La chica de ayer</Text>
          <Text style={styles.songItem}>• La chica de ayer</Text>
          <Text style={styles.songItem}>• La chica de ayer</Text>
          <Text style={styles.songItem}>• La chica de ayer</Text>
          <Text style={styles.songItem}>• La chica de ayer</Text>
        </View>
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
  songList: {
    width: '100%',
    alignItems: 'center',
  },
  songItem: {
    fontSize: 17,
    color: '#3d405b',
    marginBottom: 3,

  },
});