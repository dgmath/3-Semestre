import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
      style={styles.image}
        source={{uri:"https://designportugal.net/wp-content/uploads/2016/04/m-mcdonalds.jpg"}}
      />

      <Text style={styles.textLogin}>Login</Text>

      <View style={styles.containerForm}>
      
      <Text style={styles.textLabelEmail}>Email</Text>
      <TextInput
      style={styles.inputEmail}
      placeholder='Email'
      />

      <Text style={styles.textLabelPassword}>Senha</Text>
      <TextInput
      style={styles.inputPassword}
      placeholder='Senha'
      />
      </View>

      <TouchableOpacity style={styles.button}><Text style={styles.textButton}>Entrar</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FECE00',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25

  },
  containerForm: {
    gap: 15
  },
  inputEmail: {
    backgroundColor: 'white',
    width: 250,
    height:50,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    fontWeight: 500,
    color: 'grey'
  },
  inputPassword: {
    backgroundColor: 'white',
    width: 250,
    height:50,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    fontWeight: 500,
    color: 'grey',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius:50
  },
  textLogin: {
    fontSize: 18,
    fontWeight: 500,
    textTransform: 'uppercase',
    fontWeight: 'bold'
    
  },
  button:{
    width: 150,
    height:40,
    // borderWidth:1,
    // borderColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    textAlign: 'center'

  },
  textButton: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: 18 
  },
  textLabelEmail:{
    fontSize: 16,
    fontWeight: 500
  },
  textLabelPassword:{
    fontSize: 16,
    fontWeight: 500
  }

});
