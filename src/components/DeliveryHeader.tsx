import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  stopCount: number;
  date: string;
}

export const DeliveryHeader = ({stopCount, date}: Props) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.stops}>
        <Icon name="location-on" color={theme.colors.primary} size={23} />
        <Text style={styles.text}>{`${stopCount} Stops`}</Text>
      </View>
      <Text style={styles.text}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  stops: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    margin: 5,
  },
});
