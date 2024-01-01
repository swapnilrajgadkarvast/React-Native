import { View, StyleSheet } from "react-native";
const ListItemSeparator = () => {
  return <View style={styles.listItem}></View>;
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    height: 1,
    backgroundColor: "#f8f4f4",
  },
});

export default ListItemSeparator;
