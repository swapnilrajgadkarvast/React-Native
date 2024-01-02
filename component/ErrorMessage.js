import { Text } from "react-native";

const ErrorMessage = ({ error, touched }) => {
  if (!error || !touched) return null;
  return (
    <Text style={{ color: "red", paddingBottom: 20, marginTop: -15 }}>
      {error}
    </Text>
  );
};

export default ErrorMessage;
