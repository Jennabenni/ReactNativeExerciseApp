import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet  } from 'react-native';
import { Button } from 'react-native-elements';










export default function DurationExercise({ route, navigation }) {
  const { exercise, exercises } = route.params; // Accessing passed params
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000); // Increment timer every second
    } else if (!isTimerRunning && timer !== 0) {
      clearInterval(interval); // Clear the interval when the timer is stopped
    }

    return () => clearInterval(interval); // Clean up the interval on unmount or when timer state changes
  }, [isTimerRunning, timer]);

  const toggleTimer = () => {
    if (isTimerRunning) {
      // Stop the timer
      setIsTimerRunning(false);
    } else {
      // Start the timer
      setIsTimerRunning(true);
    }
  };

  const resetTimer = () => {
    setTimer(0);
    setIsTimerRunning(false);
  };

  return (
    <View>
      <Text style={styles.textStyle}>{exercise.title}</Text>
      <Text style={styles.textStyle}>Time: {timer}s</Text>

      {/* Start/Stop Timer Button */}
      <Button
        title={isTimerRunning ? 'Stop Timer' : 'Start Timer'}
        onPress={toggleTimer}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonText}
      />

      {/* Reset Timer Button */}
      <Button title="Reset" onPress={resetTimer}
       buttonStyle={styles.buttonStyle}
       titleStyle={styles.buttonText} />

      {/* Suggested Exercise Button */}
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

      {/* Home Button */}
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