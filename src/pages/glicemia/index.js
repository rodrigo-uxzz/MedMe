import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";

export default function Glicemia() {
  const navigation = useNavigation();

  // Dados para o histórico
  const dados = [
    { id: 1, status: 'Pré diabético', cor: '#FDF2B3', data: '18/03/2026', hora: '14h', valor: '120mg/dL' },
    { id: 2, status: 'Normal', cor: '#B3E5FC', data: '17/03/2026', hora: '21h', valor: '90mg/dL' },
    { id: 3, status: 'Diabético', cor: '#FF8A80', data: '17/03/2026', hora: '13h', valor: '135mg/dL' },
    { id: 4, status: 'Normal', cor: '#B3E5FC', data: '16/03/2026', hora: '10h', valor: '85mg/dL' },
  ];

  return (
    <View style={styles.container}>
      {/* SEÇÃO 1: REGISTRO */}
      <View style={styles.v1}>
        <Text style={styles.tittle}>Registre a glicemia</Text>
        <View style={styles.cardG}>
          <TextInput
            style={styles.input}
            placeholder="Valor (mg/dL)"
            keyboardType="numeric"
          />
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Salvar</Text>
          </Pressable>
        </View>
      </View>

      {/* SEÇÃO 2: HISTÓRICO COM SCROLL */}
      <View style={styles.v2}>
        <Text style={styles.tittle}>Histórico</Text>

        <ScrollView 
          style={styles.containerScroll}
          contentContainerStyle={styles.contentScroll} 
          showsVerticalScrollIndicator={false}
        >
          {dados.map((item) => (
            <View key={item.id} style={styles.cardH}>
              
              {/* Etiqueta Flutuante */}
              <View style={[styles.tag, { backgroundColor: item.cor }]}>
                <Text style={styles.textTag}>{item.status}</Text>
              </View>

              {/* Conteúdo do Card */}
              <View style={styles.row}>
                <View>
                  <Text style={styles.dateText}>{item.data}</Text>
                  <Text style={styles.hourText}>{item.hora}</Text>
                </View>
                <Text style={styles.valueText}>{item.valor}</Text>
              </View>

            </View>
          ))}
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
