import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


function App(): JSX.Element {

  const [bgColor,setbgColor]=useState('#ffffff')

  const generateColor=()=>{
    const hexRange="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
      color+=hexRange[Math.floor(Math.random()*16)]
    }
    setbgColor(color)
  }

  return (
    <>
    <StatusBar backgroundColor={'#000000'} />
    <View style={[styles.container,{backgroundColor:bgColor}]}>
      <TouchableOpacity onPress={()=>{
        generateColor()
      }}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}>Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },
  actionBtn:{
    width:200,
    height:50,
    backgroundColor:'#6A1B4D',
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    marginTop:100,
  },actionBtnTxt:{
    fontWeight:'800',
    color:'#ffffff',
    fontSize:20,
  }
})

export default App;
