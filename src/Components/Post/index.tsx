import React from 'react';
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from "../../Components/Background"



import { styles } from "./styles"

interface Post {
    postContent: string,
    nameUser:string, 
    positionUser:string, 
    imageProfileUser:string, 
    value:string, 
    cryptoType:string, 
    valueCrypto:string
}

export function Post({postContent, nameUser, positionUser, imageProfileUser, value, cryptoType, valueCrypto}:Post){
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={postContent} style={styles.imagePost}/>
            <View style={styles.borderDescription}></View>
    
            <View style={styles.descriptionPost} >
                <Image source={postContent} style={styles.imageBlurPost}  blurRadius={20}/>

                <View style={styles.ContainerContentDescription}>

                    <View style={styles.containerDescriptionLeft}>
                        <View style={styles.cointeinerImageProfile}>
                            <Image source={imageProfileUser} style={styles.imageProfilePost}/>
                        </View>

                        <View style={styles.containerTextProfileLeft}>
                            <Text style={styles.textRegularDescription}>{positionUser}</Text>
                            <Text style={styles.textBoldDescription}>{nameUser}</Text>
                        </View>

                    </View>

                    <View style={styles.containerTextProfileRight}>
                        <View style={styles.containerTextProfileRight}>
                            <Text style={styles.textRegularDescription}>{value}</Text>
                            <Text style={styles.textBoldDescription}>{valueCrypto} {cryptoType}</Text>
                        </View>
                    </View>
                </View>


            </View>
           
        </TouchableOpacity>
    );
}