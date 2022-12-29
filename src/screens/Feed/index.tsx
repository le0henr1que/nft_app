import React from 'react';
import { Image, Text, TextInput, View, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from "../../Components/Background"
import { Header } from '../../Components/Header';
import { Pill } from "../../Components/Pill"
import EllipseImage from "../../assets/Ellipse.png"

import { styles } from "./styles"
import { Post } from '../../Components/Post';

export function Feed(){
    const [text, onChangeText] = React.useState("");
    const filters = ["Todos", "2D", "3D", "GIFs", "Ilustracão"]
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
                        
                    <Post/>
                    <Post/>
                    
                    </ScrollView>
                    
                </View>
            </SafeAreaView>
        </Background>
    );
}