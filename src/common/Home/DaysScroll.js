import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import DayCard from '../DayCard'

const DaysScroll = () => {
    const { headerContainer, container, textStyle } = styles
    return (
        <>
            <View style={headerContainer}>
                <Text style={textStyle}>
                    Next 5 Days
                </Text>
            </View>
            <ScrollView horizontal>
                <DayCard/>
                <DayCard/>
                <DayCard/>
                <DayCard/>
                <DayCard/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: 20,
        marginVertical: 50,
    },
    headerContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        marginVertical: 50,
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default DaysScroll;
