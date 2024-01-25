// Esse Arquivo é o Responsável por fazer a comunicação entre as navegações de Tela


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Logins from '../pages/Logins';
import Book from '../pages/Book';
import Folder from '../pages/Folder';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default function Screen() {
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen headerShown={false} name="Logins" component={Logins}/>
          <Stack.Screen headerShown={false} name='Folder' component={Folder}/>
          <Stack.Screen headerShown={false} name="Book"   component={Book}/>
          <Stack.Screen headerShown={false} name="Tabs"   component={Tabs}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}