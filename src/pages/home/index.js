import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const navigation = useNavigation();

  const sair = async () => {
    await AsyncStorage.removeItem("@Login");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
        <View style={styles.v1}> 
            <Pressable 
              style={({pressed}) => [styles.botaoM, pressed && styles.botaoMPressed]}
              onPress={() => navigation.navigate('Agua')}
            >
              <MaterialCommunityIcons name="cup-water" size={120} color="#66E4D6"/>
              <Text style={styles.botaoText}>Água</Text>
            </Pressable>

            <View style={{gap: 15,}}>
                <Pressable 
                style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}
                onPress={()=> navigation.navigate('Vacinas')}
                >
                  <MaterialCommunityIcons name="needle" size={45} color="#66E4D6" />
                  <Text style={styles.botaoText}>Vacinas</Text>
                </Pressable>
                <Pressable
                  style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}
                  onPress={() => navigation.navigate('Glicemia')}
                >
                  <MaterialCommunityIcons name="clipboard-pulse" size={45} color="#66E4D6" />
                  <Text style={styles.botaoText}>Glicemia</Text>
                </Pressable>
            </View>

        </View>
        <View style={styles.v2}>
            <Pressable 
              style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}
              onPress={() => navigation.navigate('Frutas')}  
            >
              <MaterialCommunityIcons name="fruit-cherries" size={45} color="#66E4D6" />
              <Text style={styles.botaoText}>Frutas</Text>
            </Pressable>
            <Pressable style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}>
              <MaterialCommunityIcons name="water-plus" size={45} color="#66E4D6" />
              <Text style={styles.botaoText}>Sangue</Text>
            </Pressable>

        </View>
        <View style={styles.v3}>
            <View style={{gap: 15,}}>
                <Pressable style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}>
                  <MaterialCommunityIcons name="pill" size={45} color="#66E4D6" />
                  <Text style={styles.botaoText}>Remédios</Text>
                </Pressable>
                <Pressable style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}>
                  <MaterialCommunityIcons name="heart-pulse" size={45} color="#66E4D6" />
                  <Text style={styles.botaoText}>Pressão</Text>
                </Pressable>
            </View>
            <Pressable style={({pressed}) => [styles.botaoM, pressed && styles.botaoMPressed]}>
              <MaterialCommunityIcons name="allergy" size={130} color="#66E4D6" />
              <Text style={styles.botaoText}>Alergias</Text>
            </Pressable>

        </View>
        <View style={styles.v4}>
            <Pressable style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}>
              <MaterialCommunityIcons name="scale-bathroom" size={45} color="#66E4D6" />
              <Text style={styles.botaoText}>IMC</Text>
            </Pressable>
            <Pressable style={({pressed}) => [styles.botao, pressed && styles.botaoPressed]}>
              <MaterialCommunityIcons name="alert" size={45} color="#66E4D6" />
              <Text style={styles.botaoText}>Emergência</Text>
            </Pressable>

        </View>
      <StatusBar style="auto" />
    </View>
  );
}

