import React, {useCallback} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CityItem = ({city, onPress}) => {
    const { container } = styles

    const navigation = useNavigation()

    const onCitySelect = useCallback(() => {
        onPress(`${city.city}, ${city.countryCode}`)
        navigation.goBack()
    }, [])

    return (
        <TouchableOpacity onPress={onCitySelect} style={container}>
            <Text>{city.city}, {city.countryCode}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        justifyContent: 'center',
        height: 50,
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default CityItem;
