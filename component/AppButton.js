import { Text, TouchableOpacity } from "react-native";
import colors from "../app/config/colors";
const AppButton = ({ content, color = colors.primary, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        width: "100%",
        borderRadius: 25,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        marginBottom:10
      }}
    >
      <Text
        style={{
          color: colors.white,
          fontSize: 20,
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        {content}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
