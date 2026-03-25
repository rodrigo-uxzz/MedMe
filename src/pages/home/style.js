import { StyleSheet,} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
    },

    v1: {
        flex:1,
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around",
        padding: 10,
    },

    botao: {
        backgroundColor: "#Ff3fff",
        borderColor: "black",
        borderRadius: 10,
        padding: 10,
        width: 150,
        height: 90,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        borderRadius: 5,
        elevation: 5,
    },

    botaoM: {
        backgroundColor: "#Ff3fff",
        borderColor: "black",
        borderRadius: 10,
        padding: 10,
        width: 150,
        height: 180,
    },

    v2: {
        flex:0.5,
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around",
        padding: 10,
    },

    v3: {
        flex:1,
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around",
        padding: 10,
    },

    v4: {
        flex:0.5,
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around",
        padding: 10,
    },

  });