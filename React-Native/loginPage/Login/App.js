import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Linking } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Poppins_200ExtraLight_Italic } from '@expo-google-fonts/poppins';






export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black, Poppins_200ExtraLight_Italic,
  });
  
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={{ uri: "https://designportugal.net/wp-content/uploads/2016/04/m-mcdonalds.jpg" }}
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

    <View style={styles.containerLink}>
      <Text style={{fontFamily: 'Inter_900Black'}}>Não possui conta?</Text>
      <Text style={styles.link} onPress={()=>{Linking.openURL('https://www.mcdonalds.com')}}> Clique aqui </Text>
    </View>

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
    gap: 25,
    fontFamily: 'Inter_900Black'
  },
  containerForm: {
    gap: 15
  },
  containerLink:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputEmail: {
    backgroundColor: 'white',
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    fontWeight: 500,
    color: 'grey',
    // fontFamily: 'Inter_900Black'

  },
  inputPassword: {
    backgroundColor: 'white',
    width: 250,
    height: 50,
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
    borderRadius: 50
  },
  textLogin: {
    fontSize: 18,
    fontWeight: 500,
    textTransform: 'uppercase',
    fontWeight: 'bold'

  },
  button: {
    width: 150,
    height: 40,
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
  textLabelEmail: {
    fontSize: 16,
    fontWeight: 500
  },
  textLabelPassword: {
    fontSize: 16,
    fontWeight: 500
  },
  link: {
    textDecorationLine: 'underline',
    fontWeight: 500
  }

});
