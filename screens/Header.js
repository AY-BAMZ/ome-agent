import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

export default function Header({title}) {
  return (
    <View style={styles.header}>
      <View style={globalStyles.headerIconBox}>
        <Ionicons name="menu" size={28} color="#2B2A30" />
      </View>
      <Text style={globalStyles.textFive}>{title}</Text>
      <TouchableOpacity 
      // onPress={() => setModalVisible(true)} 
      style={globalStyles.headerIconBox}>
        <Ionicons name="notifications-outline" size={28} color="#2B2A30" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingBottom: 8,
    paddingTop: 32,
    position: 'absolute',
    elevation: 7,
    shadowOffset: { width: 2, height: 5 },
    shadowColor: "#ccc",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  
});
