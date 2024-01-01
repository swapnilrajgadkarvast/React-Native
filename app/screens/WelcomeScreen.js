import { StyleSheet, ImageBackground, Image, View, Text } from "react-native";
import AppButton from "../../component/AppButton";
import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/react1_image.jpg")}
    >
      <View>
        <Image
          style={styles.logo}
          source={require("../assets/react2_image.jpg")}
        ></Image>
        <Text>Some text</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton content="Login" onPress={() => console.log("Loging In")} />
        <AppButton
          content="Register"
          color={colors.secondry}
          onPress={() => console.log("Registering")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    height: 70,
    width: "100%",
    backgroundColor: "red",
  },
  registerButton: {
    height: 70,
    width: "100%",
    backgroundColor: "green",
  },
  logo: {
    height: 100,
    width: 100,
    bottom: 550,
  },
  tagLine: {},
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  //   logoContainer: {
  //     position: "absolute",
  //     top: 50,
  //     alignItems: "center",
  //   },
});

export default WelcomeScreen;
