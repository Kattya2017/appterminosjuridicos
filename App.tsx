/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react'
import { Text, View } from 'react-native'
import { InicioTerminosScreen } from './scr/screens/InicioTerminosScreen'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <InicioTerminosScreen/>
    </NavigationContainer>
  )
}

export default App