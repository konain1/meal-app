import { useNavigation } from '@react-navigation/native'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import IconButton from './IconButton'
import { useLayoutEffect } from 'react'

function MealsDetails (props) {
  function headerButtonPressHandler () {
    console.log('pressed header button')
  }

  const navigation = useNavigation()

  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight: () => {
          return (
            <IconButton
              icon='star'
              color='yellow'
              onPress={headerButtonPressHandler}
            ></IconButton>
          )
        }
      })
  },[headerButtonPressHandler,navigation])


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
