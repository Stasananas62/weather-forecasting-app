import React, { useCallback, useState }  from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import connect from "react-redux/lib/connect/connect";
import CardController from "../../common/HomeScreen/CardController";
import {cardTypes} from "../../core/constants";

const HomeScreen = ({navigation, transactions, dispatch}) => {
    const categoriesData = [
        {icon: 'utensils', label: 'Їжа', category:'food', subCategories: [
                {label: 'Продукти', category:'products', costs: 0},
                {label: 'Ресторани', category:'restaurants', costs: 0},
            ], costs: 0 },
        {icon: 'bus', label: 'Транспорт', category:'transport' },
        {icon: 'plus', label: 'Створити', category:'add' }, ]

    const [config, setConfig] = useState({backgroundColor: '#B65EBA', data: categoriesData, type: cardTypes.categories})

    const onChangeConfig = useCallback((type)=>{
    switch (type){
        case cardTypes.categories:
            setConfig({backgroundColor: '#B65EBA', data: categoriesData, type: cardTypes.categories})
            break
        case cardTypes.dashBoard:
            setConfig({backgroundColor: '#2E8DE1', data: {}, type: cardTypes.dashBoard})
            break
        case cardTypes.filters:
            setConfig({backgroundColor: '#8A64EB', data: {}, type: cardTypes.filters})
            break
    }

    }, [])

    return (
        <View style={styles.container}>
            <CardController config={config} onChangeConfig={onChangeConfig}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});

const mapStateToProps = (state) => ({
    transactions: state.transactions
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);