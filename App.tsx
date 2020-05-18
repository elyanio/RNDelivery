import React from 'react';
import {FlatList, SafeAreaView, StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {DeliveryItem} from './src/components/DeliveryItem';
import dataMock from './src/dataMock';

const App = () => {
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList
          data={dataMock}
          keyExtractor={(item, index) => item.DeliveryId}
          renderItem={({item, index}) => {
            return <DeliveryItem {...item} />;
          }}
        />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
