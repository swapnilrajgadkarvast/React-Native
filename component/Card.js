import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../app/config/colors";

const Card = ({ image, title, subTitle, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={image} style={styles.image}></Image>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
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

export default Card;
