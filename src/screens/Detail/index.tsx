import React from 'react';
import { Image, Text, TextInput, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../Components/Background';
import { Header } from '../../Components/Header';
import { styles } from './styles';

import ImgOne from "../../assets/imgPostOne.png";

import ImageProfile from "../../assets/profile.png";
import ImageProfileDois from "../../assets/profileArthur.png";

import btnClose from "../../assets/close.png";
import { Button } from '../../Components/Button';
import { Profile } from '../../Components/Profile';

export function Detail(){
    const [text, onChangeText] = React.useState("");
 
    return (
        <Background>
            <ScrollView style={styles.scrollView}>

                <Image source={ImgOne} style={styles.imageDetail}/>
                <TouchableOpacity style={styles.buttonClose}>
                    <Image source={btnClose}/>
                </TouchableOpacity>
                <SafeAreaView style={styles.container}>
                    <View style={styles.content}>
                    
                            <Text style={styles.buttonIdNft}>#2378</Text>
                            <Text style={styles.buttonNameNft}>Buz Sheep</Text>
                            
                                <View style={styles.borderOpacity}></View>
                                <View style={styles.contentDetailProfile}>
                                    <View style={styles.contentDetailProfileImage}>
                                        <Image source={ImgOne} style={styles.imageProfile}/>
                                        <View style={styles.textProfile}>
                                            <Text style={styles.textProfileArea}>Owned by</Text>
                                            <Text style={styles.textProfileName}>Buz Sheep</Text>
                                        </View>
                                    </View>
                                    <View style={styles.buttonFollow}>
                                        <Button background={false} text="Seguir"/>
                                    </View>
                                </View>
                                <View style={styles.borderOpacity}></View>


                                <Text style={styles.textBold}>Ultimos Lances</Text>

                                <View style={styles.painelLastActivity}>
                                    <Profile name="Angel" image={ImageProfile} amountCrypto="0.8" cryptoType="ETH" time="2h atrás"/>
                                    <Profile name="Arthur" image={ImageProfileDois} amountCrypto="0.72" cryptoType="BTC" time="2h atrás"/>
                                    <Profile name="Angel" image={ImageProfile} amountCrypto="0.8" cryptoType="ETH" time="2h atrás"/>
                                    <Profile name="Arthur" image={ImageProfileDois} amountCrypto="0.8" cryptoType="ETH" time="2h atrás"/>
                                </View>
                                <View style={styles.buttonLoad}>
                                    <Button background={false} text="Carregar mais"/>
                                </View>
                                <View style={styles.borderOpacity}></View>
                                
                                <View>
                                    <Text>Descrição</Text>

                                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                                </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </Background>
    );
}