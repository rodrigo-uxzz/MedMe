import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },

  v1: {
    width: "100%",
    marginBottom: 20,
  },

  tittle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4DD0E1",
    marginBottom: 15,
  },

  cardG: {
    width: "100%",
    borderWidth: 3,
    borderColor: "#66E4D6",
    borderRadius: 8,
    padding: 25,
    paddingBottom: 50,
    position: "relative",
  },

  input: {
    width: "100%",
    height: 50,
    borderWidth: 3,
    borderColor: "#66E4D6",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
    color: "#333",
  },

  button: {
    backgroundColor: "#66E4D6",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 40,
    position: "absolute",
    bottom: -25,
    right: 12,
    elevation: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  v2: {
    marginTop: 40,
  },

  cardH: {
    borderWidth: 3,
    borderColor: "#4DD0E1",
    borderRadius: 10,
    padding: 20,
  },

  valueText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },

  nutrientesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  
  nutrienteBox: {
    width: "48%",
    borderWidth: 2,
    borderColor: "#66E4D6",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  
  nutrienteTitulo: {
    fontSize: 14,
    color: "#555",
  },
  
  nutrienteValor: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
});