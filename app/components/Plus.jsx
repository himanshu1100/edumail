import { Image , StyleSheet, View } from "react-native";

export default function Plus(){
    return(
        <View style={styles.cont}>
        <Image
        style={styles.logo}
        source={require("../../assets/pngwing.com.png")}
    
       width={40}
       height={40}
      />
      </View>
       
    )
}

const styles = StyleSheet.create({
    cont:{
        flex: 1,
        justifyContent: 'flex-end', // Align items at the bottom
        alignItems: 'flex-start', // Align items to the left
        
    },
    logo: {
     width: 60,
     height: 60,
    position: "absolute",
    right:30,
    bottom:30,
    borderWidth:2,
    borderRadius:2,
    zIndex: 1,
    },
  });

  