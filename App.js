import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealsDetailsScreen from './screens/MealsDetailsScreen'
import IconButton from './components/IconButton'
import DrawerNavigator from './Drawer/DrawerNavigator'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <>
      <NavigationContainer>
      
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'lightgreen' },
            contentStyle: { backgroundColor: 'purple' },
            headerTintColor: 'purple'
          }}
        >
          {/* <Stack.Screen
            name='MealsCategory'
            component={CategoriesScreen}
            options={{
              title: 'My home',
              headerStyle: {
                backgroundColor: '#f4511e'
              }
            }}
          /> */}

          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />

          <Stack.Screen
            name='MealsDetails'
            component={MealsDetailsScreen}
            options={{
              contentStyle: { backgroundColor: 'white' }
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
