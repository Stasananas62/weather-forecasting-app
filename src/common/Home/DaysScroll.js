import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import DayCard from '../DayCard'

const DaysScroll = ({ data, onOpen }) => {
    const { container, headerContainer, textStyle } = styles

    const [isSelect, setIsSelect] = useState(false)

    const MainContainer = isSelect ? View : ScrollView

    const onPress = () => {
        onOpen && onOpen()
        setIsSelect(!isSelect)
    }

    return (
        <>
            <View style={[container, headerContainer]}>
                <Text style={textStyle}>
                    Next 5 Days
                </Text>
            </View>
            <ScrollView horizontal scrollEnabled={!isSelect} style={{ overflow: 'visible' }}>
                {Object.values(data).slice(1).map(item => {
                    return <DayCard key={item[Object.keys(item)[0]].dt} item={item} onOpen={onPress}/>
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
