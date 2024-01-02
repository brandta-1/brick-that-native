import { View, Text, Pressable } from 'react-native';
import { postDb } from '../utils/idb';
import styles from '../utils/styles';

export default function Controls({ img, isCanv, currCanv, pickImage, setCanv }) {
    return (
        <>
            <View style={{ flexDirection: "row ", width: "95%", justifyContent: "center" }}>
                <Pressable
                    onPress={pickImage}
                    style={[styles.button, { width: "50%" }]}
                >
                    <Text style={styles.text}>{img ? "New image" : "Select image"}</Text>
                </Pressable>
                {img &&
                    <Pressable
                        style={[styles.button, { width: "50%" }]}
                        onPress={() => setCanv(true)}
                    >
                        <Text style={styles.text}>Convert image</Text>
                    </Pressable>
                }
            </View>
            {img &&
                <Pressable style={[styles.button, { width: "95%", marginBottom: 4 }]}>
                    <Text style={styles.text}>Settings</Text>
                </Pressable>
            }
            {isCanv &&
                <Pressable
                    style={[styles.button, { width: "95%", marginTop: 0, marginBottom: 4 }]}
                    onPress={() => postDb(currCanv)}
                >
                    <Text style={styles.text}>Add to library</Text>
                </Pressable>
            }
        </>
    );
}