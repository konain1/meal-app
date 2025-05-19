import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import MealsDetails from '../components/MealDetails'

function MealsDetailsScreen({ route }) {
  const mealsDetails = route.params.mealDetails

 
    
  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.header}>
        <Image style={styles.img} source={{ uri: mealsDetails.imageUrl }} />
        <Text style={styles.title}>{mealsDetails.title}</Text>
      </View>
      
      <MealsDetails
        isVegan={mealsDetails.isVegan ? 'yes' : 'No'}
        duration={mealsDetails.duration}
        complexity={mealsDetails.complexity}
        detailText={styles.detailText}
        mealId={mealsDetails}
      />

      <View style={styles.ingredients}>
        <Text style={styles.subtitle}>Ingredients</Text>
        {mealsDetails.ingredients.map((item) => (
          <Text key={item} style={styles.text}>
            {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Cochin'
  },
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

export default MealsDetailsScreen
