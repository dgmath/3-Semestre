import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, Alert, } from 'react-native';
import { Container } from './src/components/Container/Container';
import { BtIncrement, BtDecrement } from './src/components/Button/Button';
import { Title, TitleBtDecrement, TitleBtIncrement } from './src/components/Title/Title';
import { Background } from './src/components/Background/Background';

export default function App() {

  //hook de state
  const [count, setCount] = useState(0) 

  //função para incrementar
  const increment = () => {

    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    else
    {
      Alert.alert('Não é possivel decrementar valores menores que 0')
    }
  }

  useEffect(() => {
    console.warn(`Contador atualizado ${count}`);
  }, [count])

  return (
    <Container>

      <Background
      source= {{uri: "https://formasecia.vteximg.com.br/arquivos/ids/159713-1000-1000/BC-01-BALANCA-COZINHA-10-KG.jpg?v=637015701582630000"}}
      >
        <Title>Peso: {count} </Title>

      </Background>
      <BtIncrement onPress={increment}>
        <TitleBtIncrement >Incrementar</TitleBtIncrement>
      </BtIncrement>

      <BtDecrement  onPress={decrement}>
      <TitleBtDecrement >Decrementar</TitleBtDecrement>
      </BtDecrement>


      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({

});
