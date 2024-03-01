import { MedicosConsulta } from "../../screens/MedicosConsulta/MedicosConsulta";
import { Perfil } from "../../screens/Perfil/Perfil";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BtnFooter, TextBtnFooter } from "../Footer/Style";
import { useState } from "react";
import { ContentIcon } from "../Container/Style";



const Tab = createBottomTabNavigator();

const Main = () => {
  // const [statusFooter, setStatusFooter] = useState("agenda")
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ route }} => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ECF2FF" : "transparent"
                }
              >
                <FontAwesome name="calendar" size={18} color="#4E4B59" />
                {focused && <TextIcon>Agenda</TextIcon>}
              </ContentIcon>
            );
          })
        // tabBarActiveTintColor: '#e91e63',
    >

      <Tab.Screen name='Agenda' component={MedicosConsulta} />
      <Tab.Screen name="Perfil" component={Perfil}
        options={
          {
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