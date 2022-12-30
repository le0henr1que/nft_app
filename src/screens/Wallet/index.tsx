import React from 'react';
import { Image, Text, TextInput, View, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../Components/Background';
import { Header } from '../../Components/Header';
import { styles } from './styles';

import {Button} from "../../Components/Button"

import ImageCent from "../../assets/cent.png"
import { Activity } from '../../Components/Activity';

export function Wallet(){
    const [text, onChangeText] = React.useState("");
 
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Header/>
                    <View style={styles.content}>
                        <ScrollView style={styles.scrollView}>
                            <View style={styles.balanceBank} >

                                <View>
                                    <Text style={styles.textBoldLeft}>5.2 ETH</Text>
                                    <Text style={styles.textRegularLeft}>$10.223,23</Text>
                                </View>

                                <View>
                                    <Image source={ImageCent} style={styles.imageCent}/>
                                </View>
                            </View>

                            <Button background={true} text="Edicionar Fundos" />

                            <View style={styles.lastActivity}>
                                <Text style={styles.lastActivityText}>Últimas atividades</Text>
                                <View style={styles.painelLastActivity}>
                                    <Activity bid={true} crypto="ETH" date="23.01.2022 13:54" amountCrypto="843.55.0130" priceCrypt="1.2" priceMoney="$1.242,88"/>
                                    <Activity bid={false} crypto="ETH" date="23.01.2022 13:54" amountCrypto="843.55.0130" priceCrypt="1.2" priceMoney="$1.242,88"/>
                                    <Activity bid={true} crypto="ETH" date="23.01.2022 13:54" amountCrypto="843.55.0130" priceCrypt="1.2" priceMoney="$1.242,88"/>
                                    <Activity bid={false} crypto="ETH" date="23.01.2022 13:54" amountCrypto="843.55.0130" priceCrypt="1.2" priceMoney="$1.242,88" />
                                    <Activity bid={true} crypto="ETH" date="23.01.2022 13:54" amountCrypto="843.55.0130" priceCrypt="1.2" priceMoney="$1.242,88"/>
                                    <Activity bid={true} crypto="ETH" date="23.01.2022 13:54" amountCrypto="843.55.0130" priceCrypt="1.2" priceMoney="$1.242,88"/>
                                    <Activity bid={true} crypto="ETH" date="23.01.2022 13:54" amountCrypto="843.55.0130" priceCrypt="1.2" priceMoney="$1.242,88"/>
                                    <Activity bid={false} crypto="ETH" date="23.01.2022 13:54" amountCrypto="843.55.0130" priceCrypt="1.2" priceMoney="$1.242,88"/>
                                    <Activity bid={false} crypto="ETH" date="23.01.2022 13:54" amountCrypto="843.55.0130" priceCrypt="1.2" priceMoney="$1.242,88" />
                                    <Activity bid={true} crypto="ETH" date="23.01.2022 13:54" amountCrypto="843.55.0130" priceCrypt="1.2" priceMoney="$1.242,88" />
                                    <Activity bid={true} crypto="ETH" date="23.01.2022 13:54" amountCrypto="843.55.0130" priceCrypt="1.2" priceMoney="$1.242,88" />
                                    <Activity bid={true} crypto="ETH" date="23.01.2022 13:54" amountCrypto="843.55.0130" priceCrypt="1.2" priceMoney="$1.242,88"/>
                                </View>
                            </View>
                            
                        </ScrollView>
                    </View>
            </SafeAreaView>
        </Background>
    );
}