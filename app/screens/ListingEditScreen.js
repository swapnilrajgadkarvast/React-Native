import { View, Image, StyleSheet, Text } from "react-native";
import Screen from "../../component/Screens";
import * as Yup from "yup";
import AppFormField from "../../component/AppFormField";
import SubmitButton from "../../component/SubmitButton";
import AppForm from "../../component/AppForm";
import AppPicker from "../../component/AppPicker";
import AppFormPicker from "../../component/AppFormPicker";

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
            categories: null,
            description: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchemas={validationSchemas}
        >
          <AppFormField name="title" placeholder="Title" maxLength={255} width="50%" />
          <AppFormField
            maxLength={8}
            name="price"
            placeholder="Price"
            keyboardType="numeric"
            width={120}
          />
          <AppFormPicker name="category" items={categories} />
          <AppFormField
            placeholder="Description"
            name="description"
            multiline
            numberOfLines={3}
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
