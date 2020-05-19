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
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingRight:20
  },
  primaryButton: {
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    backgroundColor:'rgb(50, 150, 300)',
    height:50
  },
  secondaryButton: {
    borderRadius: 50,
    padding: 5,
    borderWidth: 1.5,
    borderColor: 'orangered',
    backgroundColor: 'white',
    height:50
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: 'orangered',
    fontWeight:'bold',
    marginLeft:500,
  },
});
