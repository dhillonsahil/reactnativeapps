import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = (props) => {
  const name="anil";
  const age=21;
  return (
    <View style={styles.container}>
        <Text>Login Screen</Text>
        <Button title='Home Page' onPress={()=>
            props.navigation.navigate('Home',{name:"Sahil",age:21})
          } />
      </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})