import { View } from 'react-native';
import Main from '../screens/Main';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator()
export default function AuthStack() {
 return (
    <Stack.Navigator>
    <Stack.Screen name='Main' options={{headerShown:false,}} component={Main}/>
    <Stack.Screen name='SignUp' options={{headerShown:true, headerStyle:{
      backgroundColor:'#6c63FF',
      height:229,
      borderBottomLeftRadius:80,
    }, headerTitle:'CRIA UMA CONTA DE USUARIO', 
    headerTintColor:'#fff', 
    }}   component={SignUp}/>
     <Stack.Screen component={SignIn} name='SignIn' options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}