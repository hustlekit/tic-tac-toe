import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigatorParams } from '@config/Navigator';
import { Button, GradientBackground } from '@components';

type Props = {
  navigation: StackNavigationProp<StackNavigatorParams, 'Home'>,
};

const Home = ( { navigation }: Props ) => {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={ styles.container }>
        <Image source={ require( '@assets/logo.png' ) } style={ styles.logo }/>
        <View style={ styles.buttons }>
          <Button
            onPress={ () => {
              navigation.navigate( 'SinglePlayerGame' );
            } }
            style={ { marginBottom: 20 } }
            title={ 'Single Player' }/>
          <Button
            style={ { marginBottom: 20 } }
            title={ 'Multi Player' }/>
          <Button
            style={ { marginBottom: 20 } }
            title={ 'Login' }/>
          <Button
            style={ { marginBottom: 20 } }
            title={ 'Settings' }/>
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create( {
  container: {
    alignItems: 'center',
    paddingTop: 120,
  },
  logo: {
    height: 150,
    maxWidth: '60%',
  },
  buttons: {
    marginTop: 80,
  },
} );

export default Home;
