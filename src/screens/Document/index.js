import { View, TouchableWithoutFeedback, Keyboard,KeyboardAvoidingView,Platform, ScrollView,TouchableOpacity,Text } from 'react-native';
import styles from './style';
import InputTextDefault from '../../components/InputTextDefault';
import {MaterialIcons} from '@expo/vector-icons';
import  * as DocumentPicker from 'expo-document-picker'
export default function UploadDocument({navigation}) {

    const selectDocPdf = async()=>{
        try{

           const result = await DocumentPicker.getDocumentAsync({
                type:'application/pdf'
            })

        console.log(result)
       return result

        }catch(err){

           if((await DocumentPicker.getDocumentAsync()).canceled == true){
            console.log('usuario cancelou!')
            return
           }
           if(err){
             console.log('erro no serviço de API')
           }
        }
    }

    const selectDoc = async()=>{
        try{

           const result = await DocumentPicker.getDocumentAsync({
                type:'image/*'
            })

        console.log(result)
       return result

        }catch(err){

           if((await DocumentPicker.getDocumentAsync()).canceled == true){
            console.log('usuario cancelou!')
            return
           }
           if(err){
             console.log('erro no serviço de API')
           }
        }
    }

    return (
      <View style={styles.container}>
       <View style={styles.header}>
           <TouchableOpacity onPress={()=>navigation.navigate('InscrevaSe')}>
           <MaterialIcons name='arrow-back' size={27} color={'#fff'} style={styles.icons}/>
           </TouchableOpacity>
           <Text style={styles.headerText}>INCREVA-SE EM NOSSA UNIVERSIDADE</Text>
           <View style={styles.number}>
               <View style={styles.num}>
                   <View style={styles.circle}><Text>1</Text></View>
                   <View style={styles.circleUm}><Text style={styles.nums}>2</Text></View>
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

       <View style={styles.align}>
       <InputTextDefault texto={'Foto tipo passe'}></InputTextDefault>
       <TouchableOpacity style={styles.button}><Text style={styles.textButton} onPress={selectDoc}>Upload</Text></TouchableOpacity>
       </View>

       <View style={styles.align}>
       <InputTextDefault texto={'Bilhete de Identidade'}></InputTextDefault>
       <TouchableOpacity style={styles.button}><Text style={styles.textButton} onPress={selectDocPdf}>Upload</Text></TouchableOpacity>
       </View>
       <View style={styles.align}>
       <InputTextDefault texto={selectDoc.name}></InputTextDefault>
       <TouchableOpacity style={styles.button} onPress={selectDocPdf}><Text style={styles.textButton}>Upload</Text></TouchableOpacity>
       </View>
      
       
       
   
       <TouchableOpacity style={styles.purple} onPress={()=>{navigation.navigate('Payment')}}>
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