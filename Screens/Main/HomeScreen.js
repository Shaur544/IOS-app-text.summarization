import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { height: screenHeight } = Dimensions.get('window');
const topSpacerHeight = screenHeight * 0.07; // 7% of screen height

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={{ height: topSpacerHeight }} />

        <View style={styles.header}>
          <Text style={styles.logo}>CORE</Text>
          <TouchableOpacity
            style={styles.upgradeButton}
            onPress={() => navigation.navigate('UpgradeScreen')}
          >
            <Text style={styles.upgradeText}>Upgrade</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NewSettingScreen')}
          >
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 24 }}>⚙️</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Converted search bar to a button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SummarizeScreen')}
        >
          <View style={styles.searchContainer}>
            <Text style={styles.searchIcon}>🔍</Text>
            <Text style={[styles.searchInput, { color: '#888' }]}>
              Summarize
            </Text>
            <Text style={{ fontSize: 18 }}>🎤</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Here's how to get started</Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('JeeMains')}
        >
          <Text style={{ fontSize: 28 }}>🎓</Text>
          <Text style={styles.cardText}>GATE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('GREScreen')}
        >
          <Text style={{ fontSize: 28 }}>📚</Text>
          <Text style={styles.cardText}>GRE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('GMATScreen')}
        >
          <Text style={{ fontSize: 28 }}>📚</Text>
          <Text style={styles.cardText}>GMAT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('GuideScreen')}
        >
          <Text style={{ fontSize: 28 }}>🧠</Text>
          <Text style={styles.cardText}>Generate study guide</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('FlashcarScreen')}
        >
          <Text style={{ fontSize: 28 }}>🎯</Text>
          <Text style={styles.cardText}>Create your own flashcards</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12132C',
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  upgradeButton: {
    backgroundColor: '#FFC107',
    paddingVertical: 8,
    left: 95,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  upgradeText: {
    color: 'black',
    fontWeight: '600',
  },
  icon: {
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1F3A',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1F3A',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 16,
  },
});
