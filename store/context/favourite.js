import { createContext, useState } from 'react'

// Initial context value with typed functions
export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {}
})

export function FavouriteContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([])

  function addFavourite(id) {
    setFavouriteMealIds((currentMealIds) => {
      // Prevent duplicate IDs
      if (currentMealIds.includes(id)) {
        return currentMealIds
      }
      return [...currentMealIds, id]
    })
  }

  function removeFavourite(id) {
    setFavouriteMealIds((currentMealIds) =>
      currentMealIds.filter((mealId) => mealId !== id)
    )
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite,
    removeFavourite
  }

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  )
}

// Default export the Provider
export default FavouriteContextProvider