import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactMoE from 'react-native-moengage';

export default function App() {
  useEffect(() => {
    ReactMoE.initialize("DUMMY_APP_ID");
    ReactMoE.showInApp();
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
