import React, { useState } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import { Input, Button, Container } from '../../common';

const Registration = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')

    const register = () => {
        async function postData(url = '',) {
            const response = await fetch(url = '',data = {}, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            });
            return response;
        }
        let data = {
            email: email,
            password: password,
            name: name,
            phone: "+380334610947"
        }
        postData('https://us-central1-zxsvm-zxsvm.cloudfunctions.net/api/v1/session/register', data)
            .then(data => {
                console.log(data);
            }).catch((err)=>console.log('err', err));
    }

    return (
        <Container containerStyles={styles.container}>
            <View style={styles.inputContainer}>
                {console.log('test')}
                <Input onChange={setName} value={name} label={'Name'} isValid={name}/>
                <Input onChange={setEmail} value={email} label={'Email'} isPassword isValid={email}/>
                <Input onChange={setPassword} value={password} label={'password'} isPassword isValid={password}/>
                <Input onChange={confirmedPassword} value={setConfirmedPassword} label={'password'} isPassword isValid={confirmedPassword}/>
            </View>
            <Button onChange={register} label={'Create Account'} containerStyle={{marginTop: 10}}/>
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
    inputContainer: {
        width: '100%',
        justifyContent: 'space-between',
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        width:'90%',
    },
});

export default Registration;
