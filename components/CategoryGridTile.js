import { View, Text, Pressable, StyleSheet, Platform } from 'react-native'

function CategoryGridTile({ color, title , onPress }) {
    return (
        <View style={[styles.tileContainer]}>
            <Pressable onPress={onPress} android_ripple={{color: '#ccc'}} style={({pressed}) => pressed ? [styles.pressed, styles.button] : styles.button }>
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    tileContainer: {
        flex: 1,
        margin: 16,
        height: 150, 
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: .25,
        shadowOffset: {width: .5, height: 2},
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button:{
        flex: 1,
    },
    innerContainer:{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    pressed:{
        opacity: .25
    }
})