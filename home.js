// src/screens/Home.js
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';




const styles = StyleSheet.create({
  buttonStyle: {
    padding: 15,
    width: 250,
    borderRadius: '25px',
    border: '4px solid white',
    backgroundColor: '#3f4196',
    color: '#3f4196',
    flex: 1,
    margin: 'auto',
    textAlign: 'center',


  },

  buttonText: {
  fontSize: 20,
  }


  });


export default function Home({ navigation }) {
  // Sample exercise data
  const exercises = [
    { id: '1', type: 'Repetition', title: 'Push-ups', suggestedExercise: 'Squats' },
    { id: '2', type: 'Repetition', title: 'Squats', suggestedExercise: 'Push-ups' },
    { id: '3', type: 'Duration', title: 'Running', suggestedExercise: 'Jumping Jacks' },
    { id: '4', type: 'Duration', title: 'Jumping Jacks', suggestedExercise: 'Running' }
  ];

  const renderItem = ({ item }) => (
    <Button
      title={item.title}
      onPress={() =>
        navigation.navigate(item.type === 'Repetition' ? 'RepetitionExercise' : 'DurationExercise', {
          exercise: item,
          exercises: exercises,
        })
      }
      buttonStyle={styles.buttonStyle}
      titleStyle={styles.buttonText}



     />
  );

  return (
    <View>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}

      />
    </View>
  );
}
