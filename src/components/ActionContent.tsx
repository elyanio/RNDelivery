import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ActionContent = () => {
  return (
    <View style={styles.content}>
      <Button
        style={styles.primaryButton}
        icon={({size}) => <Icon name="check" size={size} color="white" />}>
        <Text style={styles.primaryText}>Arrive</Text>
      </Button>

      <Button
        style={styles.secondaryButton}
        icon={({size}) => <Icon name="close" size={size} color="tomato" />}>
        <Text style={styles.secondaryText}>Skip</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  primaryButton: {
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#1D78CF',
  },
  secondaryButton: {
    borderRadius: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'orangered',
    backgroundColor: 'white',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: 'orangered',
  },
});
