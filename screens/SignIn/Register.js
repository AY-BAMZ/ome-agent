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
import { Checkbox } from "react-native-paper";
import { useAuthContext } from "../../api/auth/AuthContext" 
import Loading from "../Loadings/Loading";

export default function Register({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = React.useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isAgent, setIsAgent] = useState(true)
  const [isDisable, setIsDisable] = useState(true)

  const lastNameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const confirmPasswordRef = createRef();

  const {handleRegister} = useAuthContext()
  const {isLoading} = useAuthContext() 

  const updateInputVal = (val, prop) => {
    if (prop === "email") {
      setEmail(val);
    } else if (prop === "password") {
      setPassword(val);
    } else if (prop === "confirmPassword") {
      setConfirmPassword(val);
    } else if (prop === "firstName") {
      setFirstName(val);
    } else if (prop === "lastName") {
      setLastName(val);
    }
  };

  const userSignUp= () => {
    if (firstName === "") {
      setErrorMsg("You need to enter your first name");
    } else if (lastName === "") {
      setErrorMsg("You need to enter your last name");
    } else if (email === "") {
      setErrorMsg("email address field cannot be empty");
    } else if (password.length < 8) {
      setErrorMsg(
        "your password must not be less than 8 character"
      );
    } else if (password !== confirmPassword && confirmPassword !== password) {
      setErrorMsg("your password doesn't match");
    } else {
      handleRegister({firstName,
        lastName,
        email,
        password,
        confirmPassword,
        isAgent,});
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
        <Text style={[globalStyles.textTwo, styles.title]}>
          Register/Sign up to RentRite
        </Text>
        <Text style={[globalStyles.textFour, styles.titleMessage]}>
          We’re excited to see you!
        </Text>

        <Text style={errorMsg ? globalStyles.error : globalStyles.noError}>{errorMsg}</Text>
        <Text style={globalStyles.label}>First Name</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={(val) => updateInputVal(val, "firstName")}
          returnKeyType="next"
          onSubmitEditing={() =>
            lastNameRef.current && lastNameRef.current.focus()
          }
          blurOnSubmit={false}
        />
        <Text style={globalStyles.label}>Last Name</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Enter your Last Name"
          ref={lastNameRef}
          value={lastName}
          onChangeText={(val) => updateInputVal(val, "lastName")}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current && emailRef.current.focus()}
          blurOnSubmit={false}
        />
        <Text style={globalStyles.label}>Email</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Enter your email"
          ref={emailRef}
          keyboardType="email-address"
          value={email}
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
          returnKeyType="next"
          onSubmitEditing={() =>
            confirmPasswordRef.current && confirmPasswordRef.current.focus()
          }
          secureTextEntry={true}
          maxLength={15}
          blurOnSubmit={false}
        />
        <Text style={globalStyles.label}>Confirm Password</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={(val) => updateInputVal(val, "confirmPassword")}
          ref={passwordRef}
          returnKeyType="next"
          secureTextEntry={true}
          maxLength={15}
          blurOnSubmit={false}
        />
      </TouchableWithoutFeedback>
      <View style={styles.checker}>
        <View style={styles.checkBoxStyle}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            uncheckedColor="grey"
            color="#000"
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
        <Text style={styles.checkMessage}>
          By signing up, you have agreed to the Privacy Policies and Terms &
          Conditions of Ome
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => userSignUp()}
          style={globalStyles.button}
          disabled={!checked ? true : false}
        >
          <Text style={globalStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.buttonTwo}>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={globalStyles.buttonTextTwo}
          >
            Login Instead
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
  checker: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 12,
    alignItems: "center",
  },
  checkMessage: {
    maxWidth: "80%",
  },
  buttons: {
    marginHorizontal: 20,
  },
  checkBoxStyle: {
    width: 38,
    flexDirection: "row",
    height: 38,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#aaa",
    marginRight: 10,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
 
});
