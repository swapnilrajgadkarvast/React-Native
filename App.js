import { useDeviceOrientation } from "@react-native-community/hooks";
import {
  StyleSheet,
  View,
  Dimensions,
  useWindowDimensions,
  Image,
  Text,
  TextInput,
  Switch,
  Button,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
import AppText from "./component/AppText.android";
import AppButton from "./component/AppButton";
import Card from "./component/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessagesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "./component/Icon";
import colors from "./app/config/colors";
import Screen from "./component/Screens";
import ListItem from "./component/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingScreens";
import { useEffect, useState } from "react";
import AppTextInput from "./component/AppTextInput";
import AppPicker from "./component/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./component/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImageUri(result.assets[0].uri);
    } catch (error) {
      console.log("Error while selecting an image");
    }
  };
  const requestPermission = async () => {
    const granted = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (!granted) alert("You have to enable permission to access the library");
  };
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <Screen>
      <Button title="select image" onPress={selectImage}></Button>
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      <ImageInput imageUri={imageUri} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    fontSize: 30,
    fontWeight: "600",
    color: "red",
    textTransform: "capitalize",
    lineHeight: 40,
    textAlign: "right",
  },
  textinput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
