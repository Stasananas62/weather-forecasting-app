import React, {useEffect, useMemo, useState, useCallback} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Text,
} from 'react-native';
import connect from 'react-redux/lib/connect/connect';
import { selectCity } from '../../store/selectors/locations';
import { locationsActions } from '../../store/redux/locations';
import CityItem from '../../common/Search/CityItem';
import BackArrow from "../../assets/icons/BackArrow";

const SearchScreen = ({ navigation, dispatch, city }) => {
    const [text, setText] = useState(city);
    const [cities, setCities] = useState([]);

    const getListOfCities = useCallback(() => {
        fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&offset=0&namePrefix=${text}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "de9fd753a6mshc40c9dcf811c5f4p1c2197jsnb52439762280",
                "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
            }
        })
            .then(response => {
                console.log(response);
                response.json().then( data => {
                    setCities(data.data)
                })
            })
            .catch(err => {
                console.error(err);
            });
    }, [text])

    // let today = useMemo(() => new Date().toJSON().slice(0,10).replace(/-/g,'-'), [])

    useEffect(() => {
        getListOfCities()
    }, [text])

    const setCityToStore = useCallback((text) => {
        dispatch(locationsActions.setCity(text))
        setText(text)
    }, [])

    const goBack = useCallback(() => navigation.goBack(), [navigation])

    return (
        <SafeAreaView style={{backgroundColor: '#fff'}}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={goBack}>
                        <BackArrow/>
                    </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    onChangeText={setCityToStore}
                    value={city}
                />
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {cities && cities.map((item)=> <CityItem city={item} key={item.id} onPress={setCityToStore}/>)}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        width: '10%',
    },
    input: {
        width: '90%',
        height: 35,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 5,
    },
    scrollContainer: {
        width: '100%',
    },
    text: {
        color: '#fff',
    },
});

const mapStateToProps = (state) => ({
    city: selectCity(state),
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);