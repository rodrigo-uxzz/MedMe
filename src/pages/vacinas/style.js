import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },

  v1: {
    width: "100%",
    marginBottom: 16,
  },

  tittle: {
    textAlign: "left",
    marginBottom: 8,
    fontSize: 35,
    fontWeight: "650",
    color: "#66E4D6",
  },

  cardG: {
    width: "100%",
    borderWidth: 3,
    borderColor: "#66E4D6",
    borderRadius: 8,
    padding: 30,
    paddingBottom: 50,
    marginTop: 8,
    position: "relative",
  },

  input: {
    width: "100%",
    height: 44,
    borderWidth: 3,
    borderColor: "#66E4D6",
    borderRadius: 8,
    padding: 25,
    fontWeight: "500",
    fontSize: 25,
    color: "#cac6c6",
    paddingHorizontal: 8,
  },

  button: {
    backgroundColor: "#66E4D6",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 50,
    position: "absolute",
    bottom: -25,
    right: 12,
    elevation: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  v2: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 50,
  },

  tittle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4DD0E1",
    marginBottom: 20,
  },

  containerScroll: {
    flex: 1,
    padding: 10,
  },

  contentScroll: {
    paddingTop: 5,
    paddingBottom: 30,
  },

  cardH: {
    borderWidth: 3,
    borderColor: "#4DD0E1",
    borderRadius: 10,
    padding: 15,
    marginBottom: 25,
    position: "relative", // Necessário para a tag se posicionar
  },

  tag: {
    position: "absolute",
    top: -15,
    right: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    elevation: 2, // Sombra no Android
    shadowColor: "#000000", // Sombra no iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    backgroundColor: "#79fcf1",
  },

  textTag: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#333333f7",
    backgroundColor: "ffffff",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },

  dateText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  hourText: {
    fontSize: 16,
    color: "#666",
  },

  valueText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  filtroContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 15,
    marginTop: 20,
  },

  botaoFiltro: {
    borderWidth: 2,
    borderColor: "#66E4D6",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  botaoAtivo: {
    backgroundColor: "#66E4D6",
  },

  textoFiltro: {
    color: "#66E4D6",
    fontWeight: "bold",
  },

  textoAtivo: {
    color: "#fff",
  },
});
