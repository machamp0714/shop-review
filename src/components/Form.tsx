import React, { FC } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

type Props = {
  onChangeText: (text: string) => void;
  value: string;
  label: string;
};

const Form: FC<Props> = ({ onChangeText, value, label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  input: {
    height: 40,
    borderColor: '#999',
    borderBottomWidth: 1,
  },
  label: {
    color: '#999',
    fontWeight: 'bold'
  }
});

export default Form;
