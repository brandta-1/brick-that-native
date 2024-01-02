import { useState } from 'react';
import { SafeAreaView, Image, View, useWindowDimensions } from 'react-native';
import { Controls, PageHeader, Canvas } from './components';
import styles, { wide } from './utils/styles';
import * as ImagePicker from 'expo-image-picker';

export default function Page() {

    const { height, width } = useWindowDimensions();
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
                <View style={[styles.content, styles.view, { marginTop: image ? 4 : height * .4 }]}>

                    {image &&
                        <>
                            <View style={{
                                width: "95%",
                                height: width > wide ? image.height * ((wide * .95) / image.width) : image.height * ((width * .95) / image.width)
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
                    />

                    {canv &&
                        <Canvas
                            picture={image}
                            change={changeCurrent}
                            style={{ width: "95%", marginBottom: 4 }}
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

