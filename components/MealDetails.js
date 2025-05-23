import { useNavigation } from '@react-navigation/native'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import IconButton from './IconButton'
import { useContext, useLayoutEffect } from 'react'
import {FavouriteContext} from '../store/context/favourite'
import { MEALS } from '../data/dummy-data'

function MealsDetails (props) {
  const mealId = props.mealId.id
  const navigation = useNavigation()

  const FavouriteMealContext = useContext(FavouriteContext)

  let favMeal = FavouriteMealContext?.ids?.includes(mealId)

  function changeFavourite () {
    if (favMeal) {
      FavouriteMealContext.removeFavourite(mealId)
      console.log(FavouriteContext.ids)
    } else {
      FavouriteMealContext.addFavourite(mealId)
    }
  }


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={favMeal ? 'star' : 'staro'}
            color='yellow'
            onPress={changeFavourite}
          ></IconButton>
        )
      }
    })
  }, [changeFavourite, navigation,favMeal])

  return (
    <>
      <View>
        <Text style={styles.text}>Details</Text>
        <Text style={[styles.text, props.detailText]}>
          isVegan {props.isVegan}
        </Text>
        <Text style={[styles.text, props.detailText]}>
          Duration : {props.duration}
        </Text>
        <Text style={[styles.text, props.detailText]}>
          complexity : {props.complexity}
        </Text>
      </View>
    </>
  )
}

export default MealsDetails

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 5
  }
})
