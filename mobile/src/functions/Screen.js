import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Logins from '../pages/Logins';
import Book from '../pages/Book';
import Folder from '../pages/Folder';

const Stack = createStackNavigator();

export default function Screen() {
    return(
      <NavigationContainer>
        <Stack.Navigator screenListeners={{headerShown: false}}>
          <Stack.Screen headerShown={false} name="Logins" component={Logins}/>
          <Stack.Screen headerShown={false} name='Folder' component={Folder}/>
          <Stack.Screen headerShown={false} name="Book"   component={Book}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}