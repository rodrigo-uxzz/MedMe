import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import styles from './style';

export default function Agua() {
  const [consumido, setConsumido] = useState(1000);
  const objetivo = 2000;
  const faltando = objetivo - consumido;

  const adicionarAgua = (quantidade) => {
    if (consumido + quantidade <= objetivo) {
      setConsumido(consumido + quantidade);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Card Azul Principal */}
      <View style={styles.cardPrincipal}>
        <View style={styles.tagObjetivo}>
          <Text style={styles.textTag}>Objetivo: {objetivo}ml</Text>
        </View>

        {/* Garrafa (Simulada com Views) */}
        <View style={styles.areaGarrafa}>
          <View style={styles.garrafa}>
             {/* O conteúdo da água poderia ser uma View com altura dinâmica aqui */}
             <Text style={styles.textAgua}>{consumido}ml</Text>
          </View>
        </View>

        <View style={styles.tagFaltam}>
          <Text style={styles.textTag}>Faltam: {faltando > 0 ? faltando : 0}ml</Text>
        </View>
      </View>

      {/* Grid de Botões */}
      <View style={styles.gridBotoes}>
        <View style={styles.row}>
          <Pressable style={styles.botao} onPress={() => adicionarAgua(100)}>
            <Text style={styles.textBotao}>+100ml</Text>
          </Pressable>
          <Pressable style={styles.botao} onPress={() => adicionarAgua(200)}>
            <Text style={styles.textBotao}>+200ml</Text>
          </Pressable>
        </View>

        <View style={styles.row}>
          <Pressable style={styles.botao} onPress={() => adicionarAgua(500)}>
            <Text style={styles.textBotao}>+500ml</Text>
          </Pressable>
          <Pressable style={styles.botao} onPress={() => adicionarAgua(1000)}>
            <Text style={styles.textBotao}>+1000ml</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

