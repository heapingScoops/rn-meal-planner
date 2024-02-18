//A tile that has an image of a meal with an image, a title below it in bold, then below that, separated by space, size, simple, price

import { View, Text, Pressable, StyleSheet, Image , Platform} from 'react-native'

export default function MealTile({ meal, handlePress }) {

    //View (outer container style==> shadowstuff, border radius, overflow hidden)
    //Pressable (pressHandler, android ripple, conditional style on press for iOS)
    //View (inner style )      
    //Image
    //Text
    //Text

    return (
        <View style={styles.outerContainer}>
            <Pressable
                android_ripple={{ color: 'black' }}
                style={({ pressed }) => pressed ? [styles.pressed, styles.innerContainer] : styles.innerContainer}
                onPress={() => handlePress(meal)}>
                <View>
                    <Image style={styles.image} source={{ uri: meal.imageUrl }} />
                    <Text style={styles.title}>{meal.title}</Text>
                    <Text style={styles.details}>{meal.duration}m {meal.complexity.toUpperCase()} {meal.affordability.toUpperCase()}</Text>
                </View>
            </Pressable>

        </View>
    )



}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        margin: 16,
        overflow: 'hidden',
        borderRadius: 18,
        backgroundColor: 'white',
        borderColor: 'black',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: .4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 18,
        flex: 1,
        elevation: 2,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        margin: 8
    },
    details: {
        textAlign: 'center',
        marginBottom: 8
    },
    pressed: {
        opacity: .75
    }
})

