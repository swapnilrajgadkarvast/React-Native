import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";
import { useRef } from "react";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();
  return (
    <ScrollView
      horizontal
      ref={scrollView}
      onContentSizeChange={() => scrollView.current.scrollToEnd()}
    >
      <View style={styles.container}>
        {imageUris.map((uri) => (
          <ImageInput
            key={uri}
            imageUri={uri}
            onChangeImage={() => onRemoveImage(uri)}
          />
        ))}
        <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default ImageInputList;
