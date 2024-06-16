import * as React from "react";
import {Text, StyleSheet, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomButton0 = ({title, style, onPress, textStyle}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonLargeLayout, styles.buttonBackgroundGreen, styles.buttonCenter,{ borderRadius: 6}, style]}>
            <Text style={[styles.buttonText, styles.buttonColorWhite, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const CustomButton1 = ({title, style, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonLargeLayout, styles.buttonCenter, styles.buttonBackgroundWhite, {borderWidth: 1, borderRadius: 6}, style]}>
            <Text style={[styles.buttonText, styles.buttonColorGreen]}>{title}</Text>
        </TouchableOpacity>
    );
};

const CustomButton2 = ({title, style, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonSmallLayout, styles.buttonCenter, style]}>
            <Text style={ [styles.buttonText, styles.buttonColorGreen]}>{title}</Text>
        </TouchableOpacity>
    );
};

const CustomButton3 = ({title, style, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonLargeLayout, styles.buttonCenter, {backgroundColor: '#EDEEF0', borderRadius: 6}, style]}>
            <Text style={[styles.buttonText]}>{title}</Text>
        </TouchableOpacity>
    );
};

const CustomButton4 = ({title, style, onPress, textColor}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonCenter,styles.buttonFitLayout, style]}>
            <Text style={[styles.buttonText, textColor? {color: textColor} : styles.buttonColorGreen]}>{title}</Text>
        </TouchableOpacity>
    );
};

const CustomButton5 = ({title, style, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonThin ,style]}>
            <Text style={[styles.buttonTextThin]}>{title}</Text>
            <MaterialCommunityIcons name="chevron-right" style={{fontSize: 26}}/>
        </TouchableOpacity>
    );
};

const CustomButton6 = ({title, style, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} 
        style={[styles.buttonCenter, {paddingVertical: 15, backgroundColor:'#12B7BD',borderColor: '#fff', borderWidth: 2}, style]}>
            <Text style={[styles.buttonColorWhite, {fontWeight: '700'}]}>{title}</Text>
        </TouchableOpacity>
    );
};

const BackToHomeButton = ({style, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonCenter, {flexDirection: 'row'}, style]}>
            <MaterialCommunityIcons name="chevron-left" style={[styles.backToHomeButton, {fontSize: 20}]}/>
            <Text style={[styles.buttonText, styles.buttonColorGreen, styles.backToHomeButton]}>Back to Home</Text>
        </TouchableOpacity>
    );
}

const FloatingLoginButton = ({title, style, onPress, navigation}) => {
    return (
        <TouchableOpacity 
            onPress={() => {
                navigation.navigate("Onboarding");
            }}
            style={[styles.floatingLoginButton, {backgroundColor: '#6B50C3'}, styles.buttonCenter, style]}>
            <Text style={[styles.buttonText, styles.buttonColorWhite, {fontSize: 20}]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonText: {
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

    buttonFitLayout:{
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    buttonThin:{
        width: '88%',
        flexDirection: 'row',
        height: 45,
        alignItems: 'center',
    },
    buttonTextThin: {
        fontSize: 14,
        fontWeight: '500',
        width: '94%',
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

    backToHomeButton:{
        color: '#70747E',
        fontSize: 13,
        fontWeight: 'medium',
        letterSpacing: 1,
    },

    floatingLoginButton: {
        position: 'absolute',
        width: '100%',
        height: 60,
        top: 685,
        zIndex: 1,
    },

});

export {CustomButton0, CustomButton1, CustomButton2, CustomButton3, CustomButton4, CustomButton5, CustomButton6, BackToHomeButton, FloatingLoginButton};