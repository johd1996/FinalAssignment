import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";
import QuizScreen1 from "./screens/QuizScreen1";
import QuizScreen2 from "./screens/QuizScreen2";
import ResultScreen from "./screens/ResultScreen";

const Stack = createStackNavigator();

export default function main() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="QuizScreen1" component={QuizScreen1} />
        <Stack.Screen name="QuizScreen2" component={QuizScreen2} />
        <Stack.Screen
        options={{
          title: "Score"
        }}
        name="ResultScreen" component={ResultScreen} />       

      </Stack.Navigator>
    </NavigationContainer>

    
  );

}