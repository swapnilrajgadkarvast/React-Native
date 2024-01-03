import { Picker } from "@react-native-picker/picker";
import { View, StyleSheet } from "react-native";
import { useState } from "react";
import colors from "../app/config/colors";

const AppPicker = ({ items }) => {
  const [selectedValue, setSelectedValue] = useState(items[0].value);

  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        {items.map((item) => (
          <Picker.Item
            style={{ fontSize: 20 }}
            key={item.value.toString()}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    marginBottom: 20,
  },
  picker: {
    color: colors.black,
  },
});

export default AppPicker;
