import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.v1}> 
            <Pressable style={styles.botaoM}>1</Pressable>
            <View style={{gap: 5,}}>
                <Pressable style={styles.botao}>2</Pressable>
                <Pressable style={styles.botao}>3</Pressable>
            </View>

        </View>
        <View style={styles.v2}>
            <Pressable style={styles.botao}>1</Pressable>
            <Pressable style={styles.botao}>2</Pressable>

        </View>
        <View style={styles.v3}>
            <View style={{gap: 5,}}>
                <Pressable style={styles.botao}>2</Pressable>
                <Pressable style={styles.botao}>3</Pressable>
            </View>
            <Pressable style={styles.botaoM}>3</Pressable>

        </View>
        <View style={styles.v4}>
            <Pressable style={styles.botao}>1</Pressable>
            <Pressable style={styles.botao}>2</Pressable>

        </View>
      <StatusBar style="auto" />
    </View>
  );
}

