import { Text, Pressable } from 'react-native';
import styles from "../styles";
export default function Controls({ img }) {
    return (
        <>
            {img &&
                <Pressable style={[styles.button, { width: "95%", marginBottom: 4 }]}>
                    <Text style={styles.text}>Settings</Text>
                </Pressable>
            }
        </>
    );
}