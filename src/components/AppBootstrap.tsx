import React, { ReactElement, ReactNode, useEffect } from 'react';
import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';

type Props = {
  children: ReactNode,
}

const AppBootstrap = ( { children }: Props ): undefined | ReactElement => {
  const [ fontsLoaded ] = useFonts(
    {
      Montserrat_400Regular,
      Montserrat_700Bold,
    },
  );
  
  useEffect( () => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, [] );
  
  if ( !fontsLoaded ) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }
  
  return (
    <>{ children }</>
  );
};

export default AppBootstrap;
