import { StyleSheet, View,Text } from "react-native";

export default function Button(props){
return (
    <View style={style.button}>
        
        <Text style={{fontWeight:"600"}}>{props.type}</Text>
    </View>
)
}

const style = StyleSheet.create({
    button:{
        borderWidth:2,
        borderColor:"black",
        width:80,
        height:30,
        
        justifyContent:"center",
        alignItems:"center"
    }
})