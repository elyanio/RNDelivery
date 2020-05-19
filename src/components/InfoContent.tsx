import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  gpsData: string;
}

export const InfoContent = ({ gpsData }: Props) => {
  return (
    <View style={styles.content}>
      <Button mode="text" icon={({size}) => <Icon name="info-outline" size={size} color="blue" />} >
        More Info
      </Button>
      <Button style={styles.button} mode="outlined" icon="account-alert">
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
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    backgroundColor: 'white',
    color: 'red',
    width:"48%"
  },
});
