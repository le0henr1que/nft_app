import React from 'react';
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from "../../Components/Background"
import Post1 from "../../assets/imgPostOne.png"

import { BlurView } from 'expo-blur';

import { styles } from "./styles"

export function Post(){
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={Post1} style={styles.imagePost}/>
            <View style={styles.borderDescription}></View>
    
            <View style={styles.descriptionPost} >
                <Image source={Post1} style={styles.imageBlurPost}  blurRadius={20}/>

                <View style={styles.ContainerContentDescription}>

                    <Text>Owned By</Text>
                    <Text>Owned By</Text>
                </View>
                
                {/* <View style={styles.contentDescriptionRight}>
                    <Text>Owned By</Text>

                </View> */}

            </View>
           
        </TouchableOpacity>
    );
}