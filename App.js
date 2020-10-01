import React from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import Button from './components/Button';

const App = () => {
  const handlePress = () => {
    ToastAndroid.show('Button was pressed', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <Button transparent title="Transparent Button" onPress={handlePress} />
      <Button title="Primary Button" onPress={handlePress} />
      <Button title="Primary Button" isLoading={true} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 90,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 30,
    marginTop: 30,
    color: '#74B3CE',
  },
});

export default App;
