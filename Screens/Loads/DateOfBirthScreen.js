// DateOfBirthScreen.js
import React, { useState, useCallback } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateOfBirthScreen = ({ onSubmit }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([]);

  // Updated study-oriented interests
  const interests = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'
  ];

  const onChange = useCallback((event, selectedDate) => {
    if (event.type === 'set' && selectedDate) {
      setDate(selectedDate);
    }
    setShowPicker(Platform.OS === 'ios');
  }, []);

  const toggleInterest = (item) => {
    if (selectedInterests.includes(item)) {
      setSelectedInterests(selectedInterests.filter(i => i !== item));
    } else {
      setSelectedInterests([...selectedInterests, item]);
    }
  };

  const handleSubmit = useCallback(() => {
    console.log('Date of Birth:', date);
    console.log('Explanation:', explanation);
    console.log('Selected Interests:', selectedInterests);
    if (onSubmit) {
      onSubmit({ date, explanation, selectedInterests });
    }
  }, [date, explanation, selectedInterests, onSubmit]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Select Your Date of Birth</Text>
        <TouchableOpacity style={styles.dateButton} onPress={() => setShowPicker(true)}>
          <Text style={styles.dateText}>{date.toDateString()}</Text>
        </TouchableOpacity>
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={onChange}
            maximumDate={new Date()}
          />
        )}
        {/* New Question */}
        <Text style={styles.questionText}>What defines you?</Text>
        <View style={styles.bubblesContainer}>
          {interests.map(item => (
            <TouchableOpacity
              key={item}
              style={[
                styles.bubble,
                selectedInterests.includes(item) && styles.bubbleSelected
              ]}
              onPress={() => toggleInterest(item)}
            >
              <Text
                style={[
                  styles.bubbleText,
                  selectedInterests.includes(item) && styles.bubbleTextSelected
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Date of Birth</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 3,
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    position: 'absolute',
    top: 50,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 30,
    textAlign: 'center',
  },
  dateButton: {
    position: 'absolute',
    top: 110,
    backgroundColor: '#fff',
    borderColor: '#bdc3c7',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    ...shadowStyle,
  },
  dateText: {
    fontSize: 18,
    color: '#2c3e50',
  },
  questionText: {
    position: 'absolute',
    top: 200,
    fontSize: 20,
    color: '#2c3e50',
    textAlign: 'center',
    width: '100%',
  },
 
  bubblesContainer: {
    position: 'absolute',
    top: 240,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  bubble: {
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    margin: 5,
  },
  bubbleSelected: {
    backgroundColor: '#2980b9',
    borderColor: '#2980b9',
  },
  bubbleText: {
    fontSize: 14,
    color: '#2c3e50',
  },
  bubbleTextSelected: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#2980b9',
    position: 'absolute',
    bottom: 50,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
    ...shadowStyle,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DateOfBirthScreen;
