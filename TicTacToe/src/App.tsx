import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>Tic Tac Toe</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})