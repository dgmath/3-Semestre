import { MedicosConsulta } from "../../screens/Home/Home";
import { Perfil } from "../../screens/Perfil/Perfil";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BtnFooter, TextBtnFooter, TextFooter } from "../Footer/Style";
import { useState } from "react";
import { PacienteConsulta } from "../../screens/PacienteConsulta/PacienteConsulta";
import { ContentIcon } from "./Style";
import { PerfilMedico } from "../../screens/Perfil/PerfilMedico";



const Tab = createBottomTabNavigator();

const MainM = () => {
  // const [statusFooter, setStatusFooter] = useState("agenda")
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: { height: 80, paddingTop: 10, backgroundColor: '#FFFFFF' },
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Home') {
          // if (route.name === 'Home') {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ECF2FF" : "transparent"
                }
              >
                <FontAwesome6 name="calendar-check" size={18} color={focused ? '#607EC5' : '#4E4B59'} />
                {focused && <TextFooter>Agenda</TextFooter>}
              </ContentIcon>
            );
          } else route.name === 'Perfil'
           {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? '#ECF2FF' : 'transparent'
                }
              >
                <FontAwesome5 name="user-circle" size={18} color={focused ? '#607EC5' : '#4E4B59'} />
                {focused && <TextFooter>Perfil</TextFooter>}
              </ContentIcon>
            );
          }
        },
      })}
    // tabBarActiveTintColor: '#e91e63',
    >
      <Tab.Screen name='Home' component={MedicosConsulta} />

      <Tab.Screen name="Perfil" component={PerfilMedico} />
    </Tab.Navigator >
  )
}

export default MainM