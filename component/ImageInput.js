import { Image, StyleSheet, View } from "react-native";
import colors from "../app/config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ImageInput = ({ imageUri }) => {
  return (
    <View style={styles.container}>
      {!imageUri && <MaterialCommunityIcons name="camera" size={40} />}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    marginTop: 5,
    marginLeft: 5,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
