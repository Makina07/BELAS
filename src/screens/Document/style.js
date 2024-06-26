import { StyleSheet } from "react-native";


const styles =StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        width:'100%',
        height:'30%',
        backgroundColor:'#6C63FF'
    },
    corp:{
        marginTop:-30,
        width:'100%',
        height:'100%',
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:50,

    },
    purple:{
        marginTop:30,
        width:315,
        height:49,
        backgroundColor:'#6c63FF',
        borderRadius:20,
        elevation:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
       
    },texto:{
        fontSize:16,
        color:'#fff',
    },
    headerText:{
        padding:20,
        color:'#fff',
        fontSize:21,
    
    },
    number:{
        width:'100%',
        alignItems:'center',
    },num:{
        width:'29%',
        height:8,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        elevation:10,
    },
    circle:{
       
        backgroundColor:'#fff',
        alignItems:'center',
        width:22,
        height:22,
        borderRadius:40,
        elevation:10,
    }
    ,circleUm:{
        backgroundColor:'#B3CFF8',
        alignItems:'center',
        width:22,
        height:22,
        borderRadius:40,
        elevation:10,
    },nums:{
        color:'#fff',
        fontSize:16,
        
    },
    icons:{
        marginTop:40,
        marginLeft:25
    },
    button:{
        width:97,
        height:47,
        backgroundColor:'#b3cff8',
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        marginLeft:-95,
        marginTop:31,
        zIndex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    align:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff'
    },textButton:{
        fontSize:14,
        color:'#fff'
    }
})

export default styles