import { View, TouchableWithoutFeedback, Keyboard,KeyboardAvoidingView,Platform, ScrollView,TouchableOpacity,Text, Image } from 'react-native';
import styles from './style';
import InputTextDefault from '../../components/InputTextDefault';
import {MaterialIcons} from '@expo/vector-icons'
export default function Payment({navigation}) {
 return (
   <View style={styles.container}>
    <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <MaterialIcons name='arrow-back' size={27} color={'#fff'} style={styles.icons}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>FINALIZE SUA INSCRIÇÃO, FAÇA O PAGAMENTO
        </Text>
        <View style={styles.number}>
            <View style={styles.num}>
                <View style={styles.circle}><Text >1</Text></View>
                <View style={styles.circle}><Text>2</Text></View>
                <View style={styles.circleUm} ><Text style={styles.nums}>3</Text></View>
            </View>
        </View>
    </View>
    <View style={styles.corp}>
    <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  keyboardVerticalOffset={70}
  >
   <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
  
    <ScrollView  contentContainerStyle={styles.containerView}>

   
   <Image source={require('../../../assets/imgs/cards.png')} style={{width:321, height:225, marginHorizontal:10, marginBottom:30}}/>
   

    <TouchableOpacity style={styles.buttons}><Text style={styles.btnText}>12.000,00kz</Text></TouchableOpacity>

    <TouchableOpacity style={styles.purple} onPress={()=>{navigation.navigate('Home')}}>
           <Text style={styles.texto}>Finalizar</Text>
    </TouchableOpacity>

    </ScrollView>
  
   
   </TouchableWithoutFeedback>
   </KeyboardAvoidingView>
    <Text>Increva-se</Text>
    </View>
   </View>
  );
}
