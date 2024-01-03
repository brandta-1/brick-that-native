import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <>
            <Stack

                screenOptions={{
                    headerStyle: {
                       
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0
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
