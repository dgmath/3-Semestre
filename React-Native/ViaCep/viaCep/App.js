import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ContainerApp } from './style';
import { Header } from './src/components/Header/index';
import { Home } from './src/screens/Home';


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
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
    	<Home/>
      {/* HOME SCREEN */}
    </ContainerApp>
  );
}

