import React, { useCallback }  from 'react';
import {
    View,
    StyleSheet,
    Alert
} from 'react-native';
import connect from "react-redux/lib/connect/connect";
import TransactionAddButton from "../../common/CategoryDetail/TransactionAddButton";
import {selectTransactionsCostsByCategory, selectTransactionsList} from "../../store/selectors/transations";
import {transactionsActions} from "../../store/redux/transactions";

const CategoryDetail = ({navigation, transactions, dispatch, route, transactionsByCategory}) => {
    const callbackOrButtons =  useCallback((value, category)=> {
        dispatch(transactionsActions.addTransaction(
    {
                date: new Date(),
                operation:'-',
                value: Number(value),
                category:category
            }))
    }, [])

    const OpenModal = useCallback((category)=> {
        const callback = (value) => callbackOrButtons(value, category)
        Alert.prompt('Скільки було витрачено?', 'введена цифра буде записана як витрата', callback, 'plain-text', '', 'number-pad')
    }, [])

    return (
        <View style={styles.container}>
            <TransactionAddButton
                key={route.params.selectedCategory.category}
                label={route.params.selectedCategory.label}
                onPress={OpenModal}
                subLabel={transactionsByCategory(route.params.selectedCategory.category)}
                category={route.params.selectedCategory.category}
            />
            {route.params.selectedCategory.subCategories && route.params.selectedCategory.subCategories.length > 0 &&
                route.params.selectedCategory.subCategories.map((item)=>
                        <TransactionAddButton
                            label={item.label}
                            onPress={OpenModal}
                            key={item.category}
                            subLabel={transactionsByCategory(item.category)}
                            category={item.category}
                        />)
            }

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});

const mapStateToProps = (state, ownProps) => ({
    transactions: selectTransactionsList(state),
    transactionsByCategory: (category) => selectTransactionsCostsByCategory(state, category)
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);