import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    const openwebsite=(websiteLink:string)=>{
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text onPress={()=>openwebsite('https://www.instagram.com/isahildhillon')} style={styles.text}>
        Learn More
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    }
})