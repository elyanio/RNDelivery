import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActionContent } from './ActionContent';
import { InfoContent } from './InfoContent';
import { Section } from './Section';
import { TagContent } from './TagContent';
import { TimeLine } from './TimeLine';
import { Subheading } from 'react-native-paper';
import moment from 'moment';

interface Props {
  Name: string;
  DeliveryAddress: string;
  TimeOfDelivery: string;
  gpsData: string;
}

export const DeliveryItem = ({ Name, DeliveryAddress, TimeOfDelivery, gpsData, }: Props) => {

  const time = TimeOfDelivery.substr(0, 4);
  const fixedTime = moment(time, 'HHmm').format('HH:mm');

  return (
    <View style={styles.content}>   
      <TimeLine TimeOfDelivery={fixedTime} />
      <View style={{ padding: 20 }}>
        <Section title={Name} />
        <Subheading style={styles.DeliveryAddress}>{DeliveryAddress}</Subheading>        
        <Section>
          <TagContent />
        </Section>       
          <Section>
            <InfoContent gpsData={gpsData} />
          </Section>
          <Section>
            <ActionContent />
          </Section>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#DEDEDE',
    borderRadius: 10,
    margin: 10,
    paddingLeft: 30,
  },
  DeliveryAddress: {
    color: 'grey',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
