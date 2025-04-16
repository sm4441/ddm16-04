import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
  import {Feather} from '@expo/vector-icons';
  import styles from './estilos/style.js';
  import Cabecalho from './src/componentes/cabecalho/index.js';
  import Pesquisa from './src/componentes/pesquisa/index.js';
  import DATA from './movies/movies.js';
import { FlatList } from 'react-native-web';
import CardMovies from './src/componentes/cardFilmes/index.js';
import Banners from './src/componentes/banner/index.js';

  
  export default function App() {
  const imagem = Math.floor(Math.random() * 4 +1);
 
  return (
 


  <View style={styles.container}>
    <Cabecalho/>

    <Pesquisa/>

    <Banners/>

 <view style = {{width: '90%'}}>
  <FlatList 

 
    data={Filmes}
    horizontal={true}
    keyExtractor={(item) => item.id}
    renderItem={({item}) =>(

    <CardMovies
      titulo = {item.nome}
      nota = {item.nota}
      imagem ={item.imagem} />
   
  )}
/>
 </view>

 </View>
);
}
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroudColor: '#141a29',
        alignItems: "center"
      }
    })
