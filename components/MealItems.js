import { View, Text } from 'react-native';


function MealItems({ meal }) {
  return (
    <View>
      <Text>{meal.title}</Text>
      <Text>{meal.affordability}</Text>
    </View>
  );
}
export default MealItems;