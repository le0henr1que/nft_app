
import {Text, TouchableOpacity} from "react-native"
import {styles} from './styles'
import {LinearGradient} from 'expo-linear-gradient';

export function Button({background, text}){
    return(
        background ?
         <TouchableOpacity 
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
            style={styles.buttonLine}
        >
            <Text style={styles.textButtonLine}>{text}</Text>
           
        </TouchableOpacity>
    )
}