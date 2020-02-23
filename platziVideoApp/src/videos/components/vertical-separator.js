import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function VerticalSeparator(props) {
  return (
    <View
      style={[
        styles.separator,
        {
          borderColor: props.color ? props.color : '#eaeaea',
        },
      ]}>
      <Text style={styles.text}> {'esto es un separador'} </Text>
    </View>
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
