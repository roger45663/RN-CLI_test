/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import CalendarModule from './modules/CalendarModule';

function NewModuleButton(): React.JSX.Element {
  const { DEFAULT_EVENT_NAME } = CalendarModule.getConstants();

  const onPress = () => {
    CalendarModule.createCalendarEvent(
      'Roger',
      'from Hyena',
      (error, eventId) => {
      if (error) {
        console.error(`Error found: ${error}`);
      }
      console.log(`Created a new event with id ${eventId}`);
    });
  };

  return (
    <>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
    </>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text style={[{color: 'green'}, styles.highlight, styles.sectionTitle]}>
        我是誰
      </Text>
      <View style={{width: 100, height: 300, backgroundColor: 'red'}}>
        <NewModuleButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
