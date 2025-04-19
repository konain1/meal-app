import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';





const Stack = createNativeStackNavigator();


export default function App() {
  


  return (
    <>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
     headerStyle:{backgroundColor:'lightgreen'},
     contentStyle:{backgroundColor:'purple'},
     headerTintColor:'purple'
    }} >
      <Stack.Screen  name="MealsCategory" component={CategoriesScreen}   options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          }}} />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    
    </>
  );
}

