import { View, Text, FlatList , StyleSheet } from 'react-native'
import { useContext } from 'react'
import { FavoritesContext } from '../store/context/favorites-context'
import MealTile from '../components/MealTile'
import { MEALS } from '../data/dummy-data'

export default function FavoritesScreen( {navigation} ) {
    const favoriteMealsCtx = useContext(FavoritesContext)

    const favoriteMealObjects = favoriteMealsCtx.ids.map( (mealId) => {
        return MEALS.find( currentMeal => currentMeal.id === mealId)
    })



    function renderList(itemData) {
        return <MealTile meal={itemData.item} handlePress={pressHandler} />
    }
    function pressHandler(meal){
        navigation.navigate('Meal', {meal:meal})
    }

    return (
        <View style={styles.container}>
            <FlatList data={favoriteMealObjects} renderItem={renderList} keyExtractor={(item) => item.id} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})