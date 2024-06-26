import { View } from 'react-native';
import InscrevaSe from '../screens/InscrevaSe';
import UploadDocument from '../screens/Document';
import Payment from '../screens/Payment';
import ConsultaStatus from '../screens/ConsultaStatus';
import { Home } from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()






export default function AppStack() {
 return (
    <Stack.Navigator>
    <Stack.Screen component={Home} name='Home' options={{headerShown:false}}/>
    <Stack.Screen name='InscrevaSe' component={InscrevaSe}   options={{headerShown:false}}/>
    <Stack.Screen component={UploadDocument} name='UploadDocument' options={{headerShown:false}}/>
    <Stack.Screen component={Payment} name='Payment' options={{headerShown:false}}/>
    <Stack.Screen component={ConsultaStatus} name='ConsultaStatus' options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}
