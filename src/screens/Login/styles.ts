import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex:1, 
      alignItems:'center'
    }, 
    textBold:{
      color:"#FFF", 
      fontSize:32,
      // fontWeight:700
      lineHeight:40
    }, 
    textRegular:{
      color:"#FFFFFF", 
      opacity: 0.5, 
      fontSize: 14, 
      marginTop: 4, 
      lineHeight:20, 
    }, 

    horizontalLine:{
        width:171, 
        height:1, 
        backgroundColor:"#FFF", 
        marginBottom:48, 
        marginTop:48, 
        opacity: 0.2
    }, 
    emailInput:{
      width:342, 
      height:48, 
      borderColor:"#474053", 
      borderWidth:2, 
      backgroundColor:"#211D28", 
      marginTop:32, 
      borderTopLeftRadius:12,
      borderTopRightRadius:12, 
      padding:12,
      fontSize:14, 
      color:"#FFF", 
      opacity: 0.5
    }, 
    passInput:{
      width:342, 
      height:48, 
      borderColor:"#474053", 
      borderWidth:2, 
      backgroundColor:"#211D28", 
      borderBottomLeftRadius:12, 
      borderBottomRightRadius:12, 
      marginTop:-2, 
      padding:12, 
      fontSize:14, 
      color:"#FFF", 
      opacity: 0.5

    }, 
    textRegularPurple:{
      color:"#9A4DFF", 
      opacity: 0.5, 
      fontSize: 14, 
      marginTop: 4, 
      left:112, 
      marginBottom:32
    }
});