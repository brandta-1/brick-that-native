import { View, Text, Pressable } from 'react-native';
import styles from '../utils/styles';

export default function Controls({ img, isCanv, currCanv, pickImage, setCanv, dWidth, addToLib, lib, showSettings, openCloseSettings, fidelity, changeFidelity }) {
    
    //render the fidelity buttons conditionally
    const bool = fidelity == 32;
    
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
                <Pressable
                    style={[styles.button, { width: dWidth }]}
                    onPress={() => openCloseSettings()}
                >
                    <Text style={styles.text}>{showSettings ? 'Close brick settings' : 'Brick settings'}</Text>
                </Pressable>
            }
            {showSettings &&

                <View style={{ flexDirection: "row ", justifyContent: "space-between", width: dWidth, gap: 4 }}>
                    <Pressable
                        onPress={() => changeFidelity(16)}
                        style={[styles.button, {
                            flex: 1,
                            backgroundColor: bool ? '#f4511e' : '#c34018'
                        }]}
                    >
                        <Text style={styles.text}>{bool ? 'Switch to 16x16' : '16x16 Active'}</Text>
                    </Pressable>
                    {img &&
                        <Pressable
                            style={[styles.button, {
                                flex: 1,
                                backgroundColor: !bool ? '#f4511e' : '#c34018'
                            }]}
                            onPress={() => changeFidelity(32)}
                        >
                            <Text style={styles.text}>{!bool ? 'Switch to 32x32' : '32x32 Active'}</Text>
                        </Pressable>
                    }
                </View>

            }
            {isCanv &&
                <Pressable
                    disabled={lib[1]}
                    style={[styles.button, {
                        width: dWidth,
                        backgroundColor: lib[1] ? '#c34018' : '#f4511e'
                    }]}
                    onPress={() => addToLib(currCanv)}
                >
                    <Text style={styles.text}>{lib[0]}</Text>
                </Pressable>
            }
        </>
    );
}