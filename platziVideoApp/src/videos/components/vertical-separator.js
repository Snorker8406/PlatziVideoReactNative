import React from 'react';
import {View, StyleSheet} from 'react-native';

function VerticalSeparator(props) {
  return (
    <View
      style={[
        styles.separator,
        { borderColor: props.color ? props.color : '#eaeaea'},
      ]} />
  );
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
  text: {
    fontSize: 16,
  },
});

export default VerticalSeparator;
