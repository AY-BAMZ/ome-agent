import { Dimensions, StyleSheet } from "react-native";

const customWidth = Dimensions.get("window").width;

export const globalStyles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pageText: {
    fontFamily: "outfit-semibold",
    color: "#2B2A30",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#79007B",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    fontFamily: "outfit-semibold",
    color: "#fff",
    fontSize: 16,
  },
  buttonTwo: {
    backgroundColor: "#fafafa00",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonTextTwo: {
    fontFamily: "outfit-semibold",
    color: "#79007B",
    fontSize: 16,
  },
  buttonThree: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonTextThree: {
    fontFamily: "outfit-semibold",
    color: "#79007B",
    fontSize: 16,
  },
  textarea: {
    // maxWidth: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    height: 120,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderColor: "#dddddd",
    borderWidth: 1,
    fontSize: 18,
    marginVertical: 4,
    // textAlign: 'center'
  },
  input: {
    // maxWidth: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    fontSize: 18,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderColor: "#dddddd",
    borderWidth: 1,
    marginVertical: 4,
    // textAlign: 'center'
  },
  label: {
    fontFamily: "outfit-medium",
    color: "#777",
    fontSize: 18,
    marginTop: 8,
  },
  inputTwo: {
    maxWidth: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginVertical: 12,
    fontSize: 18,
    textAlign: 'center',
  },
  textOne: {
    fontFamily: "outfit-bold",
    color: "#2B2A30",
    fontSize: 40,
  },
  textTwo: {
    fontFamily: "outfit-bold",
    color: "#2B2A30",
    fontSize: 32,
  },
  textThree: {
    fontFamily: "outfit-semibold",
    color: "#2B2A30",
    fontSize: 24,
  },
  textFour: {
    fontFamily: "outfit-semibold",
    color: "#2B2A30",
    fontSize: 20,
  },
  textFive: {
    fontFamily: "outfit-medium",
    color: "#2B2A30",
    fontSize: 18,
  },
  textSix: {
    fontFamily: "outfit-medium",
    color: "#2B2A30",
    fontSize: 16,
  },
  textSeven: {
    fontFamily: "outfit-regular",
    color: "#2B2A30",
    fontSize: 14,
  },
  textEight: {
    fontFamily: "outfit-regular",
    color: "#2B2A30",
    fontSize: 12,
  },
  headerIconBox: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  filter: {
    padding: 8,
    borderRadius: 40,
    width: 40,
    height: 40,
    backgroundColor: '#79007B',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  inputArea: {
    maxWidth: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 44,
    paddingHorizontal: 2,
    borderRadius: 50,
    marginVertical: 12,
    marginHorizontal: 20,
    paddingLeft: 10,
    borderColor: "#dddddd",
    borderWidth: 1,
  },
  error: {
    color: "#ff0000",
    fontSize: 14,
    backgroundColor: "#ff000020",
    marginHorizontal: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    textAlign: "center"
  },
  noError: {
    display: "none"
  },
  hr: {
    marginHorizontal: 20,
    height: 1,
    width: customWidth - 40,
    backgroundColor: "#ddd",
    marginVertical: 12
  },
});
