import { useNavigation } from '@react-navigation/native';
import { View, Text,StyleSheet ,Image, Pressable} from 'react-native';


function MealItems({ meal }) {

    const navigation = useNavigation()

    

    function mealsDetailsHandler(){

        navigation.navigate('MealsDetails',{
            mealDetails:meal
        })
    }
    


  return (
    <View style={styles.mealItem}>
    <Pressable onPress={mealsDetailsHandler}  android_ripple={{ color: '#ccc' }} style={({ pressed }) => [
          pressed ? styles.buttonPressed : null,
          styles.button
        ]}>
        <View>

        
    <View>
        <Image style={styles.image} source={{uri:meal.imageUrl}} />
        <Text style={styles.title}>{meal.title} {meal.id}</Text>
           
     
    </View>
   
    
    <Text style={styles.extraData}>Duration: {meal.duration} min</Text>
      <Text style={styles.extraData}>   {meal.affordability.toUpperCase()}</Text>
      </View>
      </Pressable>
    </View>
  );
}
export default MealItems;

const styles = StyleSheet.create({
  mealItem: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#f9c2ff',
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  image:{
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 8,
    textAlign: 'center',
  },
  extraData:{
    fontSize: 16,
    color: '#666',
    marginVertical: 4,
    textAlign: 'center',
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 1.01 }],
    transitionDuration: 500
  },
  button: {
    flex: 1,
  
    borderRadius: 8,
    color: 'white'
  }
});