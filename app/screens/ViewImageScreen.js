import { StyleSheet, Image, View } from "react-native";
import AppButton from "../../component/AppButton";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton}>
        <MaterialCommunityIcons name="close" size={35} color={colors.white} />
      </View>
      <View style={styles.deleteButton}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color={colors.white}
        />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/react3_image.jpg")}
        resizeMode="contain"
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 60,
    left: 40,
  },
  deleteButton: {
    position: "absolute",
    top: 60,
    right: 40,
  },
});

export default ViewImageScreen;
