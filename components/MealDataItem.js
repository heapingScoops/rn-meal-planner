import { View, Text, StyleSheet } from 'react-native'

function MealDataItem({ dataItem }) {

    return (
        <View style={styles.container}>
            <Text style={styles.item}>{dataItem}</Text>
        </View>
    )

}

export default MealDataItem

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#c39555',
        borderRadius: 10,
        padding: 8,
        marginVertical: 4,
        width: '90%'
    },
    item:{
        textAlign: 'center'
    }
})