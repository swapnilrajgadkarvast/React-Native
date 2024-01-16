import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import ListItem from "../../component/ListItem";
import MessageScreen from "./MessagesScreen";
const ListingDetailsScreen = ({ image, title, subTitle, route }) => {
  const listing = route.param;
  return (
    <View>
      <Image style={styles.image} source={listing.image}></Image>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subTitle}>{listing.subTitle}</Text>
      </View>
      <View>
        <ListItem
          image={require("../assets/profile.jpg")}
          name="Swapnil Rajgadkar"
          posts="5 posts"
        />
        {/* <MessageScreen /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 18,
    color: "green",
  },
  detailsContainer: {
    padding: 20,
  },
});

export default ListingDetailsScreen;
