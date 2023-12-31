import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SinglePlayerGame, Home } from '@screens';

export type StackNavigatorParams = {
  Home: undefined,
  SinglePlayerGame: undefined,
};

const Stack = createStackNavigator<StackNavigatorParams>();

const Navigator = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={ {
          headerShown: false,
        } }>
        <Stack.Screen name="Home" component={ Home }/>
        <Stack.Screen name="SinglePlayerGame" component={ SinglePlayerGame }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
