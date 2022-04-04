import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import HomePage from './src/HomePage'
import store from './src/store/store'
import RandomUserGenerator from './src/RandomUserGenerator'
import MyList from './src/MyList'

const App = () => {

  return (
    <Provider store={store}>
      <RandomUserGenerator />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})