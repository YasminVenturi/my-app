import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CECEF6",
  },

  innerContainer: {
    paddingHorizontal: 20,
    alignSelf: "stretch",
    borderRadius: 10,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'purple',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modal: {
    backgroundColor: "purple",
    padding: 20,
    borderRadius: 10,
  }
});
