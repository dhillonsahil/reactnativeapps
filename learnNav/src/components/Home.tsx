import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = (props) => {
  // console.warn(props.route.params)
    return(
        <View style={styles.container}>
          <Text>Home Screen</Text>
        </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})