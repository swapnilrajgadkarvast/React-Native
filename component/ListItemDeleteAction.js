import { View, StyleSheet } from "react-native";
import colors from "../app/config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "./Icon";

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <View style={styles.container}>
      {/* <MaterialCommunityIcons
        name="trash-can"
        size={35}
        color={colors.white}
        onPress={onPress}
      ></MaterialCommunityIcons> */}
      <Icon
        name="trash-can"
        size={35}
        iconColor={colors.white}
        backgroundColor={colors.danger}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
