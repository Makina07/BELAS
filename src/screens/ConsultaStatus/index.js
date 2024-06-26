import { SafeAreaView, TouchableOpacity, View, Image } from 'react-native';
import styles from './style';
import {MaterialIcons} from '@expo/vector-icons'


export default function ConsultaStatus() {
 return (
    <SafeAreaView style={styles.container}>
    <View style={styles.top}>

       <View style={styles.topIcons}>

       <TouchableOpacity>
                   <MaterialIcons name='logout' size={24} color={'#fff'}/>
            </TouchableOpacity>
            <TouchableOpacity>
                   <MaterialIcons name='notifications' size={24} color={'#fff'}/>
            </TouchableOpacity>

       </View>

    </View>


   <View style={styles.middle}>

    <View style={styles.card}>
        <View style={styles.line}></View>
    </View>
    <Image source={require('../../../assets/imgs/data.png')} style={{width:325,height:270, marginTop:10, resizeMode:'contain'}}></Image>
   </View>
  </SafeAreaView>
       );
  }

  