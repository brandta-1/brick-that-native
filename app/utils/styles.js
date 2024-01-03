import { StyleSheet, useWindowDimensions } from 'react-native';

export const wide = 720;

export const dynamicWidth = () => {
    const { width } = useWindowDimensions();
    return width < wide ? "95%" : "100%"
}

export default StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#20232a',
        elevation: 3,
        backgroundColor: '#f4511e',
        alignItems: 'center'
    },
    text: {
        color: '#20232a',
        fontWeight: 'bold',
    },
    titleButton: {
        elevation: 0,
        margin: 4,
        paddingVertical: 12,
        paddingHorizontal: 12,
    },
    view: {
        alignItems: 'center',
    },
    notice: {
        fontSize: 17,
        marginLeft: "17.5%",
        marginRight: "17.5%",
        marginTop: "40%",
        width: "65%",
        textAlign: "center"
    },
    container: {
        flex: 1,
        alignItems: "center",
        gap: 4
    },
    content: {
        flex: 1,
        width: "100%",
        maxWidth: wide
    },

})