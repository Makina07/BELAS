import { SafeAreaView, TouchableOpacity, View,Text, Image } from 'react-native';
import styles from './style';
import {MaterialIcons} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Notifications from '../Notifications';
import ConsultaStatus from '../ConsultaStatus';
import Settings from '../Settings';


const Tab = createBottomTabNavigator()

function Tabs ({navigation}){
    return (
        <SafeAreaView>
          <View style={styles.top}>
     
             <View style={styles.topIcons}>
     
             <TouchableOpacity>
                         <MaterialIcons name='logout' size={24} color={'#fff'}/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                         <MaterialIcons name='notifications' size={24} color={'#fff'}/>
                  </TouchableOpacity>
     
             </View>
     
             <View style={styles.profile}>
     
                 <View style={styles.pick}>

                 </View>
     
                 <View style={styles.info}>
     
                     <Text style={styles.nome}>BILMA ROSA TCHIVALA</Text>
                     <Text style={styles.textInfo}>email: bilmarosa@gmail.com</Text>
                     <Text style={styles.textInfo}>telefone: 936861853</Text>
     
                 </View>
     
                
             </View>
     
             <View style={styles.more}>
                 <MaterialIcons name='more-horiz' size={25} color={'#6c63ff'}/>
             </View>
     
          </View>
     
     
         <View style={styles.middle}>
     
            <View style={styles.elements}>
            <TouchableOpacity style={styles.buttons} onPress={()=>navigation.navigate('InscrevaSe')}>
             <Text style={styles.texto}>Inscreva-se</Text>
             <Image source={require('../../../assets/imgs/1.png')} style={styles.imagensButton}></Image>
             </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttons}>
             <Text style={styles.texto}>Cursos</Text>
             <Image source={require('../../../assets/imgs/2.png')} style={styles.imagensButton}></Image>
             </TouchableOpacity>
            </View>
             
           <View style={styles.elements}>
     
           <TouchableOpacity style={styles.buttons}>
             <Text style={styles.texto}>Novidades</Text>
             <Image source={require('../../../assets/imgs/3.png')} style={styles.imagensButton}></Image>
             </TouchableOpacity>
             
             <TouchableOpacity style={styles.buttons} onPress={()=>{navigation.navigate('ConsultaStatus')}}>
                 <Text style={styles.texto}>Consultar Status</Text>
                 <Image source={require('../../../assets/imgs/4.png')} style={styles.imagensButton}></Image>
                 </TouchableOpacity>
           </View>
         </View>
        </SafeAreaView>
       );
  }

  export function Home({navigation}) {
 
    return(
        <Tab.Navigator  screenOptions={{tabBarStyle:{
          height:68,
          borderTopLeftRadius:15,
          borderTopRightRadius:15,
          backgroundColor:'#b3cff8',
          elevation:10,
        }, tabBarShowLabel:false}}>
        
          <Tab.Screen name='Home'  component={Tabs} options={{headerShown:false, tabBarIcon:({focused, color,size, onPress})=>
             <MaterialIcons name='home' color={color='#fff'} size={size=27}/>
        }} />
          <Tab.Screen name='Notifications' component={Notifications}   options={{headerShown:false, tabBarIcon:({focused, color,size})=>
           <MaterialIcons name='notifications' color={color='#fff'} size={size=27}/>
        }}/>
          <Tab.Screen name='ConsultaStatus' component={ConsultaStatus}  options={{headerShown:false, tabBarIcon:({focused, color,size})=>
           <MaterialIcons name='calendar-month' color={color='#fff'} size={size=27}/>
        }}/>
  
          <Tab.Screen name='settings' component={Settings}  options={{headerShown:false, tabBarIcon:({focused, color,size})=>
           <MaterialIcons name='settings' color={color='#fff'} size={size=27}/>
        }}/>
        </Tab.Navigator>
    )
  }
  