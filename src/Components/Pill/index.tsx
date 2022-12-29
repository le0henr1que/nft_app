import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from "../../Components/Background"


import { styles } from "./styles"

export function Pill({text}){
    return (
        <View style={styles.container}>
            <Text style={styles.textPill}>{text}</Text>
        </View>
    );
}