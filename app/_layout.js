import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <>
            <Stack

                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#20232a',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30
                    },
                    contentStyle: { backgroundColor: "#fff" }

                }}
            >
            </Stack>
        </>
    );
}
