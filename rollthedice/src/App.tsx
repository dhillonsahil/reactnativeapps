import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import type { PropsWithChildren } from 'react'
import React, { useState } from 'react'
import a from "./assets/a.jpeg"
import b from "./assets/b.jpeg"
import c from "./assets/c.jpeg"
import d from "./assets/d.jpeg"
import e from "./assets/e.jpeg"
import f from "./assets/f.jpeg"
import { trigger } from "react-native-haptic-feedback";

type DiceProps=PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>


const Dice = ({imageUrl}:DiceProps):JSX.Element=>{
  return (
    <View >
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  )
}

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


export default function App() {
  const [diceImg,setDiceImg]=useState<ImageSourcePropType>(a)

  const rollDiceOnTap=()=>{
    let randomNumber = Math.floor(Math.random()*6)+1
    switch(randomNumber){
      case 1:
        setDiceImg(a)
        break;
      case 2:
        setDiceImg(b)
        break;
      case 3:
        setDiceImg(c)
        break;
      case 4:
        setDiceImg(d)
        break;
      case 5:
        setDiceImg(e)
        break;
      case 6:
        setDiceImg(f)
        break;
      default:
        setDiceImg(a);
        break;
    }
    trigger("impactLight", options);

  }


  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImg} />
      <Pressable onPress={rollDiceOnTap}>
      <Text style={styles.rollDiceBtnText} >ROLE THE DICE</Text>
        
      </Pressable>
    </View>
  )
}



const styles = StyleSheet.create({
  container :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  diceContainer:{
    margin:12,
  },diceImage:{
    width: 200,
    height: 200,
  },
  rollDiceBtnText:{
    paddingVertical:10,
    paddingHorizontal:40,
    borderWidth:2,
    borderRadius:10,
    borderColor:'#E5E0FF',
    fontSize:16,
    fontWeight:'700',
    color:'#8EA7E9',
    textTransform:'uppercase',
    margin:10,
  },
  heading:{
    fontSize:24,
    fontWeight:'700',
    color:'#8EA7E9',
    textTransform:'uppercase',
    marginTop:20,
    textAlign:'center'
  }
})