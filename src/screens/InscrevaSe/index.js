import { View, TouchableWithoutFeedback, Keyboard,KeyboardAvoidingView,Platform, ScrollView,TouchableOpacity,Text } from 'react-native';
import styles from './style';
import InputTextDefault from '../../components/InputTextDefault';
import {MaterialIcons} from '@expo/vector-icons'
export default function InscrevaSe({navigation}) {
 return (
   <View style={styles.container}>
    <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <MaterialIcons name='arrow-back' size={27} color={'#fff'} style={styles.icons}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>INCREVA-SE EM NOSSA UNIVERSIDADE</Text>
        <View style={styles.number}>
            <View style={styles.num}>
                <View style={styles.circleUm}><Text style={styles.nums}>1</Text></View>
                <View style={styles.circle}><Text>2</Text></View>
                <View style={styles.circle} ><Text>3</Text></View>
            </View>
        </View>
    </View>
    <View style={styles.corp}>
    <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  keyboardVerticalOffset={70}
  >
   <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
  
    <ScrollView  contentContainerStyle={styles.container}>

    <InputTextDefault texto={'Nome completo'}></InputTextDefault>
    <InputTextDefault texto={'YYYY/MM/DD'}></InputTextDefault>
    <InputTextDefault texto={'selecione um faculdade'}></InputTextDefault>
    <InputTextDefault texto={'selecione um curso'}></InputTextDefault>
    <InputTextDefault texto={'selecione um periodo'}></InputTextDefault>

    <TouchableOpacity style={styles.purple} onPress={()=>{navigation.navigate('UploadDocument')}}>
           <Text style={styles.texto}>next</Text>
    </TouchableOpacity>

    </ScrollView>
  
   
   </TouchableWithoutFeedback>
   </KeyboardAvoidingView>
    <Text>Increva-se</Text>
    </View>
   </View>
  );
}
