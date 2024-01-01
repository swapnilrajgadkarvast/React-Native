import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import colors from "../app/config/colors";

const Icon = ({
  name,
  size = 40,
  backgroundColor = "black",
  iconColor = colors.white,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={size / 2}
        color={iconColor}
      ></MaterialCommunityIcons>
    </View>
  );
};

export default Icon;
