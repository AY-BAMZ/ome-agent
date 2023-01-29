import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Apartments from "../../screens/Tabs/Apartments/Apartments";
import ProductPage from "../../screens/Tabs/Apartments/ProductPage";

const Stack = createNativeStackNavigator();

export default function ApartmentStack() {
  return (
    <Stack.Navigator
      initialRouteName="Apartments"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Apartments" component={Apartments} />
      <Stack.Screen name="ProductPage" component={ProductPage} /> 
    </Stack.Navigator>
  );

};
const MyText = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
