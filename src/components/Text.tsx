import React, { ReactElement, ReactNode } from 'react';
import { Text as NativeText, TextProps } from 'react-native';

type Props = {
  weight: '400' | '700',
  children: ReactNode,
} & TextProps;

const defaultProps = {
  weight: '700',
};

const Text = ( { children, style, weight, ...props }: Props ): ReactElement => {
  
  let fontFamily;
  if ( weight === '400' ) {
    fontFamily = 'Montserrat_400Regular';
  } else if ( weight === '700' ) {
    fontFamily = 'Montserrat_700Bold';
  }
  
  return (
    <NativeText style={ [ { fontFamily }, style ] } { ...props } >
      { children }
    </NativeText>
  );
};

Text.defaultProps = defaultProps;

export default Text;
