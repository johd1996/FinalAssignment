import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ResultScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text
        style={{
          fontSize: 50,
          color: "white"
        }}
        >{this.props.route.params.score} / 10</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00353E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
