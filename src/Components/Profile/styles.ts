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
        // borderBottomWidth:0.9, 
        // borderBottomColor:"#FFF",
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
        color:"#FFA7FF", 
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
        color:"#FFA7FF", 
        fontSize:14,
        fontWeight:"bold",  
    },
    contentRightPrice:{
        color:"#FFA7FF", 
        fontSize:12,
        fontWeight:"normal", 
    }, 
    lineDiv:{
        width:"100%", 
        backgroundColor:"#FFF", 
        height:1, 
        opacity:0.1
    }
});