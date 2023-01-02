
import {Image, Text, TouchableOpacity, View} from "react-native"
import {styles} from './styles'
import {LinearGradient} from 'expo-linear-gradient';

import IconProfile  from '../../assets/profile.png';
import bidIcon  from '../../assets/bid.png';

interface Profile {
    name:string, 
    image:string,
    amountCrypto:string, 
    cryptoType:string, 
    time:string
}

export function Profile({name, image, amountCrypto, cryptoType, time}:Profile){
    return(
        <>      
        <View style={styles.container}>
            <View style={styles.contentLeft}>
                <Image source={image} style={styles.contentLeftImage}/>
                <View style={styles.contentLeftText}>
                    <Text style={styles.contentLeftTextValue}>{name}</Text>
                </View>
            </View>

            <View style={styles.contentRight}>
                <Text style={styles.contentRightCryptoPrice}>{amountCrypto} {cryptoType}</Text>
                <Text  style={styles.contentRightPrice}>{time}</Text>
            </View>
       </View>
    <View style={styles.lineDiv}></View>
    </>
 
    )
}