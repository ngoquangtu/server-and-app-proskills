import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'

const TextInput = () => {
    const [input, setInput] = useState("");

    return <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder="Enter a name"
        onChangeText={val => setInput(val)}
        defaultValue={input} />
            <Text style={styles.text}>
            Name: {input}
            </Text>
    </View>
    
}

export default TextInput