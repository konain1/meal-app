import { Text, View, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'
import { FavouriteContext } from '../store/context/favourite'
import { useContext } from 'react'

function Favourite() {

    const favContext= useContext(FavouriteContext)

    const favouriteList = MEALS.filter((meal)=>favContext.ids.includes(meal.id))
  
  

  return (
    <View style={styles.container}>
  <Text>Favourite</Text>
  {
    favouriteList.map((meal)=><>
         <View key={meal.id}>
                <Text style={styles.text}>Details</Text>
                <Text style={[styles.text]}>
                  isVegan {meal.isVegan}
                </Text>
                <Text style={[styles.text]}>
                  Duration : {meal.duration}
                </Text>
                <Text style={[styles.text]}>
                  complexity : {meal.complexity}
                </Text>
              </View>
    </>)
  }
  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 5
  }
})

export default Favourite