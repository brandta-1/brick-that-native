import React, { useState, useRef } from 'react';
import { SafeAreaView, Text, Image, Pressable, View, useWindowDimensions } from 'react-native';
import DrawLego from './components/DrawLego';
import Controls from './components/Controls';
import PageHeader from './components/PageHeader';
import styles from "./styles";
import * as ImagePicker from 'expo-image-picker';
import { postDb } from './idb';

export default function Create() {

    const { height, width } = useWindowDimensions();
    const [image, setImage] = useState(null);
    const [canv, setCanv] = useState(null);
    const myRef = useRef(null);

    const pickImage = async () => {
        let res = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
        });

        if (!res.canceled) {
            console.log("this is results thing", res.assets[0])
            if (canv) {
                setCanv(null);
            }
            setImage(res.assets[0]);
        }
    };

    return (
        <>
            <SafeAreaView style={styles.container}>
                <PageHeader page={"create"} />

                <View style={[styles.content, styles.view, { marginTop: image ? 4 : height * .4 }]}>

                    {image &&
                        <>
                            <View style={{
                                width: "95%",
                                height: width > 550 ? image.height * ((550 * .95) / image.width) : image.height * ((width * .95) / image.width)
                            }}>
                                <Image
                                    source={{ uri: image.uri }} style={{
                                        flex: 1,

                                    }}
                                />
                            </View>
                        </>
                    }
                    <View style={{ flexDirection: "row ", width: "95%", justifyContent: "center" }}>
                        <Pressable style={[styles.button, { width: "50%" }]} onPress={pickImage}>
                            <Text style={styles.text}>{image ? "New image" : "Pick an image from device"}</Text>
                        </Pressable>
                        {image &&
                            <Pressable
                                style={[styles.button, { width: "50%" }]}
                                onPress={() => setCanv(true)}>
                                <Text style={styles.text}>Convert image</Text>
                            </Pressable>
                        }
                    </View>
                    <Controls img={image} deviceWidth={width} />
                    {canv &&
                        <Pressable onPress={() => postDb(myRef.current)} style={[styles.button, { width: "95%", marginTop: 0, marginBottom: 4 }]}>
                            <Text style={styles.text}>Add to library</Text>
                        </Pressable>
                    }

                    {image &&
                        <canvas
                            ref={myRef}
                            id="react-canvas-id"
                            width={image.width}
                            height={image.height}
                            style={{ width: "95%", paddingBottom: 4 }} />
                    }

                    {canv &&
                        <>
                            <DrawLego
                                picture={image}
                                c={myRef.current}
                                create={true}
                            />
                        </>
                    }

                </View >
            </SafeAreaView >
        </>
    );
}

