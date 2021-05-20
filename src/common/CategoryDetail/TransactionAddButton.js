import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

const TransactionAddButton = ({ onPress, label, containerStyle, disabled, subLabel, category}) => {
    const ButtonContainer = disabled ? View : TouchableOpacity
    return (
        <ButtonContainer style={[disabled ? styles.disabledContainer : styles.container, containerStyle]} onPress={() => onPress(category)}>
            <View>
                <Text style={disabled ? styles.disabledTextStyle : styles.textStyle}>{label}</Text>
                <Text style={disabled ? styles.disabledTextStyle : styles.textStyle}>{subLabel}</Text>
            </View>
            <Icon name="plus" size={30} />
        </ButtonContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        borderTopWidth: 1,
        borderTopColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    disabledContainer: {
        width: '100%',
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'rgba(144, 167, 196, 0.7)',
        borderTopWidth: 1,
        borderTopColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    textStyle: {
    },
    disabledTextStyle: {
        color: 'rgba(224,224,224,0.7)',
    },
});

export default TransactionAddButton;
