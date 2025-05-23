import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrawerNavigator from './Drawer/DrawerNavigator'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealsDetailsScreen from './screens/MealsDetailsScreen'
import {FavouriteContextProvider} from './store/context/favourite'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <FavouriteContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'lightgreen' },
            contentStyle: { backgroundColor: 'purple' },
            headerTintColor: 'purple'
          }}
        >
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name='MealsOverview' 
            component={MealsOverviewScreen} 
          />
          <Stack.Screen
            name='MealsDetails'
            component={MealsDetailsScreen}
            options={{
              contentStyle: { backgroundColor: 'white' }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavouriteContextProvider>
  )
}