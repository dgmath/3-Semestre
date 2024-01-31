import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ContainerApp } from './src/components/ContainerApp/ContainerApp';
import { Header } from './src/components/Header/index';


export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerApp>
      <StatusBar/>
      {/* HEADER */}
      <Header/>

      {/* HOME SCREEN */}
    </ContainerApp>
  );
}

