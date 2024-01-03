import { useNavigation } from 'expo-router';
import { Text, Pressable, useWindowDimensions } from 'react-native';
import styles, { wide } from '../utils/styles';

export default function PageHeaderButton({ page, left }) {

    const { link, button } = page;

    const { width } = useWindowDimensions();

    const navigation = useNavigation();

    const wideMargin = width < wide ? "5%" : (width - wide) / 2

    const marginStyle = left ?
        { marginLeft: wideMargin } :
        { marginRight: wideMargin }

    return (
        <Pressable
            onPress={() => navigation.navigate(`${link}`)}
            style={[styles.button, styles.titleButton, marginStyle]}
        >
            <Text style={styles.text}>{button}</Text>
        </Pressable>
    );
}