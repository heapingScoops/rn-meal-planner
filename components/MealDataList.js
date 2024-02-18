//component that takes in a meal object Makes a flatlist of Meal Data Items

import { FlatList, View, Text, StyleSheet } from 'react-native'
import MealDataItem from './MealDataItem'

export default function MealDataList({ mealDataCategory, mealDataItems }) {

    function renderList(itemData) {
        return <MealDataItem dataItem={itemData.item} />
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{mealDataCategory}</Text>
            {/* <FlatList data={mealDataItems} renderItem={renderList} keyExtractor={(item) => item} /> */}
            {mealDataItems.map( (mealDataItem) => {
                return <MealDataItem key={mealDataItem} dataItem={mealDataItem} />
            })
            }
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '80%',
        marginHorizontal: '10%',
        marginVertical: 24
    },
    title: {
        fontSize: 28,
        color: '#c39555',
        marginBottom: 8
    }
})