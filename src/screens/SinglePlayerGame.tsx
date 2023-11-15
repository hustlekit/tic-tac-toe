import React, { ReactElement } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Board, GradientBackground } from '@components';

const SinglePlayerGame = (): ReactElement => {
  return (
    <GradientBackground>
      <SafeAreaView style={ styles.container }>
        <Board
          onCellPressed={ (index) => {
            alert(index)
          } }
          state={ [ 'x', 'o', null, 'x', 'o', null, 'x', 'o', null ] }/>
      </SafeAreaView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
} );

export default SinglePlayerGame;
