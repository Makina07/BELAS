import{StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity} from 'react-native'


export default function Main({navigation}) {


    return (
     <SafeAreaView style={{backgroundColor:'#fff', flex:1}}>
     <View>
       <Text style={styles.text} >BEM-VINDO A UNIVERSIDADE DE BELAS</Text>
       <Image source={require('../../../assets/imgs/university.png')} style={styles.image}></Image>
     
     </View>
     <View style={styles.buttonContainer}>
       <TouchableOpacity style={styles.purple} onPress={()=>{navigation.navigate('SignUp')}}>
           <Text style={styles.texto}>Sign Up</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.secundButton} onPress={()=>{navigation.navigate('SignIn')}}>
           <Text style={styles.texto}>Sign in</Text>
       </TouchableOpacity>
      </View>
   </SafeAreaView>
   
     );
   }
   
   
   const styles = StyleSheet.create({
   
   container:{
     flexDirection:'column',
     justifyContent:'space-between',
     alignItems:'center',
     height:125,
     width:'100%',
     marginVertical:20
   },text:{
       marginTop:120,
       marginHorizontal:20,
       marginBottom:50,
       fontSize:21,
       color:'#6C63FF'
   
     },
     image:{
        marginTop:10,
       width:350,
       height:289,
       alignItems:'center',
     },
     purple:{
       width:315,
       height:49,
       backgroundColor:'#6c63FF',
       borderRadius:20,
       elevation:10,
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center'
      
   },
   secundButton:{
    width:315,
    height:49,
    backgroundColor:'#B3CFF8',
    borderRadius:20,
    elevation:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
   
},
   texto:{
       fontSize:16,
       color:'#fff',
   },
   buttonContainer:{
    marginVertical:15,
    width:'100%',
    height:125,
    justifyContent:'space-between',
    alignItems:'center'
   }
   })