import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { InicioTerminosScreen } from '../screens/InicioTerminosScreen';
import { PresentacionScreen } from '../screens/PresentacionScreen';
import { TerminoJuridicosScreen } from '../screens/TerminosJuridicos';


export type RootStackParams = {
    InicioTerminosScreen: undefined,
    PresentacionScreen: undefined,
    TerminoJuridicosScreen: undefined,
}


const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: true,
        freezeOnBlur: false,
    }}
    initialRouteName='InicioTerminosScreen'
    >

        <Stack.Screen
        name='InicioTerminosScreen' options={{
          headerShown: false,
          headerStyle: {
            height: 55
          },
        headerTitle: '',
        headerTitleStyle: {
          color: 'white',
          fontSize: 20,
          fontWeight: '700'
        }
        }} component={InicioTerminosScreen}
        />

<Stack.Screen name='PresentacionScreen' options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#680F10',
          height: 55
        },
        headerTitle: 'Terminos Jurídicos CSJU',
        headerTitleStyle: {
          color: 'white',
          fontSize: 20,
          fontWeight: '600'
        }
      }} component={PresentacionScreen}/>

<Stack.Screen name='TerminosJuridicosScreen' options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#680F10',
          height: 55
        },
        headerTitle: 'Terminos Jurídicos CSJU',
        headerTitleStyle: {
          color: 'white',
          fontSize: 20,
          fontWeight: '600'
        }
      }} component={TerminoJuridicosScreen}/>
        
    </Stack.Navigator>


  )
}

export default StackNavigator