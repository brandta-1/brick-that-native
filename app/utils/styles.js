import { StyleSheet } from 'react-native';

export const wide = 720;

export default StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#20232a',
        elevation: 3,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 4,
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
        alignItems: "center"
    },
    content: {
        flex: 1,
        width: "100%",
        maxWidth: wide
    },
})