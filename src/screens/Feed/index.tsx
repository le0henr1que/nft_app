import React from 'react';
import { Image, Text, TextInput, View, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from "../../Components/Background"
import { Header } from '../../Components/Header';
import { Pill } from "../../Components/Pill"
import EllipseImage from "../../assets/Ellipse.png"
import Post1 from "../../assets/imgPostOne.png";
import Post2 from "../../assets/ImagePostTwo.png"
import Post3 from "../../assets/Post3.png"

// import { Detail } from "../Detail"

import Post4 from "../../assets/Post4.png"
import { useNavigation } from "@react-navigation/native"

import { styles } from "./styles"
import { Post } from '../../Components/Post';

export function Feed(){
    const [text, onChangeText] = React.useState("");
    const filters = ["Todos", "2D", "3D", "GIFs", "Ilustracão", "BTC", "ETH"]
    const navigation = useNavigation()

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Header/>
                    <ScrollView style={styles.scrollView}>

                        <TextInput
                            style={styles.searchInput}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Pesquise por categorias, artistas..."
                            placeholderTextColor="#a28dae" 
                        />
                        <Image 
                            source={EllipseImage} 
                            style={styles.searchIcon}
                        />
                    <FlatList 
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={filters}
                            keyExtractor={item => item}
                            renderItem={({item}) => (
                                <Pill text={item} />

                            )}
                            ListEmptyComponent={() => (
                                <Text>
                                    Não há Filtors Disponiveis.
                                </Text>
                            )}
                        />
                        
                    <Post 
                        postContent={Post1} 
                        nameUser="Hacker" 
                        positionUser="Owned by" 
                        imageProfileUser={Post1} 
                        value="$2.453,23" 
                        cryptoType="ETH" 
                        valueCrypto="1.2"
                        onPress={() =>  navigation.navigate('Detail')}
                        />
                    <Post 
                        postContent={Post2} 
                        nameUser="Hacker" 
                        positionUser="Owned by" 
                        imageProfileUser={Post3} 
                        value="$2.453,23" 
                        cryptoType="ETH" 
                        valueCrypto="1.2"/>

                    <Post 
                        postContent={Post3} 
                        nameUser="Hacker" 
                        positionUser="Owned by" 
                        imageProfileUser={Post2} 
                        value="$2.453,23" 
                        cryptoType="ETH" 
                        valueCrypto="1.2"/>

                    <Post 
                        postContent={Post4} 
                        nameUser="Hacker" 
                        positionUser="Owned by" 
                        imageProfileUser={Post2} 
                        value="$2.453,23" 
                        cryptoType="ETH" 
                        valueCrypto="1.2"/>
                    </ScrollView>
                    
                </View>
            </SafeAreaView>
        </Background>
    );
}