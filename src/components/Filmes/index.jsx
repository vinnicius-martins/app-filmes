import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"

const Filmes = props => {

  const filme = props.data

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{filme.nome}</Text>
        <Image
          source={{uri: filme.foto }}
          style={styles.capa}
        />

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => alert(filme.nome)}>
            <Text style={styles.botaoTexto}>Leia mais...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    padding: 15,
  },
  capa: {
    height: 250,
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 1
  },
  botao: {
    width: 100,
    backgroundColor: '#09a6ff',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  botaoTexto: {
    textAlign: "center",
    color: 'white',
  }
})

export default Filmes