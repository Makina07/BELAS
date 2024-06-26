import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },top:{
        width:'100%',
        height:217,
        backgroundColor:'#6c63ff',
        alignItems:'center',
        borderBottomLeftRadius:80
    },topIcons:{
        marginTop:50,
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:20,
    },
    middle:{
        width:'100%',
        height:700,
        marginTop:30,
        height:290,
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'#fff'
    
    },
    card:{
        width:'95%',
        height:162,
        elevation:10,
        backgroundColor:'#fff',
        borderRadius:10,
        
    },
    line:{
        height:'100%',
        width:12,
        backgroundColor:'#B3CFF8',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    }
})

export default styles