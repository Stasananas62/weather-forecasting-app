import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity, Image
} from 'react-native';

const TodayCard = ({ onChange, containerStyle }) => {
    const {headerCenter, secondaryTextStyle, row, container, textStyle, bigTextStyle, middleTextStyle, boldTextStyle} = styles
    return (
        <>
            <View style={headerCenter}>
                <Text style={secondaryTextStyle}>
                    Today
                </Text>
            </View>
            <TouchableOpacity style={[container, containerStyle]} onPress={onChange}>
                <View style={row}>
                    <Image
                        style={{width: 100, height: 100}}
                        source={{
                            uri: `http://openweathermap.org/img/w/${"04d"}.png`,
                        }}
                    />
                    <Text style={[textStyle, bigTextStyle]}>
                        15
                    </Text>
                </View>
                <Text style={[textStyle, middleTextStyle]}>
                    Clouds
                </Text>
                <Text style={[textStyle, middleTextStyle, boldTextStyle]}>
                    Humidity
                </Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        backgroundColor: '#ffb61b',
        borderRadius: 20,
    },
    headerCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(144, 167, 196, 0.1)',
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 6,
        paddingVertical: 3
    },
    textStyle: {
        color: '#ffffff',
    },
    secondaryTextStyle: {
        color: '#8c8b8b',
    },
    bigTextStyle: {
        fontSize: 100,
    },
    middleTextStyle: {
        fontSize: 30,
    },
    boldTextStyle: {
        fontWeight: "bold"
    },
    row: {
        flexDirection: 'row'
    }
});

export default TodayCard;
