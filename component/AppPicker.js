import { Picker } from "@react-native-picker/picker";
import { View, StyleSheet } from "react-native";
import { useState } from "react";
import colors from "../app/config/colors";

const AppPicker = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item style={{ fontSize: 24 }} label="Java" value="java" />
        <Picker.Item style={{ fontSize: 24 }} label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
  },
  picker: {
    color: colors.black,
  },
});

export default AppPicker;
