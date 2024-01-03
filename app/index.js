import { useState } from 'react';
import { SafeAreaView, Image, View, useWindowDimensions } from 'react-native';
import { Controls, PageHeader, Canvas } from './components';
import styles, { dynamicWidth } from './utils/styles';
import * as ImagePicker from 'expo-image-picker';

export default function Page() {

    const dWidth = dynamicWidth();
    const { height } = useWindowDimensions();
    const [image, setImage] = useState(null);
    const [canv, setCanv] = useState(null);
    const [current, setCurrent] = useState(null);

    const changeCurrent = (e) => setCurrent(e);

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
                    />

                    {canv &&
                        <Canvas
                            picture={image}
                            change={changeCurrent}
                            style={{ width: dWidth, paddingBottom: 4 }}
                            width={image.width}
                            height={image.height}
                            drawLego={true}
                        />
                    }
                </View >
            </SafeAreaView >
        </>
    );
}

