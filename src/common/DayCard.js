import React from 'react';
import {
    View,
    StyleSheet, Image, Text, TouchableOpacity,
} from 'react-native';

const DaysCard = () => {
    const {
        row,
        container,
        textStyle,
        bigTextStyle,
        middleTextStyle,
        boldTextStyle,
        bottomTextContainer,
        secondaryTextStyle
    } = styles
    return (
            <View style={container} >
                <View>
                    <Text style={[textStyle, middleTextStyle]}>
                        12:00
                    </Text>
                    <Text style={[textStyle, middleTextStyle, boldTextStyle]}>
                        Wednesday
                    </Text>
                    <Image
                        style={{width: 50, height: 50}}
                        source={{
                            uri: `http://openweathermap.org/img/w/${"04d"}.png`,
                        }}
                    />
                    <Text style={[textStyle, bigTextStyle]}>
                        15˚
                    </Text>
                    <View style={[row, bottomTextContainer]}>
                        <Text style={[secondaryTextStyle]}>
                            3˚
                        </Text>
                        <Text style={[textStyle]}>
                            15˚
                        </Text>
                    </View>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        backgroundColor: '#ffb61b',
        borderRadius: 20,
        marginRight: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    textStyle: {
        color: '#ffffff',
    },
    secondaryTextStyle: {
        color: 'rgba(255,255,255, 0.9)',
    },
    bigTextStyle: {
        fontSize: 50,
    },
    middleTextStyle: {
        fontSize: 15,
    },
    boldTextStyle: {
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
    },
    bottomTextContainer: {
        justifyContent: 'space-between'
    }
});

export default DaysCard;
