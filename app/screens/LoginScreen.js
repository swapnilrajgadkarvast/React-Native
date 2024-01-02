import { View, Image, StyleSheet, Text } from "react-native";
import Screen from "../../component/Screens";
import AppTextInput from "../../component/AppTextInput";
import AppButton from "../../component/AppButton";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../component/ErrorMessage";
import AppFormField from "../../component/AppFormField";

const validationSchemas = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          source={require("../assets/react2_image.jpg")}
          style={styles.logo}
        ></Image>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchemas}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              {/* <AppTextInput
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Email"
                keyboardType="email-address"
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
              /> */}
              {/* <Text style={{ color: "red", paddingBottom: 10 }}>
                {errors.email}
              </Text> */}
              {/* <ErrorMessage
                error={errors.email}
                touched={touched.email}
              ></ErrorMessage> */}
              <AppFormField
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Email"
                keyboardType="email-address"
                name="email"
              />
              {/* <AppTextInput
                icon="lock"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Password"
                secureTextEntry
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
              /> */}
              {/* <Text style={{ color: "red", paddingBottom: 10 }}>
                {errors.password}
              </Text> */}
              {/* <ErrorMessage
                error={errors.password}
                touched={touched.password}
              ></ErrorMessage> */}
              <AppFormField
                icon="lock"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Password"
                secureTextEntry
                name="password"
              />

              <AppButton content="Login" onPress={handleSubmit} />
            </>
          )}
        </Formik>
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

export default LoginScreen;
