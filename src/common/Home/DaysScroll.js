import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import DayCard from '../DayCard'

const DaysScroll = ({data}) => {
    const { container, headerContainer, textStyle } = styles

    return (
        <>
            <View style={[container, headerContainer]}>
                <Text style={textStyle}>
                    Next 5 Days
                </Text>
            </View>
            <ScrollView horizontal>
                {Object.values(data).slice(1).map(item => {
                    return <DayCard item={item}/>
                })}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
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
