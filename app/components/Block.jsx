
import { View ,Text ,StyleSheet, TouchableNativeFeedback} from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";
export default function Block(props){

    return (
       
        <View style={styles.con} >
            <View style={styles.check}>
                <BouncyCheckbox fillColor="black"></BouncyCheckbox>
            </View>
            <View style={styles.check} >
                <Text numberOfLines={1} style={styles.text} >{props.header}</Text>
                <Text numberOfLines={2} style={styles.text} >{props.body}</Text>
            </View>
        </View>
        
    )

}

const styles = StyleSheet.create({
    con:{
        height:70,
        flexDirection:"row",
        marginHorizontal:15,
        padding:5,
        marginTop:10,
        borderWidth:2,
        backgroundColor:"lightgray"

    },
    check:{
        alignItems:"flex-start",
        justifyContent:"center",
        
        
    }
    ,text:{
        marginRight:40,
    }
});