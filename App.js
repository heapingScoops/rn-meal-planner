import 'react-native-gesture-handler';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealScreen from './screens/MealScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';


export default function App() {

  const Drawer = createDrawerNavigator()
  const Stack = createNativeStackNavigator()

  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#150d00' },
          headerTintColor: 'white',
          sceneContainerStyle: { backgroundColor: '#301c00' },
          drawerContentStyle: { backgroundColor: '#150d00' },
          drawerInactiveTintColor: 'white',
          drawerActiveBackgroundColor: '#cf9e5a',
          drawerActiveTintColor: '#150d00'
        }}
      >
        <Drawer.Screen
          name='Categories'
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
            drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name="list" />
          }}
        />
        <Drawer.Screen
          name='Favorites'
          component={FavoritesScreen}
          options={{
            title: 'Favorites',
            drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name="list" />
          }}
        />

      </Drawer.Navigator>
    )
  }

  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#150d00' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#301c00' }
            }}>
            {/* This is pointing to the above function which creates a Drawer.Navigator with its own Navigation */}
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="Meal" component={MealScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>

    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
