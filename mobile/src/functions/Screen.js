import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Screen({Page, NameScreen}) {
    const Stack = createStackNavigator();
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={NameScreen} component={Page}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}