import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text
} from 'react-native';

import Input from '../common/Input';
import Button from "../common/Button";

const HomePage = () => {
const [name, setName] = useState('')
const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input onChange={setName} value={name} label={'Login'} isValid={name}/>
        <Input onChange={setPassword} value={password} label={'password'} isPassword isValid={password}/>
      </View>
  <Button onChange={()=>{}} label={'Sign in'} containerStyle={{marginTop: 10}}/>
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

export default HomePage;
