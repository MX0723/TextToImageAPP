import React from 'react'
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native'
import {HomeScreen} from './src/HomeScreen'

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      <HomeScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {width: '100%', height: '100%'},
})

export default App
