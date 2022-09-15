import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native'
import Filmes from './src/components/Filmes'

import api from './src/services/api'

export default function App() {

  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData(){
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color='#09a6ff' size={40} />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <FlatList
          data={filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Filmes data={item} />}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
