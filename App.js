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
import { useState } from "react";
import AppTextInput from "./component/AppTextInput";
import AppPicker from "./component/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  // const orientation = useDeviceOrientation();
  // console.log(orientation);
  // const dimensions = useWindowDimensions();
  // console.log(dimensions);
  const [firstName, setFirstName] = useState(""); //29-12-2023
  const [isNew, setIsNew] = useState(false);
  return (
    // <View style={styles.container}>
    //   {/* <View
    //     style={{
    //       backgroundColor: "dodgerblue",
    //       height: 100,
    //       width: 100,
    //     }}
    //   >
    //     <View
    //       style={{
    //         backgroundColor: "yellow",
    //         height: 50,
    //         width: 50,
    //       }}
    //     ></View>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: "red",
    //       height: 100,
    //       width: 100,
    //       marginTop: 10,
    //     }}
    //   ></View> */}
    //   <View>
    //     {/* <AppText>Happy New Year !</AppText> */}
    //     {/* <MaterialCommunityIcons name="email" size={60} color="blue" /> */}
    //     {/* <AppButton content="login" color="green" onPress={()=>console.log('Logining In')} /> */}
    //   </View>
    // </View>
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <TitleScreen />
    // <View style={{ backgroundColor: "#f8f4f4", paddingTop: 75, padding: 20 }}>
    //   <Card
    // image={require("./app/assets/red_jacket.jpg")}
    // title="Red Jacket for sale"
    // subTitle="$100"
    //   />
    // </View>
    // <ListingDetailsScreen
    //   image={require("./app/assets/red_jacket.jpg")}
    //   title="Red Jacket for sale"
    //   subTitle="$100"
    // />
    // <GestureHandlerRootView>
    //   <MessageScreen />
    // </GestureHandlerRootView>
    // <Screen>
    //   {/* <Icon
    //     name="email"
    //     size={100}
    //     backgroundColor={colors.danger}
    //     iconColor={colors.white}
    //   ></Icon> */}
    //   <GestureHandlerRootView>
    //     {/* <AccountScreen /> */}  // 28-12-2023
    //     <ListingsScreen />  // 29-12-2023
    //   </GestureHandlerRootView>
    // </Screen>
    // <View style={{ flex: 1, backgroundColor: "black" }}>
    //   <Image
    //     source={require("./assets/react1_image.jpg")}
    //     style={{ width: width, height: height, resizeMode: "cover" }}
    //   />
    //   <View
    //     style={{
    //       position: "absolute",
    //     }}
    //   >
    //     <Image
    //       source={require("./assets/react2_image.jpg")}
    //       style={{
    //         width: 100,
    //         height: 100,
    //         top: height / 2 - 320,
    //         left: width / 2 - 50,
    //       }}
    //     />
    //     <Text
    //       style={{
    //         marginTop: 10,
    //         marginRight: 50,
    //         color: "black",
    //         top: height / 2 - 320,
    //         left: width / 2 - 70,
    //       }}
    //     >
    //       Sell What You Don't Need
    //     </Text>
    //   </View>
    //   <Image
    //     source={require("./assets/react3_image.jpg")}
    //     style={{ width: width, height: height, resizeMode: "contain" }}
    //   />
    //   <View style={{ position: "absolute", top: 0, left: 0 }}>
    //     <View
    //       style={{
    //         top: 30,
    //         left: 30,
    //         width: 70,
    //         height: 70,
    //         backgroundColor: "red",
    //       }}
    //     />
    //   </View>
    //   <View style={{ position: "absolute", top: 0, right: 0 }}>
    //     <View
    //       style={{
    //         top: 30,
    //         right: 30,
    //         width: 70,
    //         height: 70,
    //         backgroundColor: "green",
    //       }}
    //     />
    //   </View>
    // </View>

    // <Screen>
    //   {/* <Text style={{ fontSize: 24, color: "red" }}>{firstName}</Text> //29-12-2023
    //   <TextInput
    //     placeholder="Firstname"
    //     maxLength={255}
    //     secureTextEntry
    //     style={styles.textinput}
    //     onChangeText={(text) => setFirstName(text)}
    //   /> */}
    //   {/* <AppTextInput icon="email"/> */}
    //   {/* <Switch value={isNew} onValueChange={(isNew) => setIsNew(isNew)}></Switch> */}
    //   <AppPicker />
    // </Screen>
    <LoginScreen></LoginScreen>
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
