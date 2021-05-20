import React  from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View, SafeAreaView} from 'react-native';
import {
    StyleSheet,
} from 'react-native';

const Container = ({children, containerStyles}) => {

    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            <KeyboardAvoidingView
                behavior={'position'}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={containerStyles}>{children}</View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
    safeAreaViewContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 16,
    },
});

export default Container;
