import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems:'center'
      }, 
      content:{
        width:"95%"
      }, 
      searchInput:{
        width:"100%", 
        height:48, 
        backgroundColor:"rgba(239, 239, 255, 0.1)", 
        borderRadius:24, 
        color:"#FFF", 
        padding: 12,
        paddingLeft:50, 
        marginTop: 30
      }, 
      searchIcon:{
        top:-35, 
        left:17
      }, 
      scrollView:{
        marginBottom:85
      }
});