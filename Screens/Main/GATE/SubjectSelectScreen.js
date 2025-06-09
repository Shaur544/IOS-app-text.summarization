import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

const subjects = [
  'Computer Science and Information Technology',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Electronics and Communication Engineering',
  'Instrumentation Engineering',
  'Chemical Engineering',
  'Biotechnology',
  'Engineering Sciences (XE)',
  'Life Sciences (XL)',
  'Physics',
  'Mathematics',
  'Statistics',
  'Environmental Science and Engineering',
  'Aerospace Engineering',
  'Agricultural Engineering',
  'Architecture and Planning',
  'Geology and Geophysics',
  'Metallurgical Engineering',
  'Naval Architecture and Marine Engineering',
  'Petroleum Engineering',
  'Production and Industrial Engineering',
  'Textile Engineering and Fibre Science'
];

const SubjectSelectScreen = ({ onBack }) => {
  const [searchText, setSearchText] = useState('');

  const filteredSubjects = subjects.filter(subject =>
    subject.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Back Button at the top-left */}
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>×</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Select a Subject</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search Subjects..."
        placeholderTextColor="#ccc"
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Subject List */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {filteredSubjects.map((subject, index) => (
          <TouchableOpacity key={index} style={styles.subjectButton}>
            <Text style={styles.subjectText}>{subject}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SubjectSelectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12132C',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 20,
    zIndex: 1,
    backgroundColor: '#12132C',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  backButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  title: {
    color: '#FFD95F',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#1f1f3d',
    color: '#F1F6F9',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  subjectButton: {
    backgroundColor: '#394867',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 8,
  },
  subjectText: {
    color: '#F1F6F9',
    fontSize: 16,
    textAlign: 'center',
  },
});
