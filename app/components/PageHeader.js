import { Stack, Link } from 'expo-router';
import { Pressable } from 'react-native';
import styles from "../styles";

export default function PageHeader({ page }) {

    
    var pages = {

        library: {
            link: "library",
            title: "My Library",
            button: "Library"
        },
        about: {
            link: "",
            title: "Brick That",
            button: "About"
        },
        create: {
            link: "create",
            title: "Brick That",
            button: "Create"
        }
    },
        current;
    ({ [`${page}`]: current, ...rest } = pages);

    const other = Object.values(rest);

    return (

        <Stack.Screen
            options={{
                title: `${current.title}`,
                headerLeft: () => (
                    <Pressable style={[styles.button, styles.titleButton, { marginLeft: "5%" }]}>
                        <Link replace style={[styles.text, { fontSize: 15 }]} href={`/${other[0].link}`}>{other[0].button}</Link>
                    </Pressable>
                ),
                headerRight: () => (
                    <Pressable style={[styles.button, styles.titleButton, { marginRight: "5%" }]}>
                        <Link replace style={[styles.text, { fontSize: 15 }]} href={`/${other[1].link}`}>{other[1].button}</Link>
                    </Pressable>
                )
            }}
        />
    );
}

