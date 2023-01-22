import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
// import DrawerNav from "./DrawerNav";
import SignInStack from "./SignInStack/SignInStack";
import { useAuthContext } from "../api/auth/AuthContext";
import TabStack from "./TabStack/TabStack";

const Stack = createNativeStackNavigator();

export default function MainNav() {
  const  {user} = useAuthContext()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
          <Stack.Screen name="Home" component={TabStack} />
          <Stack.Screen name="SignInStack" component={SignInStack} /> 
        {/* {
          user === null ? 
      } */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
