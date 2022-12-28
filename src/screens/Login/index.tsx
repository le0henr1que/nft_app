import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
// import { Background } from "../../Components/Background"
import ImageIcon from "../../assets/Frame39.png";
import { Button } from "../../Components/Button"
import { styles } from "./styles"
export function Login(){
    return (
        <SafeAreaView style={styles.container}>
            <Image
                // style={styles.tinyLogo}
                source={ImageIcon}
            />
                <Button background={true} text="Entrar"/>
                
                <Button background={false} text="Entrar com a Metamask"/>
        </SafeAreaView>
    );
}