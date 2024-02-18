import { View, Text, StyleSheet, Image, ScrollView , Button} from 'react-native'
import MealDataList from '../components/MealDataList'
import { useLayoutEffect , useContext} from 'react'
import { FavoritesContext } from '../store/context/favorites-context'


export default function MealScreen({ route, navigation }) {
    
    const meal = route.params.meal
    const favoriteMealsCtx = useContext(FavoritesContext)
    const mealIsFavorite = favoriteMealsCtx.ids.includes(meal.id)
   

    function favoriteMeal(){
        favoriteMealsCtx.addFavorite(meal.id)
    }
    function unfavoriteMeal(){
        favoriteMealsCtx.removeFavorite(meal.id)
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => {
                if(mealIsFavorite){
                    return <Button title="Unfavorite" onPress={unfavoriteMeal}/> 
                } else{
                    return <Button title="Favorite" onPress={favoriteMeal}/>
                }
            }            
        })
    }, [mealIsFavorite])

    return (
        <View style={styles.root}>
            <ScrollView>
                <View>
                    <Image style={styles.image} source={{ uri: meal.imageUrl }} />
                    <Text style={styles.title}>{meal.title}</Text>
                    <Text style={styles.details}>{meal.duration}m  {meal.complexity.toUpperCase()}  {meal.affordability.toUpperCase()}</Text>
                    <View>
                        <View>
                            <MealDataList mealDataCategory='Ingredients' mealDataItems={meal.ingredients} />
                        </View>
                        <View>
                            <MealDataList mealDataCategory='Steps' mealDataItems={meal.steps} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View >
    )

}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350

    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        margin: 16
    },
    details: {
        textAlign: 'center',
        color: '#c39555',
        marginBottom: 8,
        fontSize: 14
    },
    root:{
        paddingBottom: 16
    }

})