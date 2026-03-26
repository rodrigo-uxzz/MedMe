import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
  },
  cardPrincipal: {
    width: '85%',
    height: '55%',
    backgroundColor: '#BBDEFB',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    overflow: 'hidden',
  },
  tagObjetivo: {
    backgroundColor: '#4DD0E1',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  tagFaltam: {
    backgroundColor: '#4DD0E1',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textTag: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  areaGarrafa: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  garrafa: {
    width: 120,
    height: 220,
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 40,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAgua: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  gridBotoes: {
    width: '85%',
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#4DD0E1',
    width: '48%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
