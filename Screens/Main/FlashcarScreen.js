import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

const FlashcarScreen = ({ onBack }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [flashcards, setFlashcards] = useState([
    {
      question: 'What is the time complexity of binary search?',
      answer: 'O(log n)',
    },
    {
      question: 'What is encapsulation in OOPS?',
      answer:
        'Encapsulation is the bundling of data with the methods that operate on that data.',
    },
  ]);

  const handleAddCard = () => {
    if (question.trim() && answer.trim()) {
      setFlashcards([...flashcards, { question, answer }]);
      setQuestion('');
      setAnswer('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make Your Own Flashcards</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Question"
        placeholderTextColor="#888"
        value={question}
        onChangeText={setQuestion}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Answer"
        placeholderTextColor="#888"
        value={answer}
        onChangeText={setAnswer}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddCard}>
        <Text style={styles.buttonText}>Add Flashcard</Text>
      </TouchableOpacity>

      <FlatList
        data={flashcards}
        keyExtractor={(item, index) => index.toString()}
        style={{ width: '90%', marginTop: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardQuestion}>{item.question}</Text>
            <Text style={styles.cardAnswer}>{item.answer}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlashcarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12132C',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    backgroundColor: '#1E1F3A',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#FFC107',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  backButton: {
    backgroundColor: '#FFC107',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 30,
    alignItems: 'center',
    bottom: 35,
  },
  buttonText: {
    color: '#12132C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#1E1F3A',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardQuestion: {
    color: '#FFC107',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardAnswer: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
  },
});
