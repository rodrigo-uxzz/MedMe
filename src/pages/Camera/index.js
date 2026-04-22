import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert, Pressable} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Button } from "../../components/Button.js"

export default function Camera({ route, navigation }) {
    const { nome, email, senha } = route.params;
    const [imagem, setImagem] = useState(null);

  const solicitarPermissoes = async () => {
    const camera = await ImagePicker.requestCameraPermissionsAsync();
    const galeria = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (camera.status !== 'granted' || galeria.status !== 'granted') {
      Alert.alert('Permissão negada', 'É necessário permitir acesso à câmera e galeria.');
      return false;
    }

    return true;
  };

  const tirarFoto = async () => {
    const permissoes = await solicitarPermissoes();
    if (!permissoes) return;

    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
    console.log(resultado.assets)
  };

  const escolherDaGaleria = async () => {
    const permissoes = await solicitarPermissoes();
    if (!permissoes) return;

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
  };

  
  const salvarCadastro = async () => {
    if (!nome || !email || !senha) {
      console.log('Preencha todos os campos');
      return;
    }
    
    const usuario = { nome, email, senha };

    await AsyncStorage.setItem('@Usuario', JSON.stringify(usuario));

    Alert.alert('Conta criada com sucesso!');
    navigation.navigate('Login');
    };

  const voltar = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.titulo}>Foto Perfil</Text>

        {/* FOTO */}
        <Pressable style={styles.foto} onPress={tirarFoto}>
          {imagem ? (
            <Image source={{ uri: imagem }} style={styles.imagem} />
          ) : (
            <Ionicons name="person-outline" size={80} color="#fff" />
          )}

          <View style={styles.cameraIcon}>
            <Ionicons name="camera" size={30} color="#66E4D6" />
          </View>
        </Pressable>

        {/* BOTÃO */}
        <Pressable style={styles.botao} onPress={escolherDaGaleria}>
          <Text style={styles.botaoText}>Escolher da Galeria</Text>
        </Pressable>

        {/* FOOTER */}
        <Button 
        label="Cadastrar" 
        onPress= {salvarCadastro} 
        />

        <View style={styles.footerRow}>
        <Text style={styles.footerText}>
            Já tem uma conta?
        </Text>

        <Pressable onPress={() => voltar()}>
            <Text style={styles.footerLink}>
            Entre aqui.
            </Text>
        </Pressable>
        </View>
        
        <View style={styles.footer}>

          <Pressable style={styles.proximo}>
            <Text style={styles.pular}>Próximo</Text>

            <View style={styles.circulo}>
              <Text style={styles.seta}>{">"}</Text>
            </View>
          </Pressable>
        </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#66E4D6", 
      justifyContent: "flex-end", 
    },
  
    topo: {
      height: 200,
      justifyContent: "center",
      alignItems: "center",
    },
  
    logo: {
      width: 80,
      height: 80,
      marginBottom: 5,
    },
  
    appName: {
      color: "#fff",
      fontSize: 18,
    },
  
    card: {
      flex: 1,
      backgroundColor: "#eee",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
  
      justifyContent: "center", 
      alignItems: "center",
  
      paddingHorizontal: 20,
    },
  
    titulo: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#66E4D6", 
      marginBottom: 30,
      textAlign: "center",
    },
  
    foto: {
      width: 180,
      height: 180,
      borderRadius: 90,
      backgroundColor: "#66E4D6", 
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 30,
    },
  
    imagem: {
      width: "100%",
      height: "100%",
      borderRadius: 90,
    },
  
    cameraIcon: {
      position: "absolute",
      bottom: 5,
      right: 5,
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 4,
    },
  
    botao: {
      backgroundColor: "#66E4D6", 
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 10,
      marginBottom: 40,
    },
  
    botaoText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  
    footer: {
      flexDirection: "row",
      alignItems: "center",
      width: "90%",
    },
  
    voltar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: "#66E4D6",
      justifyContent: "center",
      alignItems: "center",
    },
  
    proximo: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#66E4D6",
      borderRadius: 30,
      paddingHorizontal: 20,
      height: 55,
      flex: 1,
      marginLeft: 10,
      justifyContent: "space-between",
    },
  
    pular: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  
    circulo: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
    },
  
    seta: {
      color: "#66E4D6",
      fontSize: 18,
      fontWeight: "bold",
    },

    footerRow: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 4
    },

    footerText:{
        color: "#585860"
    },

    footerLink:{
        color: "#00DAC2",
        fontWeight: 600,
    }

  });