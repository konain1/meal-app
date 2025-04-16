import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';



const RootStack = createNativeStackNavigator({
  screens: {
    Home: CategoriesScreen,
  },
});


const Navigation = createStaticNavigation(RootStack);
export default function App() {

  return (
    <>
 <Navigation />
    </>
  );
}




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#241c15 ',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
