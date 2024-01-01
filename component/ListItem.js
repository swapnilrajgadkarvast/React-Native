import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

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
        <View style={styles.profileInfo}>
          {IconComponent}
          {image && <Image style={styles.profile_image} source={image} />}
          <View style={styles.textContainer}>
            <Text style={styles.name}>{name}</Text>
            {posts && <Text style={styles.post}>{posts}</Text>}
          </View>
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
  profileInfo: {
    flexDirection: "row",
    padding: 10,
  },
  textContainer: {
    marginLeft: 20,
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
