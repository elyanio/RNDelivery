import moment from 'moment';
import React from 'react';
import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import data from './src//utils/data.json';
import { DeliveryHeader } from './src/components/DeliveryHeader';
import { DeliveryItem } from './src/components/DeliveryItem';

const App = () => {
  const currentDate = moment().format('MMMM Do YYYY')
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <DeliveryHeader stopCount={data.length} date={currentDate}/>
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.DeliveryId}
            renderItem={({ item, index }) => {
              return <DeliveryItem {...item} />;
            }}
          />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
