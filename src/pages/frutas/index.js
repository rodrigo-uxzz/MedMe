import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Pressable } from "react-native";
import axios from "axios";
import styles from "./style";

const API_KEY = "rMMCeJeKSFOeVeuWDvutZdwxVaLVhz3C9Nv0Idon";

export default function Frutas() {
  const [alimento, setAlimento] = useState("");
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState("");

  const buscarNutrientes = async () => {
    if (!alimento) {
      alert("Digite um alimento.");
      return;
    }

    setErro("");
    setDados(null);

    try {
      const busca = await axios.get(
        `https://api.nal.usda.gov/fdc/v1/foods/search`,
        {
          params: {
            query: alimento,
            api_key: API_KEY,
          },
        },
      );

      const resultadoBusca = busca.data;

      if (!resultadoBusca.foods || resultadoBusca.foods.length === 0) {
        setErro("Alimento não encontrado.");
        return;
      }

      const alimentoEncontrado = resultadoBusca.foods[0];

      const detalhe = await axios.get(
        `https://api.nal.usda.gov/fdc/v1/food/${alimentoEncontrado.fdcId}`,
        {
          params: {
            api_key: API_KEY,
          },
        },
      );

      const resultadoDetalhe = detalhe.data;

      const nutrientes = resultadoDetalhe.foodNutrients || [];

      const pegar = (nome) => {
        const item = nutrientes.find(
          (n) => n.nutrient?.name?.toLowerCase() === nome.toLowerCase(),
        );
        if (item) {
          return `${item.amount} ${item.nutrient.unitName}`;
        } else {
          return "Não informado";
        }
      };

      setDados({
        nome: resultadoDetalhe.description || alimento,
        calorias: pegar("Energy"),
        proteina: pegar("Protein"),
        carboidratos: pegar("Carbohydrate, by difference"),
        gordura: pegar("Total lipid (fat)"),
        fibra: pegar("Fiber, total dietary"),
      });
    } catch (e) {
      console.log(e);
      setErro("Erro ao buscar dados.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <Text style={styles.tittle}>Buscar alimento</Text>

        <View style={styles.cardG}>
          <TextInput
            style={styles.input}
            value={alimento}
            onChangeText={setAlimento}
            placeholder="Ex: banana"
          />

          <Pressable onPress={buscarNutrientes} style={styles.button}>
            <Text style={styles.buttonText}>Buscar</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.v2}>
        <Text style={styles.tittle}>Nutrientes</Text>

        {erro ? <Text>{erro}</Text> : null}

        {dados !== null && (
          <View style={styles.cardH}>
            <View style={styles.nutrientesContainer}>
              <View style={styles.nutrienteBox}>
                <Text style={styles.nutrienteTitulo}>🔥 Calorias</Text>
                <Text style={styles.nutrienteValor}>{dados.calorias}</Text>
              </View>

              <View style={styles.nutrienteBox}>
                <Text style={styles.nutrienteTitulo}>💪 Proteína</Text>
                <Text style={styles.nutrienteValor}>{dados.proteina}</Text>
              </View>

              <View style={styles.nutrienteBox}>
                <Text style={styles.nutrienteTitulo}>🍞 Carboidratos</Text>
                <Text style={styles.nutrienteValor}>{dados.carboidratos}</Text>
              </View>

              <View style={styles.nutrienteBox}>
                <Text style={styles.nutrienteTitulo}>🥑 Gordura</Text>
                <Text style={styles.nutrienteValor}>{dados.gordura}</Text>
              </View>

              <View style={styles.nutrienteBox}>
                <Text style={styles.nutrienteTitulo}>🌾 Fibra</Text>
                <Text style={styles.nutrienteValor}>{dados.fibra}</Text>
              </View>
            </View>
          </View>
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
