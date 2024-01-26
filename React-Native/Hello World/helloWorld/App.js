import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TextInput, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

// const msg = () => {
//   Alert.alert('Ariana Grande essa ai!')
// }

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Hello World!</Text>

      <Image style={styles.image} source={require('./scr/assets/img/images.jpg')}/>
{/* 
      <Image style={styles.image2} 
        source={
        {uri: "https://www.automaxfiat.com.br/wp-content/uploads/2021/06/carros-economicos-1.jpeg"}
               }
      /> */}
      <TextInput
        style={styles.input}
        // defaultValue='Exempo de Input'
        placeholder='Exemplo de Input'
      />

      <TouchableOpacity 
        style={styles.button}
        // onPress={msg}
      >
        <Text style={styles.textButton}>Exemplo de Botão</Text>
      </TouchableOpacity> 
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  text: {
    fontSize: 50,
    // color: 'white',
    fontWeight: 'bold'

  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginTop: 10
    // backgroundColor: 'white'

  },
  image: {
    width: 300,
    height: 300
  },
  image2: {
    width: 300,
    height: 300,
    borderRadius:200
  },
  button: {
    width: '90%',
    height:40,
    borderWidth:1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  textButton: {
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 500,
    fontSize: 18 
  },
});


