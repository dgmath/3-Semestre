export const Main = () => {
    return (
      <bottomTab.Navigator
        initialRouteName="PatientConsultation"
        screenOptions={({ route }) => ({
          tabBarStyle: { height: 60, elevation: 10,},
          tabBarInactiveBackgroundColor: "transparent",
          tabBarActiveBackgroundColor: "#ECF2FF",
          tabBarShowLabel: false,
          headerShown: false,
  
          tabBarIcon: ({ focused }) => {
            if (route.name === "PatientConsultation") {
              return (
                <BarContent
                  tabBarActiveBackgroundColor={
                    focused ? "#ECF2FF" : "transparent"
                  }
                >
                  <FontAwesome name="calendar" size={18} color="#4E4B59" />
                  {focused && <TextBar>Agenda</TextBar>}
                </BarContent>
              );
            } else route.name === "PatientProfile";
  
            {
              return (
                <BarContent
                  tabBarActiveBackgroundColor={
                    focused ? "#ECF2FF" : "transparent"
                  }
                >
                  <FontAwesome5 name="user-circle" size={22} color="#4E4B59" />
                  {focused && <TextBar>Perfil</TextBar>}
                </BarContent>
              );
            }
          },
        })}
      >
        <bottomTab.Screen
          name="PatientConsultation"
          component={PatientConsultation}
        />
        <bottomTab.Screen name="PatientProfile" component={PatientProfile} />
      </bottomTab.Navigator>
    );
  };