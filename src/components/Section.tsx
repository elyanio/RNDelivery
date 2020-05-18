import React from 'react';
import {Text, View} from 'react-native';
import {Title} from 'react-native-paper';

interface Props {
  title?: string;
  subTitle?: string;
  children?: JSX.Element;
}

export const Section = ({title, subTitle, children}: Props) => {
  return (
    <View>
      {title && <Title>{title}</Title>}
      {subTitle && <Text>{subTitle}</Text>}
      {children}
    </View>
  );
};
