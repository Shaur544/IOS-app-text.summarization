import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GmatScreen = ({ onBack, onSubjectSelect }) => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [testScore, setTestScore] = useState(null); // To hold the score of the last test

  useEffect(() => {
    // Set to the next GMAT exam date
    const examDate = new Date('2025-06-15');
    const today = new Date();
    const diffTime = examDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);

    // Generate a random test score between 200 and 800 (GMAT score range)
    const randomScore = Math.floor(Math.random() * (801 - 200) + 200);
    setTestScore(randomScore);
  }, []);

  const openURL = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search GMAT topics..."
        placeholderTextColor="#ccc"
      />

      <Text style={styles.countdown}>{daysLeft} days left for GMAT</Text>

      <TouchableOpacity style={styles.card} onPress={onSubjectSelect}>
        <Text style={styles.sectionHeader}>Subjects Overview</Text>
        <Text style={styles.sectionContent}>
          • Integrated Reasoning{'\n'}
          • Quantitative Reasoning{'\n'}
          • Verbal Reasoning{'\n'}
          • Analytical Writing{'\n'}
          • Practice subject-wise to maximize your score!
        </Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Mock Tests</Text>
        <Text style={styles.sectionContent}>Tap below to take mock tests:</Text>
        <TouchableOpacity onPress={() => openURL('https://www.magoosh.com/gmat/')}>
          <Text style={styles.link}>Magoosh GMAT Mock Tests</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openURL('https://www.kaptest.com/gmat')}>
          <Text style={styles.link}>Kaplan GMAT Mock Test</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openURL('https://www.princetonreview.com/gmat')}>
          <Text style={styles.link}>Princeton Review GMAT Mock Test</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Container with Test Score */}
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreHeader}>Your Last Test Score</Text>
        <View style={styles.scoreCard}>
          <Text style={styles.score}>{testScore} / 800</Text>
          <Text style={styles.percentage}>{((testScore / 800) * 100).toFixed(2)}%</Text>
        </View>
        <Text style={styles.scoreDetails}>
          Keep up the good work! Practice more to improve your score. Every mock test helps in getting better.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onBack}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GmatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12132C',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 80,
  },
  searchBox: {
    height: 45,
    width: '100%',
    backgroundColor: '#1E1E3F',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: 'white',
    fontSize: 16,
  },
  countdown: {
    fontSize: 18,
    color: '#EC5228',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1E1E3F',
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  sectionHeader: {
    fontSize: 20,
    color: '#FFD95F',
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  sectionContent: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
  },
  link: {
    fontSize: 16,
    color: '#00BFFF',
    textAlign: 'center',
    marginVertical: 6,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#FF6F61',
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    bottom:54,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scoreContainer: {
    backgroundColor: '#1E1E3F',
    borderRadius: 12,
    padding: 20,
    marginTop: 30,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    alignItems: 'center',
    bottom:35,
  },
  scoreHeader: {
    fontSize: 20,
    color: '#FFD95F',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  scoreCard: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 20,
    marginBottom: 12,
  },
  score: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
  },
  percentage: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 6,
  },
  scoreDetails: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginTop: 12,
  },
});
