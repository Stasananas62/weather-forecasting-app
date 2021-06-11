import React from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Cross from '../../assets/icons/Cross';

const CloseButton = ({onPress, containerStyle}) => {

    return (
        <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
            <Cross />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#B4B4B4',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        marginTop: 15,
    },
});

export default CloseButton;
