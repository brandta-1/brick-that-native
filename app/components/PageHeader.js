import { Stack } from 'expo-router';
import { PageHeaderButton } from '../components';

export default function PageHeader({ page, about }) {

    var pages = {

        library: {
            link: "library",
            title: "My Library",
            button: "Library"
        },
        about: {
            link: "about",
            title: "Brick That",
            button: "About"
        },
        create: {
            link: "index",
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
                    <PageHeaderButton page={other[0]} left about={about}/>
                ),
                headerRight: () => (
                    <PageHeaderButton page={other[1]} about={about}/>
                )
            }}
        />
    );
}

