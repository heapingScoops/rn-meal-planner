import { createContext, useState } from 'react'

//this is the dummy version with values just to help with autocomplete.
//but we DID have to make it, because this context object will need to be called later
//we are exporting it (i think) because we need to use it in the below function?
export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
})

//this is the component we will export to be used by all who desire
//we pass in {children} because when we call this, it will be wrapping around other <Components>; those are the {children}
function FavoritesContextProvider({ children }) {

    //fun note! favoriteMealIds will never be seen again. this is, internally, how we're referring to them,...
    //...but we're only going to be exporting what we call "ids" (see above favoritesContext)
    const [favoriteMealIds, setFavoriteMealIds] = useState([])


    function addFavorite(id) {
        setFavoriteMealIds((currentFavoriteMealIds) => [...currentFavoriteMealIds, id])
    }

    function removeFavorite(id) {
        setFavoriteMealIds((currentFavoriteMealIds) =>
            currentFavoriteMealIds.filter((mealId) => mealId !== id)
        );
    }

    //set a variable "value" with all this shit we want to export and be available to the world.
    //we will pass this into a prop below
    const value={
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    //Note: Here, FavoritesContext, is referring to that initial thing we defined up top
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>

}

export default FavoritesContextProvider;