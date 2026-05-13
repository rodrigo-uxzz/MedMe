import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  Pressable,
  Animated,
  Dimensions,
} from 'react-native';

import React, { useRef, useState, useEffect } from 'react';
import styles from './style';

const { height, width } = Dimensions.get('window');

export default function Agua() {

  const [consumido, setConsumido] = useState(0);

  const objetivo = 2000;

  const faltando = objetivo - consumido;

  /* ALTURA RESPONSIVA DA GARRAFA */
  const alturaGarrafa = height * 0.28;

  /* ANIMAÇÃO */
  const alturaAnimada = useRef(new Animated.Value(0)).current;

  const porcentagem = consumido / objetivo;

  useEffect(() => {

    Animated.timing(alturaAnimada, {
      toValue: porcentagem * alturaGarrafa,
      duration: 500,
      useNativeDriver: false,
    }).start();

  }, [consumido]);

  const adicionarAgua = (quantidade) => {

    if (consumido + quantidade <= objetivo) {
      setConsumido(consumido + quantidade);
    }

  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.cardPrincipal}>

        <View style={styles.tagObjetivo}>
          <Text style={styles.textTag}>
            Objetivo: {objetivo}ml
          </Text>
        </View>

        {/* GARRAFA */}
        <View style={styles.areaGarrafa}>

          <View
            style={[
              styles.garrafa,
              {
                height: alturaGarrafa,
              },
            ]}
          >

            {/* ÁGUA */}
            <Animated.View
              style={[
                styles.agua,
                {
                  height: alturaAnimada,
                },
              ]}
            />

            {/* TEXTO */}
            <Text style={styles.textAgua}>
              {consumido}ml
            </Text>

          </View>

        </View>

        <View style={styles.tagFaltam}>
          <Text style={styles.textTag}>
            Faltam: {faltando > 0 ? faltando : 0}ml
          </Text>
        </View>

      </View>

      {/* BOTÕES */}
      <View style={styles.gridBotoes}>

        <View style={styles.row}>

          <Pressable
            style={styles.botao}
            onPress={() => adicionarAgua(100)}
          >
            <Text style={styles.textBotao}>+100ml</Text>
          </Pressable>

          <Pressable
            style={styles.botao}
            onPress={() => adicionarAgua(200)}
          >
            <Text style={styles.textBotao}>+200ml</Text>
          </Pressable>

        </View>

        <View style={styles.row}>

          <Pressable
            style={styles.botao}
            onPress={() => adicionarAgua(500)}
          >
            <Text style={styles.textBotao}>+500ml</Text>
          </Pressable>

          <Pressable
            style={styles.botao}
            onPress={() => adicionarAgua(1000)}
          >
            <Text style={styles.textBotao}>+1000ml</Text>
          </Pressable>

        </View>

      </View>
    </View>
  );
}