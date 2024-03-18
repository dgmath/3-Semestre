import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//ipmortar conteudo do expo notifications
import * as Notification from "expo-notifications"

//solicita permissões de notificação ao iniciar o app
Notification.requestPermissionsAsync();

//define como as notificacoes devem ser tratadas quando recebidos valores
Notification.setNotificationHandler({
  handleNotification: async () => ({

    //Mostrar um alerta quando a notificacao for recebida
    shouldShowAlert: true,

    //Reproduz som ao receber a notificacao
    shouldPlaySound: true,

    //Mostrar quantidade de notificacoes no icone do app
    shouldSetBadge: false

  })
})

export default function App() {

  //funçao para lidar com a chamada de notificaçao
  const handleCallNotifications = async () => {

    //obtem o status da permissao
    const { status } = await Notification.getPermissionsAsync();

    //verifica se o usuario permitiu as notificaçoes
    if (status != 'granted') {
      alert('Você não ativou as notificações')
      return;
    }

    //Agenda uma notificação
    await Notification.scheduleNotificationAsync({
      content: {
        title: "Bem vindo ao SENAI",
        body: "Notificação recebida",
        sound: "Notification.mp3"
      },
      trigger: null
    })
  }



  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCallNotifications}>
        <Text style={styles.texto}>Clique Aqui!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  button: {
    width: "80%",
    height: 50,
    backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  texto: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 24
  }
});
