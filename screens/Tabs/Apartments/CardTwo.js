import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../../styles/global";

const customWidth = Dimensions.get('window').width;

export default function CardTwo(props) {
  return (
    <View style={styles.container}>
      <Image source={{ url: props.item.productimage }} style={styles.image} />
      <View style={styles.detailFlex}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[globalStyles.textSix, styles.title]}
        >
          {props.item.name}
        </Text>
        <Text style={globalStyles.textFive}>{props.item.price}/mo</Text>
      </View>
      <View style={styles.detailFlex}>
        <Text style={[globalStyles.textSeven, styles.grey]}>
          {props.item.location}
        </Text>
        <Text style={[globalStyles.textSeven, styles.grey]}>
          {props.item.housetype}
        </Text>
      </View>
      <View style={styles.detailFlex}>
        <Text style={[globalStyles.textEight, styles.grey]}>
          {props.item.sellername}
        </Text>
        <Ionicons name="heart-outline" size={24} color="#565560" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  width: customWidth * 0.43,
  marginVertical: 10,
  },
  image: {
    width: customWidth * 0.43,
    height: 140,
    borderRadius: 12,
  },
  detailFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  grey: {
    color: "#565560",
    maxWidth: 150,
  },
  title: {
    maxWidth: "55%",
    color: "#79007B",
  },
});
