import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function Glicemia() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Glicemia Page</Text>
      <StatusBar style="auto" />
    </View>
  );
}
