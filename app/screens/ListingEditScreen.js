import { View, Image, StyleSheet, Text } from "react-native";
import Screen from "../../component/Screens";
import * as Yup from "yup";
import AppFormField from "../../component/AppFormField";
import SubmitButton from "../../component/SubmitButton";
import AppForm from "../../component/AppForm";
import AppPicker from "../../component/AppPicker";

const validationSchemas = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  { label: "Category", value: 0 },
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

const ListingEditScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          source={require("../assets/react2_image.jpg")}
          style={styles.logo}
        ></Image>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            categories: categories[0].value,
            description: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchemas={validationSchemas}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Title"
            name="title"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Price"
            name="price"
          />
          <AppPicker items={categories} />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Description"
            name="description"
          />

          <SubmitButton content="Post" />
        </AppForm>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 20,
  },
});

export default ListingEditScreen;
