import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Apartments from "../../screens/Tabs/Apartments/Apartments";
import CreateApartment from "../../screens/Tabs/Create/CreateApartment";
import Inbox from "../../screens/Tabs/Inbox/Inbox";
import Transactions from "../../screens/Tabs/Transactions/Transactions";
import Profile from "../../screens/Tabs/Profile/Profile";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import Header from "../../screens/Header";
import ApartmentStack from "./ApartmentStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const screenOptions = {
    unmountOnBlur: false,
    headerShown: false,
    tabBarStyle: {
      backgroundColor: "#fff",
      //   height: 80,
      //   marginHorizontal: 10,
      //   marginBottom: 10,
      //   borderRadius: 100,
      position: "absolute",
      paddingHorizontal: 20,
    },
    background: "#ffffff00",
    tabBarActiveTintColor: "#79007B",
    tabBarInactiveTintColor: "#BBBBBB",
    // tabBarLabelStyle: {
    //   marginTop: -5,
    //   marginBottom: -15,
    // },
  };
  const sceneContainerStyle = {
    backgroundColor: "none",
  };
  return (
    <Tab.Navigator {...{ screenOptions, sceneContainerStyle }}>
      <Tab.Screen
        name="ApartmentStack"
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MaterialIcons name="apartment" size={size} color={color} />
            ) : (
              <MaterialIcons name="apartment" size={size} color={color} />
            ),
          // headerShown: true,
          // header: () => <Header title={'Apartments'}/>
        }}
        component={ApartmentStack}
      />
      <Tab.Screen
        name="Inbox"
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="chatbubbles" size={size} color={color} />
            ) : (
              <Ionicons name="chatbubbles-outline" size={size} color={color} />
            ),
        //   header: () => <Header title={"Inbox"} />,
        }}
        component={Inbox}
      />
      <Tab.Screen
        name="Tab3"
        component={CreateApartment}
        options={{ tabBarButton: (props) => <BigTabButton {...props} /> }}
      />
      <Tab.Screen
        name="Transactions"
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <FontAwesome name="exchange" size={size} color={color} />
            ) : (
              <FontAwesome name="exchange" size={size} color={color} />
            ),
          //   header: () => <Header title={'Transactions'}/>,
        }}
        component={Transactions}
      />
      <Tab.Screen name="Profile" 
      options={{
        tabBarIcon: ({ color, size, focused }) =>
          focused ? (
            <FontAwesome name="user" size={size} color={color} />
          ) : (
            <FontAwesome name="user-o" size={size} color={color} />
          ),
        //   header: () => <Header title={'Transactions'}/>,
      }}
      component={Profile} />
    </Tab.Navigator>
  );
};

const BigTabButton = (props) => {
  return (
    <TouchableOpacity
      style={props.accessibilityState?.selected === true ? styles.bigTabButton : styles.notTabButton}
      onPress={() => props.onPress()}
    >
      <Entypo name="plus" size={54} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bigTabButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    backgroundColor: "#ccc",
    borderRadius: 50,
    marginTop: -30,
    backgroundColor: "#79007B",
    // borderWidth: 5,
    borderColor: "#f7f7f7",
    elevation: 7,
    shadowOffset: { width: 2, height: 5 },
    shadowColor: "#ccc",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  bigTabButtonText: {
    fontSize: 20,
    color: "#000",
  },
  notTabButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    backgroundColor: "#ccc",
    borderRadius: 50,
    marginTop: -30,
    backgroundColor: "#aaa",
    // borderWidth: 5,
    borderColor: "#f7f7f7",
    elevation: 7,
    shadowOffset: { width: 2, height: 5 },
    shadowColor: "#ccc",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  }
});

export default TabNavigator;
