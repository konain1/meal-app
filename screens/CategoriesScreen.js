import { FlatList,View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridItem from '../components/CategoryGridItems'



function CategoriesScreen ({navigation}) {



  function renderCategoryItems (itemData) {
    function pressHandler (itemId) {

      navigation.navigate('MealsOverview',{categoryId:itemId})
      }
    return (
      <CategoryGridItem
        key={itemData.item.id}
        id={itemData.item.id}
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={()=>pressHandler(itemData.item.id)}
      />
    )
  }
  
  return (
    <View style={{ flex: 1, padding: 16 ,width:'100%'}}>


    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItems}
      keyExtractor={item => item.id}
      numColumns={2}
    />
        </View>
  )
}

export default CategoriesScreen
