import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import { useState } from 'react';
import styles from './style.js';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Input } from "../../components/Input.js";
import { Button } from "../../components/Button.js";
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = async () => {
    try {
      const usuarioSalvo = await AsyncStorage.getItem('@Usuario');

      if (!usuarioSalvo) {
        Alert.alert('Nenhum usuário cadastrado');
        return;
      }

      const usuario = JSON.parse(usuarioSalvo);

      if (email === usuario.email && senha === usuario.senha) {
        await AsyncStorage.setItem('@Login', 'true');
        navigation.navigate('Home');
      } else {
        Alert.alert('Email ou senha inválidos');
      }
    } catch (error) {
      console.log('Erro no login:', error);
    }
  };

  const carregarCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Image
            style={styles.logoLogin}
            source={require('../../../assets/logo.png')}
          />
          <View style={styles.form}>
            <Text style={styles.titulo}>Entrar</Text>
            <Text style={styles.subTitulo}>Acesse sua conta com email e senha</Text>

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              placeholder="Senha"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            <Button
              label="Entrar"
              onPress={fazerLogin} 
            />
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>
              Não tem uma conta?
            </Text>

            <Pressable onPress={() => carregarCadastro()}>
              <Text style={styles.footerLink}>
                Cadastre-se aqui.
              </Text>
            </Pressable>
          </View>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}