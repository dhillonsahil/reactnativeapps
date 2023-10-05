import React from 'react'
import { 
    StyleSheet, Text, View ,ScrollView
} from 'react-native'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.cardRed,styles.card]}><Text style={{color:'white'}} >Red</Text></View>
        <View style={[styles.cardYellow,styles.card]}><Text style={{color:'black'}} >Yellow</Text></View>
        <View style={[styles.cardGreen,styles.card]}><Text style={{color:'white'}} >Green</Text></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        color:'black',
        fontSize:25,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card:{
        width:100,
        height:100,
        borderRadius:10,
        marginHorizontal:8,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },cardRed:{
        backgroundColor:'red',
    },container:{
        // display:'flex',
        flex:1,
        flexDirection:'row'
    },
    cardYellow:{
        backgroundColor:'yellow',
    },
    cardGreen:{
        backgroundColor:'green',
    }
})