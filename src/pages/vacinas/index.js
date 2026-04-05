import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function Vacinas() {
  const [tipoSelecionado, setTipoSelecionado] = useState("Bebês");

  const vacinas = {
    "Bebês": [
      { nome: "BCG", data: "Ao nascer", desc: "Tuberculose" },
      { nome: "Hepatite B", data: "Ao nascer", desc: "Hepatite B" },
      { nome: "Pentavalente", data: "2, 4, 6 meses", desc: "Difteria, tétano, coqueluche..." },
      { nome: "Poliomielite", data: "2, 4, 6 meses", desc: "Paralisia infantil" },
      { nome: "Rotavírus", data: "2 e 4 meses", desc: "Diarreia grave" },
      { nome: "Pneumocócica 10", data: "2, 4, 12 meses", desc: "Pneumonia" },
      { nome: "Meningocócica C", data: "3, 5, 12 meses", desc: "Meningite" },
    ],

    "Crianças": [
      { nome: "Tríplice Viral", data: "12 meses", desc: "Sarampo, caxumba, rubéola" },
      { nome: "Tetraviral", data: "15 meses", desc: "Sarampo, caxumba, rubéola, varicela" },
      { nome: "DTP", data: "15 meses e 4 anos", desc: "Difteria, tétano, coqueluche" },
      { nome: "Hepatite A", data: "15 meses", desc: "Hepatite A" },
      { nome: "Varicela", data: "4 anos", desc: "Catapora" },
    ],

    "Adolescentes": [
      { nome: "HPV", data: "9 a 14 anos", desc: "Previne câncer" },
      { nome: "Meningocócica ACWY", data: "11 a 14 anos", desc: "Meningite" },
      { nome: "Hepatite B", data: "Se não tomou", desc: "3 doses" },
      { nome: "dT", data: "A cada 10 anos", desc: "Tétano e difteria" },
    ],

    "Adultos": [
      { nome: "Hepatite B", data: "3 doses", desc: "Hepatite B" },
      { nome: "Febre Amarela", data: "Dose única", desc: "Regiões de risco" },
      { nome: "Tríplice Viral", data: "Até 59 anos", desc: "Sarampo, caxumba, rubéola" },
      { nome: "dT", data: "A cada 10 anos", desc: "Tétano e difteria" },
      { nome: "Influenza", data: "Anual", desc: "Gripe" },
    ],

    "Grávidas": [
      { nome: "dTpa", data: "20ª semana", desc: "Protege o bebê" },
      { nome: "Hepatite B", data: "Se necessário", desc: "3 doses" },
      { nome: "Influenza", data: "Qualquer fase", desc: "Gripe" },
    ],

    "Idosos": [
      { nome: "Influenza", data: "Anual", desc: "Gripe" },
      { nome: "Pneumocócica 23", data: "Dose única", desc: "Pneumonia" },
      { nome: "dT", data: "A cada 10 anos", desc: "Tétano" },
      { nome: "COVID-19", data: "Reforço", desc: "Coronavírus" },
    ],
  };

  const tipos = Object.keys(vacinas);

  return (
    <View style={styles.container}>

      <View style={styles.filtroContainer}>
        {tipos.map((tipo) => (
          <Pressable
            key={tipo}
            onPress={() => setTipoSelecionado(tipo)}
            style={[
              styles.botaoFiltro,
              tipoSelecionado === tipo && styles.botaoAtivo,
            ]}
          >
            <Text
              style={[
                styles.textoFiltro,
                tipoSelecionado === tipo && styles.textoAtivo,
              ]}
            >
              {tipo}
            </Text>
          </Pressable>
        ))}
      </View>

      <ScrollView
        style={styles.containerScroll}
        contentContainerStyle={styles.contentScroll}
      >
        {vacinas[tipoSelecionado].map((item, index) => (
          <View key={index} style={styles.cardH}>
            
            {/* TAG */}
            <View style={styles.tag}>
              <Text style={styles.textTag}>{tipoSelecionado}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.dateText}>{item.nome}</Text>
              <Text style={styles.hourText}>{item.data}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.valueText}>{item.desc}</Text>
            </View>

          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}