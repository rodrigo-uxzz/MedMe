import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.v1}> 
            <Pressable 
              style={({pressed}) => [styles.botaoM, pressed && styles.botaoMPressed]}
              onPress={() => navigation.navigate('Água')}
            >
              <Text style={styles.botaoText}>Água</Text>
            </Pressable>
            <View style={{gap: 15,}}>
                <Pressable style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}>
                  <Text style={styles.botaoText}>Vacinas</Text>
                </Pressable>
                <Pressable
                  style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}
                  onPress={() => navigation.navigate('Glicemia')}
                >
                  <Text style={styles.botaoText}>Glicemia</Text>
                </Pressable>
            </View>

        </View>
        <View style={styles.v2}>
            <Pressable style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}>
              <Text style={styles.botaoText}>Frutas</Text>
            </Pressable>
            <Pressable style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}>
              <Text style={styles.botaoText}>Sangue</Text>
            </Pressable>

        </View>
        <View style={styles.v3}>
            <View style={{gap: 15,}}>
                <Pressable style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}>
                  <Text style={styles.botaoText}>Remédios</Text>
                </Pressable>
                <Pressable style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}>
                  <Text style={styles.botaoText}>Pressão</Text>
                </Pressable>
            </View>
            <Pressable style={({pressed}) => [styles.botaoM, pressed && styles.botaoMPressed]}>
              <Text style={styles.botaoText}>Alergias</Text>
            </Pressable>

        </View>
        <View style={styles.v4}>
            <Pressable style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}>
              <Text style={styles.botaoText}>IMC</Text>
            </Pressable>
            <Pressable style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}>
              <Text style={styles.botaoText}>Emergência</Text>
            </Pressable>

        </View>
      <StatusBar style="auto" />
    </View>
  );
}

