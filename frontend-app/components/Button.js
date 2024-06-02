import * as React from "react";
import {Text, StyleSheet, TouchableOpacity} from "react-native";
import { useFonts } from 'expo-font';

const CustomButton0 = ({title, style}) => {
    const [loaded] = useFonts({
        PlusJakartaSans: require('../assets/fonts/Plus Jakarta Sans.ttf'),
        PlusJakartaSansMedium: require('../assets/fonts/Plus Jakarta Sans Medium.ttf'),
    })
    if(!loaded){
        return null;
    }
    
    return (
        <TouchableOpacity style={[styles.buttonLargeLayout, styles.buttonBackgroundGreen, styles.buttonCenter,{ borderRadius: 6}, style]}>
            <Text style={[styles.buttonText, styles.buttonColorWhite]}>{title}</Text>
        </TouchableOpacity>
    );
};

const CustomButton1 = ({title, style}) => {
    const [loaded] = useFonts({
        PlusJakartaSans: require('../assets/fonts/Plus Jakarta Sans.ttf'),
        PlusJakartaSansMedium: require('../assets/fonts/Plus Jakarta Sans Medium.ttf'),
    })
    if(!loaded){
        return null;
    }
    
    return (
        <TouchableOpacity style={[styles.buttonLargeLayout, styles.buttonCenter, styles.buttonBackgroundWhite, {borderWidth: 1, borderRadius: 6}, style]}>
            <Text style={ [styles.buttonText, styles.buttonColorGreen]}>{title}</Text>
        </TouchableOpacity>
    );
};

const CustomButton2 = ({title, style}) => {
    const [loaded] = useFonts({
        PlusJakartaSans: require('../assets/fonts/Plus Jakarta Sans.ttf'),
        PlusJakartaSansMedium: require('../assets/fonts/Plus Jakarta Sans Medium.ttf'),
    })
    if(!loaded){
        return null;
    }
    
    return (
        <TouchableOpacity style={[styles.buttonSmallLayout, styles.buttonCenter, style]}>
            <Text style={ [styles.buttonText, styles.buttonColorGreen]}>{title}</Text>
        </TouchableOpacity>
    );
};

const CustomButton3 = ({title, style}) => {
    const [loaded] = useFonts({
        PlusJakartaSans: require('../assets/fonts/Plus Jakarta Sans.ttf'),
        PlusJakartaSansMedium: require('../assets/fonts/Plus Jakarta Sans Medium.ttf'),
    })
    if(!loaded){
        return null;
    }
    
    return (
        <TouchableOpacity style={[styles.buttonLargeLayout, styles.buttonCenter, {backgroundColor: '#EDEEF0', borderRadius: 6}, style]}>
            <Text style={[styles.buttonText]}>{title}</Text>
        </TouchableOpacity>
    );
};

const CustomButton4 = ({title, style}) => {
    const [loaded] = useFonts({
        PlusJakartaSans: require('../assets/fonts/Plus Jakarta Sans.ttf'),
        PlusJakartaSansMedium: require('../assets/fonts/Plus Jakarta Sans Medium.ttf'),
    })
    if(!loaded){
        return null;
    }
    
    return (
        <TouchableOpacity style={[styles.buttonCenter, styles.buttonLargeLayout, style]}>
            <Text style={[styles.buttonText, styles.buttonColorGreen]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        fontFamily: 'PlusJakartaSans',
        fontSize: 16,
        fontWeight: '700',
        color: '#0B121F',
    },

    buttonCenter: {
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
        height: 44,
        marginTop: 20,
        marginBottom: 50,
        paddingHorizontal: 22,
        paddingVertical: 8,
    },

    buttonColorWhite: {
        color: '#ffffff',
    },

    buttonBackgroundWhite:{
        backgroundColor: '#ffffff',
    },

    buttonColorGreen: {
        color: '#12B7BD',
    },
    
    buttonBackgroundGreen:{
        backgroundColor: '#12B7BD',
    },
});

export {CustomButton0, CustomButton1, CustomButton2, CustomButton3, CustomButton4};