import {Stack} from "expo-router"

export default function RootLayout(){
    return<Stack>
        {/* <Stack.screen name="inbox/[id]"/> */}
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="components/Block"options={{headerShown:false}}/>
        <Stack.Screen name="components/Plus" options={{headerShown:false}}/>
        <Stack.Screen name="inbox/[id]" options={{headerShown:false}}/>
        <Stack.Screen name="inbox/Sender" options={{headerShown:false}}/>


    </Stack>
}