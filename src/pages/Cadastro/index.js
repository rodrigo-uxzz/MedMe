import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, Pressable, KeyboardAvoidingView, ScrollView, Platform, Alert} from 'react-native';
import { useState } from 'react';
import styles from './style.js';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Input } from "../../components/Input.js"
import { Button } from "../../components/Button.js"

import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const salvarCadastro = () => {
    if (!nome || !email || !senha) {
      Alert.alert('Preencha todos os campos');
      return;
    }
  
    navigation.navigate('Camera', {
      nome,
      email,
      senha,
    });
  };

  // const salvarCadastro = async () => {
  //   if (!nome || !email || !senha) {
  //     console.log('Preencha todos os campos');
  //     return;
  //   }
    
  //   const usuario = { nome, email, senha };

  //   await AsyncStorage.setItem('@Usuario', JSON.stringify(usuario));

  //   Alert.alert('Conta criada com sucesso!');
  //   navigation.navigate('Login');
  //   };

  // const voltar = () => {
  //   navigation.navigate('Login');
  // };
  return (
    <KeyboardAvoidingView 
      style={{flex: 1,}} 
      behavior={Platform.select({ ios: "padding", android: "height"})}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1}} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
        
          <Image
            style={styles.logoLogin}
            source={require('../../../assets/logo.png')}
          />
          <View style={styles.form}>

            <Text style={styles.titulo}>Cadastre-se</Text>
            <Text style={styles.subTitulo}>Crie sua conta para acessar</Text>
        
            <Input 
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}
            />
            <Input 
            placeholder="Digite seu e-mail" 
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            />
            <Input 
            placeholder="Crie uma senha" 
            secureTextEntry 
            value={senha}
            onChangeText={setSenha}
            />

            <Button 
            label="Cadastrar" 
            onPress= {salvarCadastro} 
            />

          </View>

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

                
            <StatusBar style="auto" />
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

