import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  TextInput,
} from 'react-native';

const JeeMainsScreen = ({ onBack, onSubjectSelect }) => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [testScore, setTestScore] = useState(null); // Added state for test score

  useEffect(() => {
    const examDate = new Date('2026-02-01');
    const today = new Date();
    const diffTime = examDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);

    // Set test score to 79% of the maximum score (360)
    const fixedScore = Math.floor(360 * 0.79); // 79% of 360
    setTestScore(fixedScore);
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
        placeholder="Search GATE topics..."
        placeholderTextColor="#ccc"
      />

      <Text style={styles.countdown}>{daysLeft} days left for GATE 2026</Text>

      {/* ✅ Wrapped in TouchableOpacity for navigation */}
      <TouchableOpacity style={styles.card} onPress={onSubjectSelect}>
        <Text style={styles.sectionHeader}>Subjects Overview</Text>
        <Text style={styles.sectionContent}>
          • Engineering Mathematics{'\n'}
          • General Aptitude{'\n'}
          • Subject-specific topics (e.g., CS: Algorithms, DBMS, OS, CN, TOC){'\n'}
          • Practice subject-wise to maximize your score!
        </Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Mock Tests</Text>
        <Text style={styles.sectionContent}>Tap below to take mock tests:</Text>
        <TouchableOpacity onPress={() => openURL('https://testbook.com/gate')}>
          <Text style={styles.link}>Testbook GATE Mock Tests</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openURL('https://gate.iitkgp.ac.in/mock_tests.html')}
        >
          <Text style={styles.link}>Official GATE Mock Test</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openURL('https://www.madeeasy.in/online-test-series/gate')}
        >
          <Text style={styles.link}>Made Easy Online Tests</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openURL('https://www.gradeup.co/online-test-series/gate')}
        >
          <Text style={styles.link}>BYJU'S Exam Prep (Gradeup)</Text>
        </TouchableOpacity>
      </View>

      {/* Score Card Section */}
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreHeader}>Your Last Test Score</Text>
        <View style={styles.scoreCard}>
          <Text style={styles.score}>{testScore} / 360</Text>
          <Text style={styles.percentage}>{((testScore / 360) * 100).toFixed(2)}%</Text>
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

export default JeeMainsScreen;

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
    bottom:11,
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
    bottom:65,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Score Card Styles
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
    bottom:47,
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
