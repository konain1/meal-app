import { Pressable,StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';


function IconButton({onPress,icon,color}){
    return (<Pressable onPress={onPress} style={({pressed})=> pressed && styles.newStyle}> 
        <AntDesign  name={icon} size={24} color={color} />
    </Pressable>)
}

export default IconButton
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
        backgroundColor: '#e2b497',
        borderRadius: 20,
        padding: 6,
    }
});
