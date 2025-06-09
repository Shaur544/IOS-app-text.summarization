import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  TextInput,
  ScrollView, // <-- Import ScrollView
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GreScreen = ({ onBack, onSubjectSelect }) => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [testScore, setTestScore] = useState(null); // To hold the score of the last test

  useEffect(() => {
    // Set to the next GRE exam date
    const examDate = new Date('2025-06-01');
    const today = new Date();
    const diffTime = examDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);

    // Generate a random test score between 250 and 340 (GRE score range)
    const randomScore = Math.floor(Math.random() * (341 - 250) + 250);
    setTestScore(randomScore);
  }, []);

  const openURL = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search GRE topics..."
        placeholderTextColor="#ccc"
      />

      <Text style={styles.countdown}>{daysLeft} days left for GRE</Text>

      <TouchableOpacity style={styles.card} onPress={onSubjectSelect}>
        <Text style={styles.sectionHeader}>Subjects Overview</Text>
        <Text style={styles.sectionContent}>
          • Verbal Reasoning{'\n'}
          • Quantitative Reasoning{'\n'}
          • Analytical Writing{'\n'}
          • Practice subject-wise to maximize your score!
        </Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Mock Tests</Text>
        <Text style={styles.sectionContent}>Tap below to take mock tests:</Text>
        <TouchableOpacity onPress={() => openURL('https://www.magoosh.com/gre/')}>
          <Text style={styles.link}>Magoosh GRE Mock Tests</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openURL('https://www.kaptest.com/gre')}>
          <Text style={styles.link}>Kaplan GRE Mock Test</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openURL('https://testprep.princetonreview.com/gre')}>
          <Text style={styles.link}>Princeton Review GRE Mock Test</Text>
        </TouchableOpacity>
      </View>

      {/* New University Container */}
      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Top Universities Accepting GRE</Text>
        <Text style={styles.sectionContent}>
          • MIT – Avg: 328{'\n'}
          • Stanford University – Avg: 330{'\n'}
          • Harvard University – Avg: 327{'\n'}
          • University of California, Berkeley – Avg: 324{'\n'}
          • Columbia University – Avg: 326{'\n'}
          • University of Michigan – Avg: 320{'\n'}
          • Georgia Institute of Technology – Avg: 315
        </Text>
      </View>

      {/* Bottom Container with Test Score */}
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreHeader}>Your Last Test Score</Text>
        <View style={styles.scoreCard}>
          <Text style={styles.score}>{testScore} / 340</Text>
          <Text style={styles.percentage}>{((testScore / 340) * 100).toFixed(2)}%</Text>
        </View>
        <Text style={styles.scoreDetails}>
          Keep up the good work! Practice more to improve your score. Every mock test helps in getting better.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onBack}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default GreScreen;

// Styles remain unchanged
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    bottom:38,
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
    bottom:25,
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
