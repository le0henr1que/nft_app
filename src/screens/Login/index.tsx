import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from "../../Components/Background"
import ImageIcon from "../../assets/Frame39.png";
// import ImageIconUser from "../../assets/Frame40.svg";
import { useNavigation } from "@react-navigation/native"
import { Feed } from '../Feed';

import { Button } from "../../Components/Button"
import { styles } from "./styles"



export function Login(){
    const [text, onChangeText] = React.useState();
    const navigation = useNavigation()
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    // style={styles.tinyLogo}
                    source={ImageIcon}
                />

                <Text style={styles.textBold}>Crypto</Text>
                <Text style={styles.textRegular}>O maior marketplace de NFTs do Brasil</Text>

                <TextInput
                    style={styles.emailInput}
                    onChangeText={onChangeText}
                    value={text}
                />
                {/* <Image source={ImageIconUser} style={{height: 100, width: 100}}/> */}
                <TextInput
                    style={styles.passInput}
                    onChangeText={onChangeText}
                    value={text}
                    secureTextEntry={true}
                />
                <Text style={styles.textRegularPurple}>Recuperar a senha?</Text>


                <Button 
                    background={true} 
                    text="Entrar" 
                    onPress={() =>  navigation.navigate('Feed')}
                />

                    <View style={styles.horizontalLine}></View>

                <Button background={false} text="Entrar com a Metamask"/>
            </SafeAreaView>
        </Background>
    );
}