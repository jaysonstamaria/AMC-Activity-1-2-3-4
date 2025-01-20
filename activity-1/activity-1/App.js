import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Some text</Text>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://tse1.mm.bing.net/th?id=OIP.XTUERo6Cq_1XK2oldeKStwHaDn&rs=1&pid=ImgDetMain',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Enter your alias"
      />
    </ScrollView>
  );
};

export default App;.0