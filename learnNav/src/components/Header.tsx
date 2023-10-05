import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        width:'90%',
        marginRight:20
      }}>
        
      <Button title='Left' />
      <Button title='Right' />
      </View>
  )
}

export default Header

const styles = StyleSheet.create({})