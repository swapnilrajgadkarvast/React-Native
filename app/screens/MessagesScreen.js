import {
  FlatList,
  Platform,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
} from "react-native";
import ListItem from "../../component/ListItem";
import Constants from "expo-constants";
import Screen from "../../component/Screens";
import ListItemSeparator from "../../component/ListItemSeparator";
import ListItemDeleteAction from "../../component/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "t1",
    description: "d1",
    image: require("../assets/profile.jpg"),
  },
  {
    id: 2,
    title: "t2",
    description: "d2",
    image: require("../assets/profile.jpg"),
  },
];

const MessageScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            name={item.title}
            posts={item.description}
            onPress={() => console.log("Selected : ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => console.log("Deleting : ", item)}
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      ></FlatList>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessageScreen;
