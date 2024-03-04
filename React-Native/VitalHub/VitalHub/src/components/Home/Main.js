import { MedicosConsulta } from "../../screens/MedicosConsulta/MedicosConsulta";
import { Perfil } from "../../screens/Perfil/Perfil";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BtnFooter, TextBtnFooter } from "../Footer/Style";
import { useState } from "react";
import { ContentIcon } from "../Container/Style";
import { PacienteConsulta } from "../../screens/PacienteConsulta/PacienteConsulta";



const Tab = createBottomTabNavigator();

const Main = () => {
  // const [statusFooter, setStatusFooter] = useState("agenda")
  return (
    <Tab.Navigator
      initialRouteName="HomePaciente"
        // tabBarActiveTintColor: '#e91e63',
    >

      <Tab.Screen options={{ headerShown: false }} name='Agenda' component={PacienteConsulta} />
      <Tab.Screen name="Perfil" component={Perfil}
        options={
          {
            headerShown: false,
            tabBarActiveTintColor: '#607EC5',
            tabBarIcon: ({color}) => (
          <ContentIcon>
            <FontAwesome5 name="user-circle" size={18} color={color}/>
          <TextBtnFooter>Agenda</TextBtnFooter>
        </ContentIcon>
            ),
          }
        }
      />
    </Tab.Navigator >
  );
        }

export default Main