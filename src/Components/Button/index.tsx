
import {Image, Text, TouchableOpacity} from "react-native"
import {styles} from './styles'
import {LinearGradient} from 'expo-linear-gradient';

import { IconMetaMask } from '../../../assets/metaMask.png';

export function Button({background, text, onPress}){
    return(
        background ?
         <TouchableOpacity 
            onPress={onPress}
            style={styles.button}
        >
            <LinearGradient 
                colors={['#9A4DFF', '#F600DD']}
                start={{ x: 0, y: 0 }} end={{ x: 2, y: 3 }}
                style={styles.button}>
                
              
                    <Text style={styles.textButton}>{text}</Text>
               

            </LinearGradient>

        
        </TouchableOpacity>
        :

        <TouchableOpacity 
            onPress={onPress}
            style={styles.buttonLine}
        >
            <Text style={styles.textButtonLine}>{text}</Text>
            {/* <Image source={IconMetaMask} style={{height: 100, width: 100}}/> */}
        </TouchableOpacity>
    )
}