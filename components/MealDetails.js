import { Text ,View,StyleSheet} from "react-native";

function MealsDetails(props){


    return(
        <>
            <View >
            <Text style={styles.text}>Details</Text>
                <Text style={[styles.text,props.detailText]}>isVegan {props.isVegan}</Text>   
                <Text style={[styles.text,props.detailText]}>Duration : {props.duration}</Text>
                <Text style={[styles.text,props.detailText]}>complexity : {props.complexity}</Text>
            </View>
        </>
    )
}

export default MealsDetails

const styles = StyleSheet.create({
text:{
   textAlign:'center',
   fontSize:30,
   fontWeight:'bold',
   marginVertical:5
}
})