import {  Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './components/Home'
import Login from './components/Login'
// const Stack = createNativeStackNavigator()
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen  name='Login' component={Login} options={{
//           title:"Account Login"
//         }}
//         />
//         <Stack.Screen name='Home' component={Home} />
        
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }



const Tabs = createBottomTabNavigator()
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
const App =()=>{
  return(
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen  component={Login} name='Login' />
        <Tabs.Screen  component={Home} name='Home' />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}


export default App

// const styles = StyleSheet.create({})
