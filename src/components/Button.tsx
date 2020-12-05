import React, { FC } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent
} from 'react-native';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
};

const Button: FC<Props> = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: 40,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color: '#fff'
  }
});

export default Button;
