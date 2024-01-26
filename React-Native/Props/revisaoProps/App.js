import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Person name = 'Carlos' age ={40}/>
      <Person name = 'Catarina' age ={89}/>
      <Person name = 'Thiago' age ={22}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

