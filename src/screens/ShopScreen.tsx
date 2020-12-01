import React, { FC } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const ShopScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Shop Screen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  }
});

export default ShopScreen;
