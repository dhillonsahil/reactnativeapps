import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf'

const PdfViewer = (props) => {
  return (
    <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Pdf renderActivityIndicator={()=><ActivityIndicator color='black' size="large" />} scale={2.0} minScale={0.5} horizontal source={{uri:"file:///sdcard/"+props.filePath}} style={{ flex:1,width:Dimensions.get('window').width , backgroundColor:'red' }} />
    </View>
  )
}

export default PdfViewer

const styles = StyleSheet.create({})