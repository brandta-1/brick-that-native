import { View, Text, Pressable } from 'react-native';
import { postDb } from '../utils/idb';
import styles from '../utils/styles';

export default function Controls({ img, isCanv, currCanv, pickImage, setCanv, dWidth }) {
    return (
        <>
            <View style={{ flexDirection: "row ", justifyContent: "space-between", width: dWidth, gap: 4 }}>
                <Pressable
                    onPress={pickImage}
                    style={[styles.button, { flex: 1, }]}
                >
                    <Text style={styles.text}>{img ? "New image" : "Select image"}</Text>
                </Pressable>
                {img &&
                    <Pressable
                        style={[styles.button, { flex: 1, }]}
                        onPress={() => setCanv(true)}
                    >
                        <Text style={styles.text}>Convert image</Text>
                    </Pressable>
                }
            </View>
            {img &&
                <Pressable style={[styles.button, { width: dWidth }]}>
                    <Text style={styles.text}>Settings</Text>
                </Pressable>
            }
            {isCanv &&
                <Pressable
                    style={[styles.button, { width: dWidth,}]}
                    onPress={() => postDb(currCanv)}
                >
                    <Text style={styles.text}>Add to library</Text>
                </Pressable>
            }
        </>
    );
}