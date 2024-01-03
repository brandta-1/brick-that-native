import { SafeAreaView, Image, Text, View, Pressable } from 'react-native';
import { PageHeader } from './components';
import styles, { dynamicWidth } from './utils/styles';

export default function About() {

    const dWidth = dynamicWidth();

    return (
        <>
            <SafeAreaView style={styles.container}>
                <PageHeader page={"about"} about={true}/>
                <View style={[styles.content, styles.view, { gap: 4 }]}>

                    <View style={[
                        styles.view,
                        {
                            width: '72%',
                            aspectRatio: `2572 / 2492`,
                            marginTop: 4
                        },

                    ]}>
                        <Image
                            resizeMode={"contain"}
                            source={require('./assets/about-image.png')}
                            style={{ flex: 1 }} />
                    </View>
                    <Text style={styles.text}>{`Soldier Blade (1992)`}</Text>
                    <Text style={[styles.button, styles.text, { width: dWidth, textAlign: "justify", backgroundColor: "#fff", fontSize: 15 }]}>
                        Welcome to Brick That. Inspired by Lego, this app was created with Expo Router and React Native.
                        Head over to the create page and experiment with the settings to create your own lego art. My personal links are below, thank you for visiting.
                    </Text>
                    <Pressable onPress={() => window.open('https://github.com/brandta-1')} style={[styles.button, { width: dWidth }]}>
                        <Text style={styles.text}>GitHub</Text>
                    </Pressable>
                    <Pressable onPress={() => window.open('https://brandta-1.github.io/Alex-Brandt/')} style={[styles.button, { width: dWidth }]}>
                        <Text style={styles.text}>Portfolio</Text>
                    </Pressable>
                    <Pressable onPress={() => window.open('https://www.linkedin.com/in/alex-brandt-a12a39277')} style={[styles.button, { width: dWidth, marginBottom: 4 }]}>
                        <Text style={styles.text}>LinkedIn</Text>
                    </Pressable>
                </View>

            </SafeAreaView>
        </>
    )
}