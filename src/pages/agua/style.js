import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

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
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    overflow: 'hidden',
  },

  tagObjetivo: {
    backgroundColor: '#4DD0E1',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 12,
  },

  tagFaltam: {
    backgroundColor: '#4DD0E1',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 12,
  },

  textTag: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  areaGarrafa: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* GARRAFA RESPONSIVA */
  garrafa: {

    width: width * 0.24,

    borderWidth: 4,
    borderColor: '#fff',

    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,

    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,

    overflow: 'hidden',

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgba(255,255,255,0.15)',

    position: 'relative',
  },

  /* ÁGUA */
  agua: {
    position: 'absolute',
    bottom: 0,

    width: '100%',

    backgroundColor: '#4DD0E1',

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  textAgua: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    zIndex: 2,
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
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  textBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

});