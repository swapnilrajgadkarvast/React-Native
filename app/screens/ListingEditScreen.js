import { View, Image, StyleSheet, Text } from "react-native";
import Screen from "../../component/Screens";
import * as Yup from "yup";
import AppFormField from "../../component/AppFormField";
import SubmitButton from "../../component/SubmitButton";
import AppForm from "../../component/AppForm";
import AppPicker from "../../component/AppPicker";
import AppFormPicker from "../../component/AppFormPicker";
import AppFormImagePicker from "../../component/AppFormImagePicker";
import { useState } from "react";

const validationSchemas = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select atleast one image"),
});

const categories = [
  { label: "Category", value: 0 },
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

const ListingEditScreen = () => {
  const [location, setLocation] = useState();
  const getLocation = async () => {};
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
            images: [],
          }}
          onSubmit={(values) => console.log(values)}
          validationSchemas={validationSchemas}
        >
          <AppFormImagePicker name="images" />
          <AppFormField name="title" placeholder="Title" maxLength={255} />
          <AppFormField
            maxLength={8}
            name="price"
            placeholder="Price"
            keyboardType="numeric"
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
