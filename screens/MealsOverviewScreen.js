import {View, FlatList, StyleSheet } from 'react-native'
import { useLayoutEffect } from 'react'
import { MEALS , CATEGORIES } from '../data/dummy-data'
import MealTile from '../components/MealTile'

function MealsOverviewScreen( {navigation, route} ){
    const catId=route.params.categoryId
    const currentMeals=MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(() => {
        //on load/change of catId & navigation
        //we will loop through CATEGORIES, to find the entry whose id === catId
        //save that in a variable
        //navigation.setOptions({title: variable})
        const categoryName = CATEGORIES.find( (category) => {
            return (catId === category.id)
        }).title

        navigation.setOptions({
            title: categoryName
        })

    }, [catId, navigation])

    function pressHandler(meal){
        navigation.navigate('Meal', {meal:meal})
    }
    
    function renderList(itemData){
        return <MealTile meal={itemData.item} handlePress={pressHandler} />
    }

    return(
        <View style={styles.container}>
            <FlatList data={currentMeals} renderItem={renderList} keyExtractor={(item) => item.id} />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 16
    }
})