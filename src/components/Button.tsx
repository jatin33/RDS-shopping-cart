import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  style?: Object;
  buttonTextStyle?: Object;
  title: string;
};

function Button({onPress, style = {}, buttonTextStyle = {}, title}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.appButtonContainer, ...style}}>
      <Text style={{...styles.appButtonText, ...buttonTextStyle}}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#009688',
    paddingHorizontal: 2,
  },
  appButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Button;
