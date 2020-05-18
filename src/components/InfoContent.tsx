import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

interface Props {
  gpsData: string;
}

export const InfoContent = ({gpsData}: Props) => {
  return (
    <View style={styles.content}>
      <Button mode="text" icon="info">
        More Info
      </Button>
      <Button style={styles.button} mode="outlined" icon="home">
        Directions
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: 'white',
  },
});
