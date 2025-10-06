import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {PageHome} from "./screens/PageHome"

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="PageHome">
          <Stack.Screen
          name="PageHome"
          component={PageHome}
          options={{headerShown:false}}
          />
      
        </Stack.Navigator>
        
      </NavigationContainer>
    
  );
}

