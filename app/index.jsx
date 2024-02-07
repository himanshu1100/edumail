import { StatusBar } from 'expo-status-bar';
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View,TouchableNativeFeedback,FlatList ,Button,TouchableWithoutFeedback, Pressable} from 'react-native';
import Plus from './components/Plus';
import Block from './components/Block';

export default function App() {


   let  DATA =require("../data/emails.json");
   return (
    <View style={styles.container}>

      <Text style={styles.header}>EDUMAIL</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) =>{return <Pressable  onPress={() => router.push(`inbox/${item.id}`)}>
        <Block header={item.subject} body={item.content}/>
      </Pressable>;}}
        keyExtractor={(e)=>e.id}
        ></FlatList>
     
     <Pressable testID="send" accessibilityLabel="send" onPress={()=>{router.push("inbox/Sender");console.log("hi")}} ><Plus /></Pressable>
      <StatusBar style="auto" />
    
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:50,
    
    fontSize:30,
    
  
  },
  header:{
    fontSize:30,
    marginLeft:15
    
  }
});
