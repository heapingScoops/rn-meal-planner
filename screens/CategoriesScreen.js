import { CATEGORIES } from "../data/dummy-data"
import { FlatList, StyleSheet } from "react-native"
import CategoryGridTile from '../components/CategoryGridTile'


function CategoriesScreen({ navigation }) {

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {categoryId: itemData.item.id})
        }
        return <CategoryGridTile
            color={itemData.item.color}
            title={itemData.item.title}
            onPress={pressHandler} />
    }


    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            style={styles.flatList}
            numColumns={2}
        />
    )

}

export default CategoriesScreen

const styles = StyleSheet.create({
    flatList: {

    }
})