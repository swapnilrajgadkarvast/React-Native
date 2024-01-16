import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessagesScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyAccount" component={AccountScreen}></Stack.Screen>
      <Stack.Screen name="Messages" component={MessageScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AccountNavigator;
