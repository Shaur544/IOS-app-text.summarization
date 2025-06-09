// App.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SplashScreen from './Screens/Loads/SplashScreen';
import LoginScreen from './Screens/Loads/LoginScreen';
import CreateAccountScreen from './Screens/Loads/CreateAccountScreen';
import DateOfBirthScreen from './Screens/Loads/DateOfBirthScreen';
import HomeScreen from './Screens/Main/HomeScreen'; 
import SummarizeScreen from './Screens/Main/SummarizeScreen';
import JeeMainsScreen from './Screens/Main/JeeMainsScreen';
import GuideScreen from './Screens/Main/GuideScreen';  
import FlashcarScreen from './Screens/Main/FlashcarScreen';  
import UpgradeScreen from './Screens/Main/UpgradeScreen';
import GREScreen from './Screens/Main/GREScreen';
import GMATScreen from './Screens/Main/GMATScreen';
import NewSettingScreen from './Screens/Main/NewSettingScreen';
import SubjectSelectScreen from './Screens/Main/GATE/SubjectSelectScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('splash');

  const handleAnimationEnd = () => setCurrentScreen('login');
  const handleCreateAccount = () => setCurrentScreen('createAccount');
  const handleBackToLogin = () => setCurrentScreen('login');
  const handleDateOfBirth = () => setCurrentScreen('dob');
  const handleDOBSubmit = (dob) => {
    console.log('DOB submitted:', dob);
    setCurrentScreen('login');
  };
  const handleLoginSuccess = () => setCurrentScreen('home'); // Navigate to HomeScreen
  const handleSubjectSelect = () => setCurrentScreen('subjectSelect'); // New function to navigate to SubjectSelectScreen

  return (
    <View style={styles.container}>
      {currentScreen === 'splash' && (
        <SplashScreen onAnimationEnd={handleAnimationEnd} />
      )}
      {currentScreen === 'login' && (
        <LoginScreen 
          onCreateAccount={handleCreateAccount} 
          onLoginSuccess={handleLoginSuccess} 
        />
      )}
      {currentScreen === 'createAccount' && (
        <CreateAccountScreen
          onBackToLogin={handleBackToLogin}
          onAccountCreated={handleDateOfBirth}
        />
      )}
      {currentScreen === 'dob' && (
        <DateOfBirthScreen onSubmit={handleDOBSubmit} />
      )}
      {currentScreen === 'home' && (
        <HomeScreen
          navigation={{
            navigate: (screen) => {
              if (screen === 'JeeMains') {
                setCurrentScreen('jeemains');
              } else if (screen === 'GuideScreen') {
                setCurrentScreen('guide');
              } else if (screen === 'FlashcarScreen') {
                setCurrentScreen('flashcard');
              } else if (screen === 'UpgradeScreen'){
                setCurrentScreen('upgrade');
              } else if (screen === 'SummarizeScreen'){
                setCurrentScreen('Summarize');
              } else if (screen === 'GREScreen'){
                setCurrentScreen('GRE');
              } else if (screen === 'GMATScreen'){
                setCurrentScreen('GMAT');
              } else if (screen === 'NewSettingScreen'){
                setCurrentScreen('Setting');
              }
            }
          }}
        />
      )}
      {currentScreen === 'summarize' && <SummarizeScreen />}
      {currentScreen === 'jeemains' && (<JeeMainsScreen onBack={() => setCurrentScreen('home')} onSubjectSelect={handleSubjectSelect} />
      )}
      {currentScreen === 'subjectSelect' && (<SubjectSelectScreen onBack={() => setCurrentScreen('jeemains')} />
      )}
      {currentScreen === 'guide' && (<GuideScreen onBack={() => setCurrentScreen('home')} />)}
      {currentScreen === 'flashcard' && (<FlashcarScreen onBack={() => setCurrentScreen('home')} />)}
      {currentScreen === 'upgrade' && (<UpgradeScreen onBack={() => setCurrentScreen('home')} />)}
      {currentScreen === 'Summarize' && (<SummarizeScreen onBack={() => setCurrentScreen ('home')} />)}
      {currentScreen === 'GRE' && (<GREScreen onBack={() => setCurrentScreen ('home')} />)}
      {currentScreen === 'GMAT' && (<GMATScreen onBack={() => setCurrentScreen ('home')} />)}
      {currentScreen === 'Setting' && (<NewSettingScreen onBack={() => setCurrentScreen ('home')} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
