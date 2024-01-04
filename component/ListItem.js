import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
  image,
  name,
  posts,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor="#f0f0f0" onPress={onPress}>
        <View style={styles.listItemContainer}>
          {IconComponent}
          {image && <Image style={styles.profile_image} source={image} />}
          <View style={styles.textContainer}>
            <Text style={styles.name} numberOfLines={1}>{name}</Text>
            {posts && <Text style={styles.post} numberOfLines={2}>{posts}</Text>}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
          ></MaterialCommunityIcons>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  profile_image: {
    width: 100,
    height: 100,
    // marginTop: 20,
    marginLeft: 15,
    borderRadius: 50,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  textContainer: {
    marginLeft: 20,
    justifyContent: "center",
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  post: {
    fontSize: 15,
  },
});

export default ListItem;
