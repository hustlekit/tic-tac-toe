import React, { ReactElement, ReactNode } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  children: ReactNode,
};

const GradientBackground = ( { children }: Props ): ReactElement => {
  return (
    <View style={ styles.container }>
      <StatusBar barStyle={ 'light-content' } />
      <LinearGradient style={ styles.linearGradient } colors={ [ '#120318', '#221a36' ] }/>
      { children }
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
} );

export default GradientBackground;
