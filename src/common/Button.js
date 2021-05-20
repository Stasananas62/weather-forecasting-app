import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

const Button = ({ onChange, label, containerStyle, disabled }) => {
    const ButtonContainer = disabled ? View : TouchableOpacity
    return (
        <ButtonContainer style={[disabled ? styles.disabledContainer : styles.container, containerStyle]} onPress={onChange}>
            <Text style={disabled ? styles.disabledTextStyle : styles.textStyle}>{label}</Text>
        </ButtonContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#90a7c4',
        borderRadius: 20,
    },
    disabledContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'rgba(144, 167, 196, 0.7)',
        borderRadius: 20,
    },
    textStyle: {
        color: '#ffffff',
    },
    disabledTextStyle: {
        color: 'rgba(224,224,224,0.7)',
    },
});

export default Button;
