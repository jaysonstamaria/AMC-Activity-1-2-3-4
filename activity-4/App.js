import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("I am Sta. Maria, Jayson S.");
  const bodyText = 'My role in our Sysarch 1 and 2 Ive gathered all the data for our project and my job is to make the documentation. Our journey building this system is very challenging for our team because all of us are working student so sometimes we have no time to meet after school, and a lot of problems we face but I am very happy that we pulled this off. We finish our system and we passed the subject even we face so much problem all of this are worht it.';

  

  const onPressTitle = () => {
    setTitleText("Sta.Maria, Jayson S. [pressed]");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={20}>{bodyText}</Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});

export default TextInANest;