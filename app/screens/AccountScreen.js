import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../../component/Screens";
import ListItem from "../../component/ListItem";
import colors from "../config/colors";
import Icon from "../../component/Icon";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondry,
    },
  },
];

const AccountScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/profile.jpg")}
          name="Swapnil Rajgadkar"
          posts="swapnilr@valueaddsofttech.com"
        ></ListItem>
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                ></Icon>
              }
              name={item.title}
            ></ListItem>
          )}
        ></FlatList>
      </View>
      <View style={styles.container}>
        <ListItem
          name="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d"></Icon>}
        ></ListItem>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
