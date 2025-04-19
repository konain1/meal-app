import { useLayoutEffect } from 'react'
import MealItems from '../components/MealItems'
import {CATEGORIES, MEALS} from '../data/dummy-data'
import {View, Text, StyleSheet,FlatList} from 'react-native'


function MealsOverviewScreen({route,navigation}){

    
    const categoryId = route.params.categoryId
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)




    useLayoutEffect(()=>{

        const categoryTitle = CATEGORIES.find((category)=> category.id == categoryId).title

        navigation.setOptions({
            title:categoryTitle
           })
    },[categoryId,navigation])
   
    

    function  renderMeal(itemData){
        return <MealItems meal={itemData.item} />
    }
    return(
        <View>
            <FlatList  data={displayMeals} keyExtractor={item=>item.id} renderItem={renderMeal} />
        </View>
    )
}

const styles = StyleSheet.create({})
export default MealsOverviewScreen