import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigatorParams } from '@config/Navigator';

type Props = {
  navigation: StackNavigationProp<StackNavigatorParams, 'Home'>,
};

const Home = ( { navigation }: Props ) => {
  return (
    <View style={ styles.container }>
      <Text>Home</Text>
      <Button
        title={ 'Game' }
        onPress={ () => navigation.navigate( 'Game', { gameId: 'gameId' } ) }/>
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

export default Home;
