import PageHeader from './components/PageHeader';
import Canvas from './components/Canvas';
import { getDb, deleteDb } from './idb';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Pressable, Text } from 'react-native';
import styles from './styles';
export default function Library() {

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
                <View style={[styles.content]}>
                    {!images.length && (

                        <Text style={[styles.notice, styles.text]}>Your library is empty. Go to the Create screen to add art</Text>

                    )}

                    {images.map((i, j) => {
                        return (
                            <View key={i.id} style={[styles.view, { marginTop: 4 }]}>

                                <Canvas
                                    picture={i}
                                    name={`canvas-${j}`}
                                    style={{ width: "95%", marginBottom: 4 }}
                                    width={i.width}
                                    height={i.height}
                                />

                                <Pressable onPress={() => remove(i.id)} style={[styles.button, { width: "95%", marginTop: 0, marginBottom: 4 }]}>
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