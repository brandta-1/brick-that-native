import { useState } from 'react';
import { SafeAreaView, Image, View, useWindowDimensions } from 'react-native';
import { Controls, PageHeader, Canvas } from './components';
import styles, { dynamicWidth } from './utils/styles';
import { postDb } from './utils/idb';
import * as ImagePicker from 'expo-image-picker';

export default function Page() {

    //init stateful variables
    const dWidth = dynamicWidth();
    const { height } = useWindowDimensions();
    const [image, setImage] = useState(null);
    const [canv, setCanv] = useState(null);
    const [current, setCurrent] = useState(null);
    const [showSettings, setShowSettings] = useState(false);
    const [fidelity, setFidelity] = useState(32);
    const [lib, setLib] = useState();

    const addToLib = async (c) => {
        await postDb(c);
        setLib(["Image added", true]);
    }

    const openCloseSettings = () => setShowSettings(!showSettings)

    //time-sensitive work-around. TODO: properly manage state with fidelity buttons
    const changeFidelity = (e) => {

        setFidelity(e);
        if (canv) {
            setCanv(null);
        }
        setLib(['Add to library', false])
    };

    const changeCurrent = (e) => setCurrent(e);

    //retrieve image from user
    const pickImage = async () => {
        let res = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
        });

        if (!res.canceled) {
            if (canv) {
                setCanv(null);
            }
            setImage(res.assets[0]);
            setLib(['Add to library', false])
        }
    };

    return (
        <>
            <SafeAreaView style={styles.container}>
                <PageHeader page={"create"} />
                <View style={[styles.content, styles.view, { gap: 4, marginTop: image ? 4 : height * .4 }]}>

                    {image &&
                        <>
                            <View style={{
                                width: dWidth,
                                aspectRatio: `${image.width} / ${image.height}`
                            }}>
                                <Image source={{ uri: image.uri }} style={{ flex: 1 }} />
                            </View>
                        </>
                    }

                    <Controls
                        img={image}
                        isCanv={canv}
                        currCanv={current}
                        pickImage={pickImage}
                        setCanv={setCanv}
                        dWidth={dWidth}
                        addToLib={addToLib}
                        lib={lib}
                        showSettings={showSettings}
                        openCloseSettings={openCloseSettings}
                        fidelity={fidelity}
                        changeFidelity={changeFidelity}
                    />

                    {canv &&
                        <Canvas
                            picture={image}
                            change={changeCurrent}
                            style={{ width: dWidth, paddingBottom: 4 }}
                            width={image.width}
                            height={image.height}
                            drawLego={true}
                            fidelity={fidelity}
                        />
                    }
                </View >
            </SafeAreaView >
        </>
    );
}

