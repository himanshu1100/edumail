import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Btn from "../components/Button";
import { useLocalSearchParams } from "expo-router";
export default function Users() {
  const allData = require("../../data/emails.json");

  const id = useLocalSearchParams().id;
  //console.log(allData);
  const myData = allData.filter((e) => {
    return e.id == String(id);
  });
 // console.log(myData);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>{myData[0].subject}</Text>
      </View>

      <View>
        <Text style={styles.reciever}>From: {myData[0].sender}</Text>
      </View>

      <ScrollView style={styles.body}>
        <Text style={styles.main}>{myData[0].content}</Text>
      </ScrollView>
      
      <View style={styles.reply}>
      <TouchableOpacity onPress={()=>{router.back()}}>
        <Btn type={"reply"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{router.back()}}>
        <Btn type={"reply-all"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{router.back()}}>
        <Btn type={"forward"} />
        </TouchableOpacity>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between", // Align items vertically
    marginTop:50,
  },
  heading: {
    fontSize: 30,
    margin: 4,
  },
  reciever: {
    fontSize: 20,
    margin: 4,
    padding: 2,
  },
  body: {
    flex: 1, // Take remaining vertical space
  },
  main: {
    marginTop: 10,
    fontSize: 15,
  },
  reply: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 16, // Adjust as needed
  },
});
