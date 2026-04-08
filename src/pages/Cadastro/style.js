import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

    logoLogin:{
        width:'100%',
        height:200,
        resizeMode: 'contain',
    },

    form:{
        width: '75%',
        gap: 15,
    },
    
    titulo:{
        fontSize: 32,
        fontWeight: 500,
        color: '#23448d',
    },

    subTitulo:{
        fontSize: 16,
        color: '#23448d',

    },

    input:{
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderColor:"#DCDCDC",
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 12,
    },

    footerRow: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 4
    },

    footerText:{
        color: "#585860"
    },

    footerLink:{
        color: "#00DAC2",
        fontWeight: 600,
    }

})