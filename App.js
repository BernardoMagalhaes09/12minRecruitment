import React from 'react'
import {StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ListSounds from './src/screens/ListSounds'
import SoundPlayer from './src/screens/SoundPlayer'
import 'react-native-gesture-handler'




const Stack = createStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator screenOptions = {{headerShown: false}} initialRouteName="ListSounds">
          <Stack.Screen name="SoundPlayer" component={SoundPlayer} />
          <Stack.Screen name="ListSounds" component={ListSounds} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}