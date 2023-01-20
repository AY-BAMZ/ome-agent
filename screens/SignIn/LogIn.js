import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { createRef, useState } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { globalStyles } from "../../styles/global";
import { useAuthContext } from "../../api/auth/AuthContext";
import Loading from "../Loadings/Loading";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const passwordRef = createRef();

  const {handleLogIn} = useAuthContext()
  const {isLoading} = useAuthContext() 

  const updateInputVal = (val, prop) => {
    if (prop === "email") {
      setEmail(val);
    } else if (prop === "password") {
      setPassword(val);
    }
  };

  const userLogin = () => {
    if (email === "") {
      setErrorMsg("email address field cannot be empty");
    } else if (password.length < 8) {
      setErrorMsg(
        "your password must not be less than 8 character"
      );
    }  else {
      handleLogIn({
        email,
        password,
      });
    }
  };

  if (isLoading) {
    return <Loading />;
  }


  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
        style={styles.body}
      >
        <Text style={[globalStyles.textTwo, styles.title]}>Welcome Back!</Text>
        <Text style={[globalStyles.textFour, styles.titleMessage]}>
          We’re excited to see you again!
        </Text>
        <Text style={globalStyles.label}>Email</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Enter your email"
          value={email}
          autoComplete="email"
          keyboardType="email-address"
          onChangeText={(val) => updateInputVal(val, "email")}
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordRef.current && passwordRef.current.focus()
          }
          blurOnSubmit={false}
        />
        <Text style={globalStyles.label}>Password</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={(val) => updateInputVal(val, "password")}
          ref={passwordRef}
          secureTextEntry={true}
          maxLength={15}
          blurOnSubmit={false}
        />
      </TouchableWithoutFeedback>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => userLogin()}
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.buttonTwo}>
          <Text
            onPress={() => navigation.navigate("Register")}
            style={globalStyles.buttonTextTwo}
          >
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  body: {
    marginHorizontal: 20,
  },
  title: {
    marginHorizontal: 40,
    textAlign: "center",
    color: "#79007B",
    marginVertical: 20,
  },
  titleMessage: {
    fontFamily: "outfit-regular",
    marginHorizontal: 40,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  error: {
    color: "#ff0000",
    fontSize: 14,
    backgroundColor: "#ff000020",
  },
  buttons: {
    marginHorizontal: 20,
  },
});
