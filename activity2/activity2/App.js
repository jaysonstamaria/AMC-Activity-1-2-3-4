import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const ViewBoxesWithColorAndText = () => {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={{height : 100, flexDirection: 'row'}}>
    <View style={{backgroundColor: 'blue', flex: 50, height:1000}} />
    <View style={{backgroundColor: 'red', flex: 50, height: 1000}} />
    <Text style={{flex: 50}}>Hello World!</Text>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ViewBoxesWithColorAndText;
