import { StyleSheet } from "react-native";
import ImageInputList from "./ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppFormImagePicker = ({ name }) => {
  const { values, errors, setFieldValue, touched } = useFormikContext();

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri != uri)
    );
  };

  return (
    <>
      <ImageInputList onAddImage={handleAdd} onRemoveImage={handleRemove} />
      <ErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AppFormImagePicker;
