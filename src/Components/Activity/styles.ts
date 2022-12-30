import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        display:"flex", 
        flexDirection:"row", 
        justifyContent:"space-between",
        alignItems:"center", 
        width:"100%", 
        height:64, 
        padding:20,
        borderBottomWidth:0.9, 
        borderBottomColor:"#FFF",
        borderBottomOpacity:1
    }, 
    contentLeft:{
        display:"flex", 
        flexDirection:"row", 
        justifyContent:"space-between",
        alignItems:"center"
    },  
    contentLeftImage:{

    },  
    contentLeftText:{
        marginLeft:10

    },  
    contentLeftTextValue:{
        color:"#FFF", 
        fontSize:14,
        fontWeight:"bold", 
    },  
    contentLeftTextDate:{
        color:"#5EEBFF", 
        fontSize:12,
        fontWeight:"normal", 
    }, 
    contentRight:{
        display:"flex", 
        // flexDirection:"column", 
        justifyContent:"flex-end", 
        alignItems:"flex-end"
    },
    contentRightCryptoPrice:{
        color:"#5EEBFF", 
        fontSize:14,
        fontWeight:"bold",  
    },
    contentRightPrice:{
        color:"#5EEBFF", 
        fontSize:12,
        fontWeight:"normal", 
    }
});