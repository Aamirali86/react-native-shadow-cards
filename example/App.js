import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Card} from 'react-native-shadow-cards';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card style={{padding: 10, margin: 10}}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </Card>
        <Card style={{padding: 10, margin: 10}}>
          <Button
            onPress={()=>{}}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </Card>
        <Card style={{padding: 10, margin: 10, height: 50}}>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
