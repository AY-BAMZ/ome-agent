import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../styles/global'
import { Ionicons } from "@expo/vector-icons";

export default function Apartments() {
  return (
    <View style={styles.container}>
    <Text style={[globalStyles.pageText, styles.title]}>Apartments</Text>
    <View style={globalStyles.hr}></View>
    <View style={globalStyles.inputArea}>
          <Ionicons name="search-outline" size={24} color="#ddd" />
          <TextInput
            placeholder="Enter an address, city, state or landmark"
            style={globalStyles.inputTwo}
            returnKeyType="search"
          />
          <View style={globalStyles.filter}>
            <Ionicons name="filter" size={20} color="#ddd" />
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignContent: "center",
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  title: {
    marginHorizontal: 20,
  }
})