import React, { ReactElement } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from './Text';

type Cell = 'x' | 'o' | null
type Props = {
  state: [ Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell ];
  onCellPressed?: (index: number) => void;
};

const Board = ( { state, onCellPressed }: Props ): ReactElement => {
  return (
    <View
      style={ styles.container }>
      { state.map( ( cell, index ) => {
        return (
          <TouchableOpacity
            onPress={ () => onCellPressed && onCellPressed(index) }
            style={ styles.touchableContainer } key={ index }>
            <Text style={ styles.cellText } weight={ '400' }>
              { cell }
            </Text>
          </TouchableOpacity>
        );
      } ) }
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    width: 300,
    height: 300,
    backgroundColor: 'green',
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  touchableContainer: {
    width: '33.33333%',
    height: '33.33333%',
    backgroundColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 36
  }
} );

export default Board;
