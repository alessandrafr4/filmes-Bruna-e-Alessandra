import { Image, Text, View, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';

function Card(props) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: props.filme.capa }}
        style={styles.filme}
      />
      <Text style={{ color: '#0D0D0D' }}> {props.filme.titulo}</Text>
      <Text style={{ fontSize: 12 }}> R$ {props.filme.preco}</Text>
    </View>
  );
}

export default function App() {
  const filmes = [
    {
      id:'1',
      capa: 'https://static.stealthelook.com.br/wp-content/uploads/2022/03/qual-a-serie-o-filme-e-o-livro-mais-lido-do-mundo-avatar-20220321164246.jpg',
      titulo: 'Avatar',
      preco: 20.89,
    },
    {
      id:'2',
      capa: 'https://lumiere-a.akamaihd.net/v1/images/56015l10_bigsal_brazil_intpayoff_4x5_d4019af6.jpeg',
      titulo: 'Thor',
      preco: 25.99,
    },
    {
      id:'3',
      capa: 'https://www.exibidor.com.br/fotos/producoes/img_grande/10729.jpg',
      titulo: 'Jumanji',
      preco: 69.99,
    },
    {
      id:'4',
      capa: 'https://cinema10.com.br/upload/filmes/filmes_16093_01.jpg',
      titulo: 'Gato De Botas 2',
      preco: 58.99,
    },
    {
      id:'5',
      capa: 'https://capas-p.imagemfilmes.com.br/164069_000_p.jpg',
      titulo: 'O Grande Mauricinho',
      preco: 25.49,
    },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.textoTitulo}> Lançamentos</Text>
      </View>
      <ScrollView>
      <View style={styles.conteudo}>
        {filmes.map(filme => <Card filme={filme} key={filme.titulo} />)}
      </View>
      </ScrollView>
    </View>
  );
}

 const styles = StyleSheet.create({
      container: {
      flex: 1,
      paddingTop: 16,
      backgroundColor: '#631061',  },

  conteudo: {
    flex: 1,
    backgroundColor:'#0D0D0D',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  
  },
  card: {
    backgroundColor:'#631061',
    width: '90%',
    height: 245,
    borderRadius:5,
    margin: 15,
  },
  filme: {
    resizeMode:'stretch',
    width: '80%',
    height: 150,
    margin:20,
    
   },
   titulo: {
     backgroundColor: '#631061',
     width: '100%',
     height: 90,
     justifyContent: 'center',
     alignItems: 'center',
     paddingTop:2,

   },
   textoTitulo: { 
     fontSize: 35, 
     fontWeigth: 'bold', 
     color:'#0D0D0D' 
    }
});

