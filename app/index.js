import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { Link } from 'expo-router';
import PageHeader from './components/PageHeader';

export default function Page() {
    return (
        <>
            <View>
                <Text>this is home</Text>
                <PageHeader page={"about"} />
                
            </View>
        </>
    );
}