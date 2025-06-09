import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const GenerateStudyGuideScreen = ({ onBack }) => {
  const [studyHours, setStudyHours] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [subjectInput, setSubjectInput] = useState('');
  const [days, setDays] = useState([]);
  const [showGuide, setShowGuide] = useState(false);

  const handleGenerateGuide = () => {
    const subjectsRaw = subjectInput
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean);

    let studyPlan = [];

    subjectsRaw.forEach(entry => {
      const [subject, topicsRaw] = entry.split(':');
      if (subject && topicsRaw) {
        const topics = topicsRaw.split(',').map(t => t.trim());
        topics.forEach(topic => {
          studyPlan.push({ subject: subject.trim(), topic });
        });
      }
    });

    const dailyHours = parseFloat(studyHours);
    const generatedDays = studyPlan.map((item, index) => ({
      day: `Day ${index + 1}`,
      study: `${dailyHours} hours of ${item.subject} - Topic: ${item.topic} at ${preferredTime}`,
    }));

    setDays(generatedDays);
    setShowGuide(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Generate Study Guide</Text>

      <TextInput
        style={styles.input}
        placeholder="Total Study Hours per Day"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={studyHours}
        onChangeText={setStudyHours}
      />
      <TextInput
        style={styles.input}
        placeholder="Preferred Study Time (e.g. 6-8 PM)"
        placeholderTextColor="#888"
        value={preferredTime}
        onChangeText={setPreferredTime}
      />
      <TextInput
        style={[styles.input, { height: 120 }]}
        placeholder="Subjects and Topics (e.g. Math: Algebra, Calculus)"
        placeholderTextColor="#888"
        value={subjectInput}
        onChangeText={setSubjectInput}
        multiline
      />

      <TouchableOpacity style={styles.generateButton} onPress={handleGenerateGuide}>
        <Text style={styles.buttonText}>Generate Guide</Text>
      </TouchableOpacity>

      {showGuide && (
        <View style={styles.guideContainer}>
          {days.map((item, index) => (
            <View key={index} style={styles.dayCard}>
              <Text style={styles.dayText}>{item.day}</Text>
              <Text style={styles.studyText}>{item.study}</Text>
            </View>
          ))}
        </View>
      )}

      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default GenerateStudyGuideScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#12132C',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
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
    textAlignVertical: 'top',
  },
  generateButton: {
    backgroundColor: '#FFC107',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#FFC107',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#12132C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  guideContainer: {
    width: '100%',
  },
  dayCard: {
    backgroundColor: '#1E1F3A',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  dayText: {
    color: '#FFC107',
    fontSize: 16,
    fontWeight: 'bold',
  },
  studyText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
  },
});
