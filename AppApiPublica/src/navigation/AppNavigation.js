import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PageHome from "../features/home/screens/PageHome";
import PageConversor from "../features/home/screens/PageConversor";

export { PageHome } from "../features/home/screens/PageHome";

export default function AppNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="PageHome">
      <Stack.Screen
        name="PageHome"
        component={PageHome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PageConversor"
        component={PageConversor}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
