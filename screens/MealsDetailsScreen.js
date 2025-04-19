import { View, Text, StyleSheet,Image ,FlatList} from 'react-native'
import MealsDetails from '../components/MealDetails'

function MealsDetailsScreen ({ route }) {
  const mealsDetails = route.params.mealDetails

 const imgurl = mealsDetails.imageUrl

 

  return (
    <View>
    <View style={styles.header} >
        <Image style={styles.img} source={{uri:imgurl}} />
        <Text style={styles.title}> {mealsDetails.title}</Text>
    </View>
      
      <MealsDetails
        isVegan={mealsDetails.isVegan ? 'yes' : 'No'}
        duration={mealsDetails.duration}
        complexity={mealsDetails.complexity}
        detailText={styles.detailText}
      ></MealsDetails>

      <View style={styles.ingredients}>
      <Text style={styles.ingredients}>ingredients</Text>
        <FlatList
          data={mealsDetails.ingredients}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Text style={styles.text}>{item}</Text>
          )}
        />
      </View>
    </View>
  )
}

export default MealsDetailsScreen

const styles  = StyleSheet.create({
    ingredients:{
   
        justifyContent:'space-around',
        alignItems:'center',
      
        fontSize:30,
        fontWeight:'bold',
      
        marginVertical:10,
        padding:10,
      
       },
    text:{
        margin:6,
        fontSize:20,
        fontWeight:'bold',
         fontFamily: 'Cochin'

    },
    detailText:{
        fontSize:18,

        fontFamily: 'Cochin',
        fontWeight:'bold',
        textAlign:'center',
    },
    header:{
        backgroundColor:'lightblue',
        padding:10,
  
        borderRadius:10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
        textAlign:'center',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:'100%',
        height:200,
        
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 8,
        textAlign: 'center',
        fontFamily: 'Cochin'
    }

})
