import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import {styles} from './util/styles';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

