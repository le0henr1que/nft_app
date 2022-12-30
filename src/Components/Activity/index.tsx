
import {Image, Text, TouchableOpacity, View} from "react-native"
import {styles} from './styles'
import {LinearGradient} from 'expo-linear-gradient';

import IconMetaMask  from '../../assets/cryptoIcon.png';
import bidIcon  from '../../assets/bid.png';

interface Activity {
    bid:boolean, 
    crypto:string,
    date:string, 
    amountCrypto:string, 
    priceCrypt:string, 
    priceMoney:string
}

export function Activity({bid, crypto, date, amountCrypto, priceCrypt, priceMoney}:Activity){
    return(
       <View style={styles.container}>
            <View style={styles.contentLeft}>
                <Image source={bid == true ? bidIcon : IconMetaMask} style={styles.contentLeftImage}/>
                <View style={styles.contentLeftText}>
                    <Text style={styles.contentLeftTextValue}>{amountCrypto}</Text>
                    <Text style={bid == true ? {color:"#F600DD", fontSize:12,fontWeight:"normal"} : styles.contentLeftTextDate} >{date}</Text>
                </View>
            </View>

            <View style={styles.contentRight}>
                <Text style={bid == true ?  {color:"#F600DD", fontSize:14,fontWeight:"bold"} : styles.contentRightCryptoPrice}>{bid == true ? "-" : "+"}{priceCrypt} {crypto}</Text>
                <Text  style={bid == true ?  {color:"#F600DD", fontSize:12,fontWeight:"normal"} :  styles.contentRightPrice}>{priceMoney}</Text>
            </View>
       </View>
    )
}