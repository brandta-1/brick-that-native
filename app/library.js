import { Canvas, PageHeader } from './components';
import { getDb, deleteDb } from './utils/idb';
import { useState, useEffect } from 'react';
import { SafeAreaView, View, Pressable, Text } from 'react-native';
import styles, { dynamicWidth } from './utils/styles';
export default function Library() {

    const dWidth = dynamicWidth();

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchLegos();
    }, []);

    const fetchLegos = async () => {
        const res = await getDb();
        console.log("res if empty", res)
        setImages(res);
    }

    const remove = async (id) => {
        const res = await deleteDb(id);
        if (!res) {
            fetchLegos();
        }
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <PageHeader page={"library"} />
                <View style={[styles.content, {gap: 4, marginTop: 4, paddingBottom: 4}]}>
                    {!images.length && (

                        <Text style={[styles.notice, styles.text]}>Your library is empty. Go to the Create screen to add art</Text>
                    )}

                    {images.map((i, j) => {
                        return (
                            <View key={i.id} style={[styles.view, {gap: 4}]}>

                                <Canvas
                                    picture={i}
                                    name={`canvas-${j}`}
                                    style={{ width: dWidth,  }}
                                    width={i.width}
                                    height={i.height}
                                />
                                <Pressable onPress={() => remove(i.id)}
                                    style={[styles.button, { width: dWidth }]}
                                >
                                    <Text style={styles.text}>Delete</Text>
                                </Pressable>

                            </View>
                        )
                    })}
                </View>
            </SafeAreaView>
        </>
    );
}