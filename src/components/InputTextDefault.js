import { Text, View } from 'react-native';
import { StyleSheet,TextInput } from "react-native";
export default function InputTextDefault({texto}) {
 return (
    <View style={styles.inputContainer}>
    <TextInput style={styles.input} placeholder={texto} style={styles.texto}>
        <Text style={styles.texto}></Text>
    </TextInput>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        justifyContent:'space-between',
        alignItems:'center'
    },
    inputContainer:{
        marginTop:32,
        backgroundColor:'#fff',
        width:311,
        paddingVertical:8,
        paddingHorizontal:20,
        borderWidth:1,
        elevation:10,
        borderRadius:20,
        borderColor:'#6c63FF'
    },
    texto:{
        fontSize:16,
        color:'#A4A4A4'
    }
})

