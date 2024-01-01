import { Text, StyleSheet } from "react-native";

const AppText = ({ children }) => {
  return <Text style={styles.content}>{children}</Text>;
};

const styles = StyleSheet.create({
  content: {
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: 30,
    color: "tomato",
  },
});
export default AppText;
