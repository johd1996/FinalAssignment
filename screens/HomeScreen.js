import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class HomeScreen extends React.Component {
  render() {
    
    return (
      <View style={styles.container}>

        <View>
          <Text style={styles.firstText}>Start your Quiz!</Text>
        </View>
        <View>
          <Text style={{
            textAlign:"center",
            marginLeft:20,
            marginRight:20,
            marginBottom: 50,
            color:"white"
          }}>Hello! This quiz is if you can answer the questions about in general, sports, and history! I hope you enjoy.

          </Text>
      </View>
        <TouchableOpacity
          onPress={()=>{
              this.props.navigation.navigate("QuizScreen")
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>1.General</Text>
          
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{
              this.props.navigation.navigate("QuizScreen1")
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>2.  Sports</Text>
          
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{
              this.props.navigation.navigate("QuizScreen2")
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>3. History</Text>
          
        </TouchableOpacity>
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
  button: {
    backgroundColor: "#356E9A",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
  },
  firstText: {
    color: "#356E9A",
    fontSize: 45,
  },
 
});
