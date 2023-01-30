import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { createRef, useState } from "react";
import { globalStyles } from "../../../styles/global";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useCreateApartmentContext } from "../../../api/apartments/CreateApartmentContext";
import Loading from "../../Loadings/Loading";

export default function CreateApartment() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [selectType, setSelectType] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [toilets, setToilets] = useState("");
  const [size, setSize] = useState("");
  const [availability, setAvailability] = useState(true);
  const [images, setImages] = useState([]);

  const categoryRef = createRef();
  const descriptionRef = createRef();
  const selectTypeRef = createRef();
  const bathroomsRef = createRef();
  const bedroomsRef = createRef();
  const toiletsRef = createRef();
  const sizeRef = createRef();

  const {handleCreateApartment} = useCreateApartmentContext()
  const {isLoading} = useCreateApartmentContext()

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
      selectionLimit: 5,
    });

    let data = result.assets.map((item) => item.uri);
    if (!result.canceled) {
      setImages([...images, ...data]);
    }
  };

  const handleDeleteImages = (index) => {
    images.splice(index, 1);
    setImages([...images]);
  };

  const formData = new FormData();
  images.forEach((image) => {
    formData.append("images", image);
  });

  const createApartment = () => {
    if (title === "") {
      setErrorMsg("title field cannot be empty");
    } else if (category === "") {
      setErrorMsg("category field cannot be empty");
    } else {
      handleCreateApartment({
        title,
        category,
        price,
        location,
        description,
        availability,
        toilets,
        size,
        selectType,
        formData,
      });
    }
  };


  if (isLoading) {
    return <Loading />;
  }


  return (
    <ScrollView style={styles.container} nestedScrollEnabled = {true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
          style={styles.body}
        >
          <Text style={globalStyles.pageText}>Create Apartment</Text>
          <Text style={globalStyles.label}>Title</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Enter your email"
            value={title}
            autoComplete="Title"
            keyboardType="text"
            onChangeText={(title) => setTitle(title)}
            returnKeyType="next"
            onSubmitEditing={() =>
              categoryRef.current && categoryRef.current.focus()
            }
            blurOnSubmit={false}
          />
          <Text style={globalStyles.label}>Category</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Enter your Category"
            value={category}
            autoComplete="category"
            ref={categoryRef}
            keyboardType="text"
            onChangeText={(category) => setCategory(category)}
            returnKeyType="next"
            onSubmitEditing={() =>
              descriptionRef.current && descriptionRef.current.focus()
            }
            blurOnSubmit={false}
          />
          <Text style={globalStyles.label}>Description</Text>
          <TextInput
            style={globalStyles.textarea}
            placeholder="Enter your Category"
            multiline={true}
            value={description}
            autoComplete="description"
            ref={descriptionRef}
            keyboardType="text"
            onChangeText={(description) => setDescription(description)}
            returnKeyType="next"
            onSubmitEditing={() =>
              selectTypeRef.current && selectTypeRef.current.focus()
            }
            blurOnSubmit={false}
          />
          <Text style={globalStyles.label}>Select type</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Select your type"
            value={selectType}
            ref={selectTypeRef}
            autoComplete="text"
            keyboardType="text"
            onChangeText={(selectType) => setSelectType(selectType)}
            returnKeyType="next"
            onSubmitEditing={() =>
              bathroomsRef.current && bathroomsRef.current.focus()
            }
            blurOnSubmit={false}
          />
          <Text style={globalStyles.label}>Bathrooms</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Enter the amount of bathrooms"
            value={bathrooms}
            autoComplete="number"
            ref={bathroomsRef}
            keyboardType="number"
            onChangeText={(bathrooms) => setBathrooms(bathrooms)}
            returnKeyType="next"
            onSubmitEditing={() =>
              bedroomsRef.current && bedroomsRef.current.focus()
            }
            blurOnSubmit={false}
          />
          <Text style={globalStyles.label}>Bedrooms</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Enter the amount of bedrooms"
            value={bedrooms}
            autoComplete="number"
            ref={bedroomsRef}
            keyboardType="number"
            onChangeText={(bedrooms) => setBedrooms(bedrooms)}
            returnKeyType="next"
            onSubmitEditing={() =>
              toiletsRef.current && toiletsRef.current.focus()
            }
            blurOnSubmit={false}
          />
          <Text style={globalStyles.label}>Toilets</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Enter the amount of toilets"
            value={toilets}
            autoComplete="number"
            ref={toiletsRef}
            keyboardType="number"
            onChangeText={(toilets) => setToilets(toilets)}
            returnKeyType="next"
            onSubmitEditing={() => sizeRef.current && sizeRef.current.focus()}
            blurOnSubmit={false}
          />
          <Text style={globalStyles.label}>Size</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Enter the amount of size"
            value={size}
            autoComplete="number"
            ref={sizeRef}
            keyboardType="text"
            onChangeText={(size) => setSize(size)}
            returnKeyType="next"
            blurOnSubmit={false}
          />
        </TouchableWithoutFeedback>
        <View>
          <FlatList
            style={styles.imageList}
            data={images}
            horizontal={true}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity>
                  <Image style={styles.image} source={{ url: item }} />
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleDeleteImages(index)}
                    style={styles.cancelImage}
                  >
                    <Ionicons name="close" size={18} color="#fff" />
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.media}>
          <TouchableOpacity style={globalStyles.files} onPress={pickImage}>
            <Ionicons name="cloud-upload-outline" size={32} color="#79007B" />
            <Text style={globalStyles.filesText}>Upload Images</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.media}>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={createApartment}
          >
            <Text style={globalStyles.buttonText}>Create Apartment</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    paddingTop: 50,
    height: "100%",
    // alignItems: "center",
    backgroundColor: "#fff",
  },
  body: {
    marginHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 12,
  },
  media: {
    marginHorizontal: 20,
  },
  cancelImage: {
    position: "absolute",
    padding: 6,
    backgroundColor: "#00000060",
    borderRadius: "50%",
    marginLeft: 78,
    marginTop: -8,
    zIndex: 100,
  },
  imageList: {
    paddingTop: 16,
    paddingHorizontal: 20,
  },
});
