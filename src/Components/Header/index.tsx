import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from "../../Components/Background"
// import ImageIcon from "../../assets/Frame39.png";
// import ImageIconUser from "../../assets/Frame40.svg";
// import { Button } from "../../Components/Button"

import CryptoIcon from "../../assets/Frame39.png"
import HeaderBurguer from "../../assets/hamburguer.png"
import { styles } from "./styles"

export function Header(){
    return (
        <View style={styles.container}>
            <Image source={CryptoIcon} style={styles.cryptoImage}/>
            <Image source={HeaderBurguer}/>
        </View>
    );
}