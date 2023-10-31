import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import API_Screen1 from './Screen/API_Screen1';
import API_Screen2 from './Screen/API_Screen2';

export default function App() {
  return (
    <API_Screen2/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
