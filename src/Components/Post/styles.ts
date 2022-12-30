import { StyleSheet } from "react-native";
import { Background } from "../Background";

export const styles = StyleSheet.create({
    container: {
      marginTop:30, 
      borderRadius:12
    },
    imagePost:{
      borderRadius:12, 
      width:"100%", 
      height:380
    }, 
    
    borderDescription:{

      borderRadius:12,
      bottom: 80,
      position: 'absolute',
      opacity:0.2,
      height:1, 
      width:"100%",
      backgroundColor:"#FFF", 
     
    },
    descriptionPost:{
     
      height: 80,
      overflow: 'hidden',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      borderBottomLeftRadius:12,
      borderBottomRightRadius:12,
    }, 
    imageBlurPost:{

      height: 350,
      width: "100%",
      position: 'absolute',
      bottom: 0,
      left:0, 
      right:0,

      justifyContent:"space-between", 
      alignItems:"center", 
      flexDirection:"row",

      borderBottomLeftRadius:12,
      borderBottomRightRadius:12,
    }, 
    ContainerContentDescription:{

      width: "100%",
      justifyContent:"space-between", 
      alignItems:"center", 
      flexDirection:"row",
      paddingLeft:24, 
      paddingRight:24, 
      paddingTop:16
    }, 
    containerDescriptionLeft:{
      justifyContent:"space-between", 
      alignItems:"center", 
      flexDirection:"row",
      
    }, 
    imageProfilePost:{
      width:48, 
      height:48, 
      borderRadius:50, 
      borderWidth:1,
      borderColor:"#FFF", 
    }, 
    cointeinerImageProfile:{
      width:48, 
      height:48, 
      borderRadius:50, 
    }, 
    textBoldDescription:{
      fontSize:18, 
      color:"#FFF", 
      fontWeight:"bold"
    }, 
    textRegularDescription:{
      fontSize:12, 
      color:"#FFF", 
      fontWeight:"normal"
    },
    containerTextProfileLeft:{
      marginLeft:12, 
      flexDirection:"column",
    }, 
    containerTextProfileRight:{
      marginLeft:12, 
      flexDirection:"column",
      justifyContent:"flex-end", 
      display:"flex", 
      alignItems:"flex-end"
    }
   
    
     
});