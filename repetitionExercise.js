
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet  } from 'react-native';
import { Button } from 'react-native-elements';







export default function RepetitionExercise({ route, navigation }) {
  const { exercise, exercises } = route.params; // Accessing passed params
  const [count, setCount] = useState(0);

  const resetCount = () => setCount(0);
  const increaseCount = () => setCount(count + 1);

  return (
    <View>
      <Text style={styles.textStyle}>{exercise.title}
      </Text>
      <Text style={styles.textStyle}>Count: {count}</Text>


      <Button title="Increase" onPress={increaseCount}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonText}
      />
      <Button title="Reset" onPress={resetCount}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonText}
      />

      <Button
        title={`Suggested: ${exercise.suggestedExercise}`}
        onPress={() => {
          const suggestedExercise = exercises.find((item) => item.title === exercise.suggestedExercise);
          navigation.navigate(suggestedExercise.type === 'Repetition' ? 'RepetitionExercise' : 'DurationExercise', {
            exercise: suggestedExercise,
            exercises: exercises,
          });
        }}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonText}
      />

      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonText}
      />
    </View>
  );
}

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
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  }
  })
