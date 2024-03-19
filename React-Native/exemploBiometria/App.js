import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//Importantdo as bibliotecas

import * as LocalAuthentication from "expo-local-authentication"

// import moment from 'moment';
// import moment from 'moment/moment';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from 'react';
import moment from 'moment/moment';



export default function App() {

  const [dateHistory, setDateHistory] = useState({})
  const [authenticated, setAuthenticated] = useState(false) //Salvar o status do authenticated
  const [isBiometrySupported, setIsBiometrySupported] = useState(false) // Salvar a referencia de suporte a biometria

  async function HandleAuthentication() {
    //Verificar se existe uma biometria cadstrada

    const biometryExist = await LocalAuthentication.isEnrolledAsync();

    if (!biometryExist) {
      return Alert.alert(
        'Falha ao logar',
        'Não foi encontrado nenhuma biometria cadastrada'
      )
    }

    //Caso exista ==>
    const auth = await LocalAuthentication.authenticateAsync()
    setAuthenticated(auth.success);

    if (auth.success) {
      setHistory();
    }
  }

  //Funcao para verificar se existe biometria no aparelho
  async function CheckExistAuthentications() {

    const compatible = await LocalAuthentication.hasHardwareAsync

    //Salvando o status de compatibilidade do aparelho com a biometria
    setIsBiometrySupported(compatible)

  }

  async function setHistory() {
    const objAuth = {
      dateAuthentication: moment().format('DD/MM/YYYY HH:mm:ss')
    }

    await AsyncStorage.setItem('authenticate', JSON.stringify(objAuth))
  }

  async function GetHistory() {
    const objAuth = await AsyncStorage.getItem('authenticate')

    if (objAuth) {
      setDateHistory(JSON.parse(objAuth))
    }
  }

  useEffect(() => {
    CheckExistAuthentications();

    GetHistory(); // Buscando a ultima autenticação
  }, [])



  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {
          isBiometrySupported
            ? 'Seu dispositivo é compatível com a biometria'
            : 'O seu dispositivo não suporta a biometria / Face Id'
        }
      </Text>

      <TouchableOpacity onPress={() => HandleAuthentication()} style={styles.btnAuth}>
        <Text style={styles.txtAuth}>
          Autenticar Acesso
        </Text>
      </TouchableOpacity>

      <Text style={[styles.txtReturn, { color: authenticated ? 'green' : 'red' }]}>
        {
          authenticated
            ? 'Autenticado'
            : 'Não autenticado'
        }
      </Text>

      {
        dateHistory.dateAuthentication
          ? <Text style={styles.txtHistory}>
            Último acesso em {dateHistory.dateAuthentication}
          </Text>
          : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    lineHeight: 30
  },
  btnAuth: {
    padding: 16,
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'pink'
  },
  txtAuth: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  txtReturn: {
    fontSize: 22,
    marginTop: 50,
  },
  txtHistory: {
    fontSize: 16,
    marginTop: 50,
    color:'#858383',
    position: 'absolute',
    bottom: 120

  },
});
