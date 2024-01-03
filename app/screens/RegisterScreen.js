import { View, Image, StyleSheet, Text } from "react-native";
import Screen from "../../component/Screens";
import * as Yup from "yup";
import AppFormField from "../../component/AppFormField";
import SubmitButton from "../../component/SubmitButton";
import AppForm from "../../component/AppForm";

const validationSchemas = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const RegisterScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          source={require("../assets/react2_image.jpg")}
          style={styles.logo}
        ></Image>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchemas={validationSchemas}
        >
          <AppFormField
            icon="account"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Name"
            name="name"
          />
          <AppFormField
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            keyboardType="email-address"
            name="email"
          />
          <AppFormField
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry
            name="password"
          />

          <SubmitButton content="Register" />
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

export default RegisterScreen;
