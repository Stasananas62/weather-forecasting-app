import React, {useCallback} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CategoryItem = ({ item, onPress}) => {
    const {icon, label, category} = item

    const onCategoryPress = useCallback(() => {
        onPress(item)
    }, [onPress, category])

    return (
        <TouchableOpacity style={styles.container} onPress={onCategoryPress}>
            <Icon name={icon} size={25} />
            <Text >{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        backgroundColor: '#90a7c4',
        borderRadius: 37,
    },
});

export default CategoryItem;
