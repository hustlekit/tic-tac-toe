import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Game = () => {
  return (
    <View style={ styles.container }>
      <Text>Game</Text>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
} );

export default Game;
