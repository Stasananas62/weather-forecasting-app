import React, { useCallback, useState }  from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import connect from 'react-redux/lib/connect/connect';
import TodayCard from '../../common/Home/TodayCard'
import DaysScroll from '../../common/Home/TodayCard'

const HomeScreen = ({navigation, dispatch}) => {

    return (
        <View style={styles.container}>
            <TodayCard/>
            <DaysScroll/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#fff'
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



// Colors
// cloud '#ffb61b'
// rain '#49cbee'
// sun '#fa1111'