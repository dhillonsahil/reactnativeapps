import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.cards,styles.cardsElevated]}>
        <Image source={{
            uri: 'https://images.unsplash.com/photo-1517713982677-4b66332f98de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        }} style={styles.cardImage} />
        <View style={styles.cardBody}><Text style={styles.cardTitle}>Water Resort</Text>
        <Text style={styles.cardLabel}>Water Resort in dubai is a very great place to visit if you are visiting the dubai for the first time</Text>
        </View>
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
    cards:{
        backgroundColor:'white',
        borderRadius:10,
        marginHorizontal:10,
        marginVertical:8,
        height:300,
        paddingHorizontal:10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardsElevated:{

    },
    cardImage:{
        height:200,
    },cardBody:{

    },cardTitle:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:8,
    },cardLabel:{
        color:'black',
        fontSize:15,
        paddingHorizontal:8,
    }
})