import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const TagContent = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>No Time Window</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '50%',
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'grey',
  },
  text:{
    color:'grey'
  }
});
