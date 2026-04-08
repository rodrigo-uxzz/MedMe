import { StatusBar } from 'expo-status-bar';
import { View, Image} from 'react-native';
import  { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
      setTimeout(()=>{
         carregarPagina()
      },2000);
    }, []);

    const carregarPagina = async () => {
      try {
        const status = await AsyncStorage.getItem("@Login");
        console.log(status)
        if (status != null) {
          navigation.replace("Home"); 
        } else {
          navigation.replace("Login");
        }

      } catch (error) {
        console.log("Erro ao carregar", error);
        navigation.replace("Login");
      }
    };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoSplash}
        source={require('../../../assets/logo.png')}
      />

      <Image
        style={styles.gif}
        source={require('../../../assets/gif.gif')}
      />

      <StatusBar style="auto" />
    </View>
  );
}

