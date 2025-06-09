import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
  Linking,
  Modal,
} from 'react-native';

const SettingsScreen = ({ onBack }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleSwitch = (setter, currentValue) => setter(!currentValue);

  const contactEmail = 'shauryasingh544@gmail.com';
  const phoneNumber = '+917073525548';

  const openEmail = () => Linking.openURL(`mailto:${contactEmail}`);
  const handlePhonePress = () => setModalVisible(true);

  const callNumber = () => {
    Linking.openURL(`tel:${phoneNumber}`);
    setModalVisible(false);
  };

  const messageNumber = () => {
    Linking.openURL(`sms:${phoneNumber}`);
    setModalVisible(false);
  };

  const theme = {
    background: darkMode ? '#12132C' : '#FFFFFF',
    card: darkMode ? '#1E1E3F' : '#F0F0F0',
    text: darkMode ? '#FFFFFF' : '#000000',
    link: darkMode ? '#00BFFF' : '#007ACC',
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: '#FFD95F' }]}>App Settings</Text>

      <View style={[styles.settingRow, { backgroundColor: theme.card }]}>
        <Text style={[styles.settingText, { color: theme.text }]}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={() => toggleSwitch(setNotificationsEnabled, notificationsEnabled)}
        />
      </View>

      <View style={[styles.settingRow, { backgroundColor: theme.card }]}>
        <Text style={[styles.settingText, { color: theme.text }]}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={() => toggleSwitch(setDarkMode, darkMode)}
        />
      </View>

      <View style={[styles.settingRow, { backgroundColor: theme.card }]}>
        <Text style={[styles.settingText, { color: theme.text }]}>Auto Update Content</Text>
        <Switch
          value={autoUpdate}
          onValueChange={() => toggleSwitch(setAutoUpdate, autoUpdate)}
        />
      </View>

      <View style={[styles.settingRow, { backgroundColor: theme.card }]}>
        <Text style={[styles.settingText, { color: theme.text }]}>Clear Cached Data</Text>
        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={onBack}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>

      <View style={[styles.contactCard, { backgroundColor: theme.card }]}>
        <Text style={styles.contactHeader}>Contact Developers</Text>
        <Text style={[styles.contactText, { color: theme.link }]}>Shaurya Singh</Text>
        <Text style={[styles.contactText, { color: theme.link }]}>Shrvan Rastogi</Text>
        <Text style={[styles.contactText, { color: theme.link }]} onPress={handlePhonePress}>
          {phoneNumber}
        </Text>
        <Text style={[styles.contactText, { color: theme.link }]} onPress={openEmail}>
          {contactEmail}
        </Text>
      </View>

      {/* Modal Popup for Call Options */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Contact Options</Text>
            <TouchableOpacity onPress={callNumber} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={messageNumber} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
              <Text style={styles.modalCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  settingRow: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
  },
  clearButton: {
    backgroundColor: '#EC5228',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FF6F61',
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactCard: {
    borderRadius: 12,
    padding: 20,
    marginTop: 40,
    alignItems: 'center',
  },
  contactHeader: {
    fontSize: 20,
    color: '#FFD95F',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  contactText: {
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  modalCancelText: {
    fontSize: 16,
    color: 'red',
  },
});
