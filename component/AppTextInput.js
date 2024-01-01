import { StyleSheet, View, TextInput } from "react-native";
import colors from "../app/config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "./Icon";
import defaultStyles from "../app/config/styles";

const AppTextInput = ({ icon, size }) => {
  return (
    <View style={styles.container}>
      {icon && (
        // <MaterialCommunityIcons
        //   name={icon}
        // ></MaterialCommunityIcons>
        <Icon
          name={icon}
          backgroundColor={colors.primary}
          size={40}
          style={{ marginRight: 10 }}
        ></Icon>
      )}
      <TextInput style={defaultStyles.text}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: "100%",
    flexDirection: "row",
    borderRadius: 25,
    padding: 15,
    alignContent: "center",
  },
});

export default AppTextInput;
