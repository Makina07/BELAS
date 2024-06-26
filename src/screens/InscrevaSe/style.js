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
        paddingTop:10,

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
    }
})

export default styles