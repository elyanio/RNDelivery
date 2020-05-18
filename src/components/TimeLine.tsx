import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  TimeOfDelivery: string;
}

export const TimeLine = ({TimeOfDelivery}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.tag}>
          <Text style={styles.text}>{TimeOfDelivery}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F1F1',
    height: '100%',
    marginRight: 20,
  },
  content: {
    width: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tag: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 35,
    borderRadius: 40,
    top: 20,
    position: 'absolute',
    backgroundColor: '#1D78CF',
  },
  text: {
    color: 'white',
  },
});
