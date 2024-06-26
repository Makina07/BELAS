import { Image, Text, TextInput, View,TouchableOpacity } from 'react-native';
import styles from './style';
import {MaterialIcons} from '@expo/vector-icons'


export default function SignIn({navigation}) {
 return (
  <>
   <View style={styles.top}>
     <Text style={styles.texto}>Entrar</Text>
     <Image source={require('../../../assets/imgs/Sign in-amico.png')} style={styles.image}/>
   </View>
   <View style={styles.content}>
   <View style={styles.inputContainer}>

       <MaterialIcons name='person' color={'#A4A4A4'} size={25} style={styles.icons}>
       </MaterialIcons>
       <TextInput placeholder='UserName' style={styles.input}></TextInput>    

   </View>
   <View style={styles.inputContainer}>

       <MaterialIcons name='lock' color={'#A4A4A4'} size={20} style={styles.icons}>
       </MaterialIcons>
       <TextInput placeholder='Password' style={styles.input}></TextInput>    
         
   </View>
   <View style={styles.recover}>
    <Text style={styles.textoRecover}>esqueceu a password?</Text>
    </View>
    <TouchableOpacity style={styles.purple} onPress={()=>{navigation.navigate('Home')}}>
           <Text style={styles.textoSg}>Sign In</Text>
    </TouchableOpacity>
    <View style={styles.textContainer}>
        <Text style={styles.textoS}>Ainda não possui uma conta?</Text>
        <Text style={styles.sg}>Sign</Text>
    </View>
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.white} onPress={()=>{navigation.navigate('SignUp')}}>
           <Image source={require('../../../assets/imgs/google.png')} style={styles.iconI}/>
           <Text style={styles.textoS}>Continuar com o goolge</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.white} onPress={()=>{navigation.navigate('SignUp')}}>
    <Image source={require('../../../assets/imgs/fb.png')} style={styles.iconII}/>
           <Text style={styles.textoS}>Continuar o facebook</Text>
    </TouchableOpacity>
    </View>

   </View>
  </>
  );
}