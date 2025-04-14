import { FlatList,View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridItem from '../components/CategoryGridItems'

function renderCategoryItems (itemData) {
  return (
    <CategoryGridItem
      key={itemData.item.id}
      title={itemData.item.title}
      color={itemData.item.color}
    />
  )
}

function CategoriesScreen () {
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
