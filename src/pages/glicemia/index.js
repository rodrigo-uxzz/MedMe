import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Pressable, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export default function Glicemia() {
  const navigation = useNavigation();

  const [dados, setDados] = React.useState([]);
  const [valor, setValor] = React.useState("");

  const salvarGlicemia = async (valor) => {
    if (!valor) {
      alert("Por favor, insira um valor de glicemia.");
      return;
    }
  
    const data = new Date();
  
    const novoRegistro = {
      id: Date.now(),
      valor,
      status: "",
      cor: "",
      data: `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`,
      hora: `${data.getHours()}:${data.getMinutes()}`,
    };
  
    const valorNum = parseFloat(valor);
  
    if (valorNum < 70) {
      novoRegistro.status = "Baixo";
      novoRegistro.cor = "#FF6B6B";
    } else if (valorNum < 100) {
      novoRegistro.status = "Normal";
      novoRegistro.cor = "#B3E5FC";
    } else if (valorNum <= 125) {
      novoRegistro.status = "Pré-diabetes";
      novoRegistro.cor = "#FDF2B3";
    } else {
      novoRegistro.status = "Diabetes";
      novoRegistro.cor = "#FF6B6B";
    }
  
    try {
      const dadosSalvos = await AsyncStorage.getItem("@registros");
  
      let lista = dadosSalvos ? JSON.parse(dadosSalvos) : [];
  
      lista.unshift(novoRegistro);
  
      await AsyncStorage.setItem("@registros", JSON.stringify(lista));
  
      setDados(lista);
      setValor("");
  
    } catch (e) {
      console.log("Erro:", e);
    }
  };


  React.useEffect(() => {
    const carregarDados = async () => {
      try {
        const dadosSalvos = await AsyncStorage.getItem("@registros");
  
        if (dadosSalvos) {
          setDados(JSON.parse(dadosSalvos));
        }
      } catch (e) {
        console.log("Erro ao carregar:", e);
      }
    };
  
    carregarDados();
  }, []);

  return (
    <View style={styles.container}>
      {/* SEÇÃO 1: REGISTRO */}
      <View style={styles.v1}>
        <Text style={styles.tittle}>Registre a glicemia</Text>
        <View style={styles.cardG}>
          <TextInput
            style={styles.input}
            value={valor}
            onChangeText={setValor}
            placeholder="Valor (mg/dL)"
            keyboardType="numeric"
          />
          <Pressable
            onPress={() => salvarGlicemia(valor)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </Pressable>
        </View>
      </View>

      {/* SEÇÃO 2: HISTÓRICO COM SCROLL */}
      <View style={styles.v2}>
        <Text style={styles.tittle}>Histórico</Text>

        <FlatList
          style={styles.containerScroll}
          contentContainerStyle={styles.contentScroll}
          showsVerticalScrollIndicator={false}
          data={dados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cardH}>
              <View style={[styles.tag, { backgroundColor: item.cor }]}>
                <Text style={styles.textTag}>{item.status}</Text>
              </View>
              <View style={styles.row}>
                <View>
                  <Text style={styles.dateText}>{item.data}</Text>
                  <Text style={styles.hourText}>{item.hora}</Text>
                </View>
                <Text style={styles.valueText}>{item.valor}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
