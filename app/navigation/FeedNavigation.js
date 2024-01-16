import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from "../screens/ListingScreens";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Listing" component={ListingsScreen}></Stack.Screen>
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default FeedNavigator;
