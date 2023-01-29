import {
  Dimensions,
  Share,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../../styles/global";
import { ScrollView } from "react-native-gesture-handler";

const customWidth = Dimensions.get("window").width;

export default function ProductPage({ route, navigation }) {
  const handlePress = () => {
    navigation.goBack();
    // navigation.push("ProductPage")
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Share this Apartment using this link",
        url: route.params.productimage,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const star = {
    ratings: {
      1: require("../../../assets/star1.png"),
      2: require("../../../assets/star2.png"),
      3: require("../../../assets/star3.png"),
      4: require("../../../assets/star4.png"),
      5: require("../../../assets/star5.png"),
    },
  };

  const rating = route.params.rating;

  return (
    <ScrollView style={styles.productPage}>
      <TouchableOpacity onPress={handlePress} style={styles.back}>
        <Ionicons name="arrow-back-outline" size={24} color="#333" />
      </TouchableOpacity>
      <Image
        source={{ url: route.params.productimage }}
        style={styles.productImage}
      />
      <View style={styles.container}>
        <View style={styles.relatedInfo}>
          <View style={styles.details}>
            <Text style={styles.productType}>{route.params.housetype}</Text>
            <Text style={globalStyles.textSix}>05 - 01 - 2023</Text>
          </View>
          <Ionicons name="heart-outline" size={24} color="black" />
        </View>
        <Text style={styles.productName}>{route.params.name}</Text>
        <View style={styles.location}>
          <Ionicons name="md-location-outline" size={16} color="#777" />
          <Text style={styles.text}>{route.params.location}</Text>
        </View>
        <Text style={styles.textTitle}>About Appartment</Text>
        <Text style={styles.text}>{route.params.about}</Text>
        <View style={styles.hr}></View>
        <View style={styles.details}>
          <Image source={star.ratings[rating]} />
          <Text style={styles.productPrice}>${route.params.price}</Text>
        </View>
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.detailsFlex}>
          <View style={styles.sellerDetails}>
            <Image
              source={{ url: route.params.sellerimage }}
              style={styles.sellerImage}
            />
            <View>
              <Text style={styles.textTitle}>{route.params.sellername}</Text>
              <Text style={styles.text}>Agent</Text>
            </View>
          </View>
          <View style={styles.call}>
            <Ionicons name="ios-call" size={20} color="#79007B" />
          </View>
        </View>
      </View>
      <TouchableOpacity style={[globalStyles.button, styles.button]}>
        <Text style={globalStyles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[globalStyles.buttonTwo, styles.button]}
        onPress={onShare}
      >
        <Text style={globalStyles.buttonTextTwo}>
          <Ionicons
            name="share-social"
            size={20}
            style={{ paddingRight: 16 }}
            color="#79007B"
          />
          Share now
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  productImage: {
    width: customWidth,
    height: 400,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  productPage: {
    marginBottom: 80,
    flex: 1,
  },
  back: {
    backgroundColor: "#ffffffaa",
    position: "absolute",
    width: 40,
    height: 40,
    top: 50,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    zIndex: 100,
  },
  container: {
    zIndex: 10,
    marginTop: -70,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    elevation: 7,
    shadowOffset: { width: 2, height: 7 },
    shadowColor: "#ccc",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  containerTwo: {
    zIndex: 10,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    elevation: 7,
    shadowOffset: { width: 2, height: 7 },
    shadowColor: "#ccc",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginVertical: 20,
  },
  productType: {
    fontFamily: "outfit-medium",
    color: "#79007B",
    fontSize: 16,
    marginBottom: 8,
  },
  productName: {
    fontSize: 24,
    fontFamily: "outfit-semibold",
    color: "#333",
  },
  location: {
    flexDirection: "row",
    marginVertical: 8,
    marginBottom: 16,
  },
  text: {
    color: "#777",
    fontSize: 16,
    fontFamily: "outfit-regular",
  },
  textTitle: {
    fontFamily: "outfit-medium",
    color: "#333",
    fontSize: 20,
    marginBottom: 8,
  },
  hr: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 16,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productPrice: {
    fontSize: 32,
    color: "#2B2A30",
    fontFamily: "outfit-bold",
  },
  sellerImage: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    marginRight: 8,
  },
  sellerDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 20,
    height: 50,
    marginBottom: 16,
  },
  detailsFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  call: {
    width: 50,
    backgroundColor: "#79007B20",
    borderRadius: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
