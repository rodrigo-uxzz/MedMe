import {StyleSheet, Text, Pressable} from 'react-native'


export function Button({label, ...rest}){
    return(
        <Pressable   
            style={({ pressed }) => [styles.container, pressed && styles.pressed]} {...rest}>
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 48,
        backgroundColor: "#66E4D6",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,

    },
    label:{
        color:"#ffff",
        fontSize: 16,
        fontWeight: "600",
    },
    pressed: {
        opacity: 0.7,
    },
})