import { StyleSheet,} from 'react-native';

export default StyleSheet.create({
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
