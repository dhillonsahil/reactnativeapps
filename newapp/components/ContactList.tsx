import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts=[
        {
            uid:1,
            name:"Sahil Dhillon",
            status :"Web And App Developer",
            imageUrl:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
        },{
            uid:2,
            name:"Dhillon Saab",
            status :"Singer And Writer",
            imageUrl:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
        },
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false} >
        {
            contacts.map((contact,index)=>{
                return(
                    <View key={index} style={styles.card}>
                        <Text style={styles.name}>{contact.name}</Text>
                        <Text style={styles.status}>{contact.status}</Text>
                        <Image style={styles.image} source={{uri:contact.imageUrl}}/>
                    </View>
                )
            })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        color:'black',
        fontSize:25,
        fontWeight:'bold',
        paddingHorizontal:8,
    },container:{
        // display:'flex',
        flex:1,
        flexDirection:'row'
    },
    name:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:8,
    },status:{
        color:'black',
        fontSize:15,
        fontWeight:'bold',
        paddingHorizontal:8,
    },card:{
        height:200,
        marginHorizontal:8,
        backgroundColor:'white',
        borderRadius:10,
        padding:10,
        margin:10,
        justifyContent:'center',
        alignItems:'center'
    },image:{
        width:100,
        height:100,
        borderRadius:50,
        marginVertical:10
    }
})