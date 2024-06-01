import * as React from "react";
import {Text, StyleSheet, View} from "react-native";
import { useFonts } from 'expo-font';

const CustomButton = ({title, type}) => {
    const [loaded] = useFonts({
        PlusJakartaSans: require('../assets/fonts/Plus Jakarta Sans.ttf'),
        PlusJakartaSansMedium: require('../assets/fonts/Plus Jakarta Sans Medium.ttf'),
    })
    if(!loaded){
        return null;
    }
    
    return (

        <View style={(type === 0) ? [styles.buttonLargeLayout, styles.buttonColorGreen, styles.buttonCenter,{ borderRadius: 6}]:
                    (type === 1) ? [styles.buttonLargeLayout, styles.buttonCenter, {borderWidth: 1, borderColor: '#CFD1D4', borderRadius: 6}]:
                    [styles.buttonSmallLayout, styles.buttonCenter]}>
            <Text style={ [(type === 0) ? styles.buttonColorGreen : styles.buttonColorWhite, styles.buttonText]}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        fontFamily: 'PlusJakartaSans',
        fontSize: 16,
        fontWeight: '700',
    },

    buttonCenter: {
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonLargeLayout: {
        width: 335,
        height: 60,
        marginTop: 20,
        paddingHorizontal: 70,
        paddingVertical: 9,
    },
    buttonSmallLayout: {
        width: 78,
        height: 44,
        marginTop: 20,
        marginBottom: 50,
        paddingHorizontal: 22,
        paddingVertical: 8,
    },

    buttonColorGreen: {
        color: '#ffffff',
        backgroundColor: '#12B7BD'
    },
    buttonColorWhite: {
        color: '#12B7BD',
        backgroundColor: '#ffffff'
    },
});

export default CustomButton;