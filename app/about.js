import { Text, View } from 'react-native';
import { PageHeader } from './components';

export default function About() {
    return (
        <>
            <View>
                <Text>this is about</Text>
                <PageHeader page={"about"} />
            </View>
        </>
    )
}