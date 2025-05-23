import { Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import CategoriesScreen from '../screens/CategoriesScreen'
import Favourite from '../components/Favourite'
import SelectedFavouriteMeals from '../components/SelectedFavouriteMeals'

function DrawerNavigation () {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories'
        }}
      />
      <Drawer.Screen name="SelectedFavouriteMeals" component={SelectedFavouriteMeals} ></Drawer.Screen>
      <Drawer.Screen name="Favourite" component={Favourite}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation
