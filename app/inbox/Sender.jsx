import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Button from "../components/Button";
import { router } from "expo-router";

export default function Sender() {
  const [value, onChangeText] = useState("Useless Multiline Placeholder");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>COMPOSE</Text>
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>To:</Text>
        <TextInput numberOfLines={1} style={styles.input} />
      </View>

      <View style={styles.messageWrapper}>
        <TextInput
          editable
          multiline
          textAlign="left"
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={[{ padding: 10 }, styles.messageInput]}
        />
      </View>

     
      <TouchableOpacity testID="back" accessibilityLabel="back" onPress={()=>{router.back()}}>
        <View style={styles.sendButton}>
          
          <Button type="SEND"  />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    padding:10,
    marginTop:50,
  },
  header: {
    marginBottom: 20,
    alignItems: "flex-start",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputWrapper: {
    backgroundColor: "lightgray",
    marginBottom: 15,
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    flexDirection: "column",
    paddingLeft:5,
  },
  input: {
    flex: 1,

    backgroundColor: "lightgray", // Adjust as needed

    borderColor: "gray", // Adjust as needed
  },
  messageWrapper: {
    flex: 1,
  },
  messageInput: {
    flex: 1,
    padding: 10,
    backgroundColor: "silver", // Adjust as needed
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray", // Adjust as needed
  },
  sendButton: {
  margin:10,
   
    
  },
});
