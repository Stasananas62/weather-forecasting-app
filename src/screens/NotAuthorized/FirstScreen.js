import React, { useCallback }  from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import Button from '../../common/Button';

const FirstScreen = ({navigation}) => {
    const NavigateToLogin = useCallback(
        () => navigation.navigate('Login'),
        [navigation],
    );

    const NavigateToRegistration = useCallback(
        () => navigation.navigate('Registration'),
        [navigation],
    );

    return (
        <View style={styles.container}>
            <Button onChange={NavigateToLogin} label={'Log in'} containerStyle={{marginTop: 10}}/>
            <Button onChange={NavigateToRegistration} label={'Register New User'} containerStyle={{marginTop: 10}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
});

export default FirstScreen;
