import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Welcome from '../screens/Welcome'
import RecipeDetail from '../screens/RecipeDetail'

const Stack =createNativeStackNavigator()

const AppNavigation = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Welcome' component={Welcome} />
                <Stack.Screen name='RecipeDetail' component={RecipeDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation