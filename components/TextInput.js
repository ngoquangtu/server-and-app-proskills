import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomTextInput = ({placeHolder, warningText, style, onChangeText, onBlur}) => {

    return <View style={[style, {marginTop: 10}]}>
        <TextInput style={styles.input}
        placeholder={placeHolder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        defaultValue={""}/>
        <Text style={[styles.text]}>{warningText}</Text>
    </View>;
};

const CustomSecureTextInput = ({placeHolder, warningText, style, onChangeText, onBlur}) => {

    const [hidePassword, setHidePassword] = useState(true);

    return <View style={[style, {marginTop: 10}]}>
        <TextInput style={styles.input}
        placeholder={placeHolder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={hidePassword}
        defaultValue={""}></TextInput>
        <TouchableOpacity style={styles.iconField} onPress={()=>{
            setHidePassword(!hidePassword);
        }}>
            <MaterialCommunityIcons name={hidePassword? 'eye-outline' : 'eye-off-outline'} style={styles.icon}></MaterialCommunityIcons>
        </TouchableOpacity>
        <Text style={[styles.text]}>{warningText}</Text>
    </View>;

};

export {CustomTextInput, CustomSecureTextInput};

const styles = StyleSheet.create({
    input:{
        width: 335,
        height: 43,
        borderBottomWidth: 1,
        borderBottomColor: '#cfd1d4',
        letterSpacing: 1,
        fontSize: 16,
    },
    text:{
        fontSize: 12,
        color: '#f04438',
        width: 310,
        marginTop: 4,
    },
    icon: {
        fontSize: 24,
        color: '#70747E',
    },
    iconField: {
        position: 'absolute',
        top: 12,
        right: 15,
    }
})