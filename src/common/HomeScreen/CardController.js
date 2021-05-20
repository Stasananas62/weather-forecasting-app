import React, { useMemo, useCallback } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import {cardTypes} from '../../core/constants';
import CategoryItem from './CategoryItem';
import { useNavigation } from '@react-navigation/native';

const CardController = ({ config, onChangeConfig }) => {
    const navigation = useNavigation();

    const onCategoryPress = useCallback((selectedCategory) => {
        // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${'London'}&appid=${'3f0faf81a417791411bb372d795c5f8e'}`, {
        //     method: 'GET',
        // }).then((res) => {
        //     res.json().then( data => {
        //         console.log(data)
        //     })
        // }).catch(err => console.log(err));
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${'London'}&appid=${'3f0faf81a417791411bb372d795c5f8e'}`, {
            method: 'GET',
        }).then((res) => {
            res.json().then( data => {
                console.log(data)
            })
        }).catch(err => console.log(err));
        // navigation.navigate('CategoryDetail', { selectedCategory })
    }, [config.type, navigation])

    const CardContent = useMemo(()=>{
        switch (config.type){
            case cardTypes.categories:
                return <>{config?.data?.map((item)=> <CategoryItem key={item.category} item={item} onPress={onCategoryPress} />)}</>
            case cardTypes.dashBoard:
                break
            case cardTypes.filters:
                return null
        }
    }, [config.type])

    return (
        <View style={styles.cardContainer}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    onPress={() => onChangeConfig(cardTypes.categories)}
                    style={[styles.fileButton, {backgroundColor: '#B65EBA'}]}>
                    <Text style={styles.text}>Категорії</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onChangeConfig(cardTypes.dashBoard)}
                    style={[styles.fileButton, {backgroundColor: '#2E8DE1'}]}>
                    <Text style={styles.text}>ДашБорд</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onChangeConfig(cardTypes.filters)}
                    style={[styles.fileButton, {backgroundColor: '#8A64EB'}]}>
                    <Text style={styles.text}>Фільтри</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.actionsContainer, {backgroundColor: config.backgroundColor}]}>
                {CardContent}
                <Image
                    style={{width: 50, height: 50}}
                    source={{
                        uri: `http://openweathermap.org/img/w/${"04d"}.png`,
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    actionsContainer: {
        width: '100%',
        height: '93%',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        bottom: 0,
        flexDirection: 'row',
        paddingTop: 16,
    },
    fileButton: {
        width: '33.3333%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    buttonsContainer: {
        width: '100%',
        height: '8%',
        flexDirection: 'row',
    },
    cardContainer: {
        width: '100%',
        height: '70%',
    },
    text: {
        color: '#fff',
    },
});

export default React.memo(CardController);
