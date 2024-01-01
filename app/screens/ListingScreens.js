import { FlatList } from "react-native-gesture-handler";
import Card from "../../component/Card";
import Screen from "../../component/Screens";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    subTitle: "INR 500",
    image: require("../assets/red_jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch for sale",
    subTitle: "INR 5000",
    image: require("../assets/red_jacket.jpg"),
  },
];
const ListingsScreen = () => {
  return (
    <View style={styles.container}>
      <Screen>
        <FlatList
          data={listings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={item.subTitle}
              image={item.image}
            ></Card>
          )}
        ></FlatList>
      </Screen>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
