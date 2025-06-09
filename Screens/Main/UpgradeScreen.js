import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UpgradeScreen = ({ onBack }) => {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose your plan</Text>
      <Text style={styles.subHeading}>⭐️⭐️⭐️⭐️⭐️</Text>
      <Text style={styles.quote}>
        “This app is so well made and highly useful. It's invaluable when I have Exam dates.”
      </Text>

      <TouchableOpacity
        style={[
          styles.planContainer,
          selectedPlan === 'yearly' && styles.selectedPlan,
        ]}
        onPress={() => setSelectedPlan('yearly')}
      >
        <Text style={styles.planTitle}>Yearly Plan</Text>
        <Text style={styles.planText}>12 months • ₹799 (₹66.58/mo)</Text>
        <Text style={styles.tag}>7-day free trial</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.planContainer,
          selectedPlan === 'monthly' && styles.selectedPlan,
        ]}
        onPress={() => setSelectedPlan('monthly')}
      >
        <Text style={styles.planTitle}>Monthly Plan</Text>
        <Text style={styles.planText}>₹249.00 / mo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start free trial</Text>
      </TouchableOpacity>

      {/* Added text under "Start free trial" button */}
      <Text style={styles.trialInfo}>
        Free trial is for 7 days and then you'll be charged. All subscriptions renew automatically. Billed yearly. Cancel anytime.
      </Text>

      {/* Added "Terms of Service" and "Restore Purchase" buttons */}
      <View style={styles.linksContainer}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Restore Purchase</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpgradeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12132C',
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 60,
  },
  subHeading: {
    fontSize: 18,
    color: '#FFC107',
    marginTop: 10,
  },
  quote: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  planContainer: {
    width: '100%',
    backgroundColor: '#1D1E3D',
    borderRadius: 10,
    padding: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#2C2E50',
  },
  selectedPlan: {
    borderColor: '#FFC107',
    backgroundColor: '#2C2E50',
  },
  planTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  planText: {
    color: '#ccc',
    marginTop: 4,
  },
  tag: {
    marginTop: 6,
    fontSize: 12,
    color: '#FFC107',
  },
  startButton: {
    backgroundColor: '#FFC107',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  startButtonText: {
    color: '#12132C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  trialInfo: {
    color: '#ccc',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 12,
    paddingHorizontal: 10,
  },
  linksContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    width: '100%',
  },
  linkText: {
    color: '#FFC107',
    textDecorationLine: 'underline',
    fontSize: 13,
  },
  backButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  backText: {
    color: '#FFC107',
    fontSize: 16,
  },
});
