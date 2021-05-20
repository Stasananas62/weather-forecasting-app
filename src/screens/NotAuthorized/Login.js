import React, { useState } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import { Input, Button, Container } from '../../common';
import authAPI from '../../services/api/auth';

const Login = ({navigation}) => {
    const [name, setName] = useState('')
    const [isValidName, setIsValidName] = useState(false)

    const [password, setPassword] = useState('')
    const [isValidPassword, setIsValidPassword] = useState(false)

    const login = () => {
        authAPI.login('',{userName: name, password}).then(()=>{
            console.log('Test')
            navigation.goBack()
        }).catch((err) => {
            setIsValidName(false)
            setIsValidPassword(false)
            console.log(err)
        })
    }

    const onNameChange = (text) => {
        setName(text)
        setIsValidName(!!text)
    }

    const onPasswordChange = (text) => {
        setPassword(text)
        setIsValidPassword(!!text)
    }

    return (
        <Container containerStyles={styles.container}>
            {/*<View style={styles.big}/>*/}
            <View style={styles.inputContainer}>
                <Input onChange={onNameChange} value={name} label={'Login'} isValid={name && isValidName}/>
                <Input onChange={onPasswordChange} value={password} label={'password'} isPassword isValid={password && isValidPassword}/>
            </View>
            <Button onChange={login} label={'Sign in'} containerStyle={{marginTop: 10}} disabled={!(name && password)}/>

        </Container>
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
    big: {
        width: '100%',
        height: 500,
    },
    inputContainer: {
        width: '100%',
        height: '20%',
        justifyContent: 'space-between',
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        width:'90%',
    },
});

export default Login;
