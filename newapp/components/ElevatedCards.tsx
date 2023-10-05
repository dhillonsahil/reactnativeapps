import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>ElevatedCards</Text>
        <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false} >
            <View style={[styles.card,styles.cardsElevated]}><Text>Tap Here</Text></View>
            <View style={[styles.card,styles.cardsElevated]}><Text>Tap Here</Text></View>
            <View style={[styles.card,styles.cardsElevated]}><Text>Tap Here</Text></View>
            <View style={[styles.card,styles.cardsElevated]}><Text>Tap Here</Text></View>
            <View style={[styles.card,styles.cardsElevated]}><Text>Tap Here</Text></View>
            <View style={[styles.card,styles.cardsElevated]}><Text>Tap Here</Text></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    headingText:{
        color:'black',
        fontSize:25,
        fontWeight:'bold',
        padding:8,
    },
    card:{
        width:100,
        height:100,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginHorizontal:4,
        backgroundColor:'pink'
    },
    cardsElevated:{
         elevation:4
    },container:{
        padding:8,
        marginHorizontal:5,
    },
});
