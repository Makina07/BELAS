import { View, TouchableWithoutFeedback, Keyboard,KeyboardAvoidingView,Platform, ScrollView,TouchableOpacity,Text } from 'react-native';
import styles from './style';
import InputTextDefault from '../../components/InputTextDefault';
export default function SignUp({navigation}) {
 return (
  <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  keyboardVerticalOffset={80}
  >
   <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
  
    <ScrollView  contentContainerStyle={styles.container}>

    <InputTextDefault texto={'Nome completo'}></InputTextDefault>
    <InputTextDefault texto={'Email'}></InputTextDefault>
    <InputTextDefault texto={'Telefone'}></InputTextDefault>
    <InputTextDefault texto={'Senha'}></InputTextDefault>
    <InputTextDefault texto={'Confirmar Senha'}></InputTextDefault>

    <TouchableOpacity style={styles.purple} onPress={()=>{navigation.navigate('SignIn')}}>
           <Text style={styles.texto}>Sign Up</Text>
    </TouchableOpacity>

    </ScrollView>
  
   
   </TouchableWithoutFeedback>
   </KeyboardAvoidingView>
  );
}