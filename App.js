
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import Home from './home.js';
import RepetitionExercise from './repetitionExercise.js';
import DurationExercise from './durationExercise.js';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    padding: 20,
  backgroundColor: "#a8caff",
  flex: 1,
  },


  });

export default function App() {
  return (
<View style={styles.container}>
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleStyle:{
          fontSize: 25,
          },
          headerTitleAlign: 'center',


/*Each of these contain the separate screens, even though it seems like
they would be in their own components.  So the css needs to be here to control all the headings */


        }}/>



        <Stack.Screen name="RepetitionExercise" component={RepetitionExercise}
          options={{
            title: 'Repetition Exercise',
          headerTitleStyle:{
          fontSize: 25,
          },
          headerTitleAlign: 'center',
        }}
        />




        <Stack.Screen name="DurationExercise" component={DurationExercise}
          options={{
            title: 'Duration Exercise',
          headerTitleStyle:{
          fontSize: 25,

          },
          headerTitleAlign: 'center',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
};


