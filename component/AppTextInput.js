import { StyleSheet, View, TextInput } from "react-native";
import colors from "../app/config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "./Icon";
import defaultStyles from "../app/config/styles";

const AppTextInput = ({ icon, width = "100%", size, ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color={colors.primary}
          size={40}
          style={{ marginRight: 10 }}
        ></MaterialCommunityIcons>
        // <Icon
        //   name={icon}
        //   backgroundColor={colors.primary}
        //   size={40}
        //   style={{ marginRight: 10 }}
        // ></Icon>
      )}
      <TextInput style={defaultStyles.text} {...otherProps}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: "row",
    borderRadius: 25,
    padding: 15,
    alignContent: "center",
    marginBottom: 20,
  },
});

export default AppTextInput;
