import React, { ReactElement } from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import Text from './Text';

type Props = {
  title: string,
} & TouchableOpacityProps;

const Button = ( { title, style, ...props }: Props ): ReactElement => {
  return (
    <View>
      <TouchableOpacity { ...props } style={ [ styles.button, style ] }>
        <Text style={ styles.text } weight={ '700' }>{ title }</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create( {
  button: {
    backgroundColor: '#dafaf7',
    paddingVertical: 20,
    paddingHorizontal: 35,
    borderRadius: 30,
  },
  text: {
    fontSize: 18,
    color: '#221a36',
    textAlign: 'center',
  },
} );

export default Button;
