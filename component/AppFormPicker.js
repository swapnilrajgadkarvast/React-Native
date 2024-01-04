import ErrorMessage from "./ErrorMessage";
import { StyleSheet, View } from "react-native";
import colors from "../app/config/colors";
import { Picker } from "@react-native-picker/picker";

import { useFormikContext } from "formik";
const AppFormPicker = ({ name, items,width }) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <>
      <View style={[styles.container, { width }]}>
        <Picker
          selectedValue={values[name]}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            setFieldValue(name, items[itemIndex])
          }
        >
          {items.map((item) => (
            <Picker.Item key={item.label} value={item} label={item.label} />
          ))}
        </Picker>
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    //padding: 15,
    marginVertical: 20,
  },
});
export default AppFormPicker;
