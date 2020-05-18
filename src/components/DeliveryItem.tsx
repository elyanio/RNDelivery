import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActionContent} from './ActionContent';
import {InfoContent} from './InfoContent';
import {Section} from './Section';
import {TagContent} from './TagContent';
import {TimeLine} from './TimeLine';

interface Props {
  Name: string;
  DeliveryAddress: string;
  TimeOfDelivery: string;
  gpsData: string;
}

export const DeliveryItem = ({
  Name,
  DeliveryAddress,
  TimeOfDelivery,
  gpsData,
}: Props) => {
  return (
    <View style={styles.content}>
      {/* pass timeOfDelivery like props to
                   TimeLine, you should to do some date operations
                   before a think 
                */}
      <TimeLine TimeOfDelivery={'07:40'} />
      <View style={{padding: 20}}>
        <Section title={Name} subTitle={DeliveryAddress} />
        <Section>
          <TagContent />
        </Section>
        {/* pass gpsData like props to InfoContent, 
                        maybe you want to show a map with these points 
                    */}
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
});
