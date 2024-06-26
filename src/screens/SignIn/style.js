import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    top:{
        height:310,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
    },
    image:{
        marginTop:70,
        width:240,
        height:240, 
          
     },
     texto:{
        marginTop:250,
        color:'#6c63ff',
        fontSize:21,
     },
     inputContainer:{
        width:'90%',
        flexDirection:'row',
        borderWidth:1,
        height:48,
        marginTop:15,
        borderRadius:20,
        borderColor:'#6c63FF',
        elevation:10,
        backgroundColor:'#fff',
        alignItems:'center',
     },
     input:{
        marginLeft:10,
        flex:1
     },
     icons:{
        marginLeft:20,
     },
     content:{
        width:'100%',
        alignItems:'center'
     },
     recover:{
        width:'100%',
        marginTop:10,
        alignItems:'flex-end',
        paddingHorizontal:30
     },
     textoRecover:{
        color:'#A4A4A4',
        fontSize:14,
     },purple:{
        marginTop:10,
        width:'90%',
        height:49,
        backgroundColor:'#6c63FF',
        borderRadius:20,
        elevation:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
       
    }, textoSg:{
        fontSize:16,
        color:'#fff',
    },
    buttonContainer:{
        
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },white:{
        marginTop:20,
        width:'90%',
        height:49,
        backgroundColor:'#F2F4F6',
        borderRadius:20,
        elevation:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
       
    },textoS:{
        fontSize:14,
        color:'#A4A4A4',
       
    },sg:{
        fontSize:14,
        color:'#6c63ff',
    },iconI:{
        width:24,
        height:24,
        marginRight:15,
    },iconII:{
        width:27,
        height:27,
        marginRight:20,
    },textContainer:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%'

    }
}) 

export default styles