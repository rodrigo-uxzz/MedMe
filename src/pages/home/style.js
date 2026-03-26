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
        paddingTop: 10,
    },

    botao: {
        backgroundColor: "#fff",
        borderColor: "#66E4D6",
        borderWidth: 5,
        borderRadius: 15,
        padding: 2,
        width: 150,
        height: 90,
        justifyContent: 'flex-end',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.25,
        borderRadius: 5,
        elevation: 5,
    },

    botaoM: {
        backgroundColor: "#fff",
        borderColor: "#66E4D6",
        borderWidth: 5,
        borderRadius: 15,
        padding: 2,
        width: 150,
        height: 190,
        justifyContent: 'flex-end',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.25,
        borderRadius: 5,
        elevation: 5,
    },

    botaoText: {
        textAlign: 'center',
        marginBottom: 8,
        fontWeight: 'bold',
        color: '#003333',
    },

    botaoPressed: {
        transform: [{ scale: 0.96 }],
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.12,
        elevation: 2,
    },

    botaoMPressed: {
        transform: [{ scale: 0.96 }],
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.12,
        elevation: 2,
    },

    v2: {
        flex:0.5,
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around",
    },

    v3: {
        flex:1,
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around",
    },

    v4: {
        flex:0.5,
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around",
    },

  });