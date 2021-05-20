import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text
} from 'react-native';

const HomePage = ({value, onChange, label, isPassword, isValid}) => {
    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <TextInput
                style={isValid ? styles.inputStyle : styles.errorInputStyle}
                onChangeText={onChange}
                value={value}
                secureTextEntry={isPassword}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        width:'100%',
    },
    errorInputStyle: {
        height: 40,
        borderColor: 'red',
        borderBottomWidth: 1,
        width:'100%',
    },
});

export default HomePage;
