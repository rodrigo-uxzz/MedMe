import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Pressable, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function Glicemia() {
  const navigation = useNavigation();

  const [dados, setDados] = React.useState([]);
  const [valor, setValor] = React.useState("");

  function salvarGlicemia(valor) {
    if (!valor) {
      alert("Por favor, insira um valor de glicemia.");
      return;
    }

    const data = new Date();

    const dia = String(data.getDate());
    const mes = String(data.getMonth() + 1);
    const ano = String(data.getFullYear());
    const horas = String(data.getHours());
    const minutos = String(data.getMinutes());

    let status = "";
    let cor = "";  

    const valorNum = parseFloat(valor);

      if (valorNum < 70) {
        status = "Baixo";
        cor ="#FF6B6B";
      }else if (valorNum >= 70 && valorNum < 100) {
        status = "Normal";
        cor = "#B3E5FC";    
      }else if (valorNum >= 100 && valorNum <= 125) {
        status = "Pré-diabetes";
        cor = "#FDF2B3";
      }else {
        status = "Diabetes";
        cor = "#FF6B6B";
      }

    const novoRegistro = {
      id: Date.now(),
      valor,
      status,
      cor,
      data: `${dia}/${mes}/${ano}`,
      hora: `${horas}:${minutos}`,
      
    };
    setDados((prev) => [novoRegistro, ...prev]);
    setValor("");
  }

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
