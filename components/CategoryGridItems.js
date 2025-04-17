import { View, Text, StyleSheet, Pressable, Platform } from 'react-native'

function CategoryGridItem ({ title, color,id, onPress }) {


  return (
    <View style={[{ backgroundColor: color }, styles.gridItem]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          pressed ? styles.buttonPressed : null,
          styles.button
        ]}
        android_ripple={{ color: '#ccc' }}
      >
        <View style={[{}, styles.innerContainer]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.title}>{id}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridItem

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    height: 150,
    borderRadius: 8,

    color: 'black',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    borderWidth: Platform.OS === 'ios' ? 1 : 0,
    overflow: 'hidden'
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    color: 'white'
  },
  buttonPressed: {
    opacity: 0.5,

    transform: [{ scale: 1.2 }],
    transitionDuration: 500
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black'
  }
})
