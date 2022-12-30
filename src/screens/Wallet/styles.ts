import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems:'center'
      }, 
      content:{
        width:"95%"
      }, 
      balanceBank:{
        backgroundColor:"#474053", 
        width:"100%", 
        height:116, 
        borderRadius:12, 
        display:"flex", 
        flexDirection:"row",
        justifyContent:"space-between", 
        alignItems:"center", 
        paddingLeft:30, 
        marginTop:40, 
        marginBottom:24,
        borderWidth:1, 
        borderColor:"#FFF"
      }, 
  
      textBoldLeft:{
        color:"#FFF",
        fontSize:40, 
        fontWeight:"bold"
      }, 
      textRegularLeft:{
        color:"#FFF",
        fontSize:12, 
        fontWeight:"normal"
      }, 
      imageCent:{
        marginTop:-50
      }, 
      lastActivity:{
        marginTop:32, 
      }, 
      lastActivityText:{
        fontSize:20, 
        color:"#FFF", 
        fontWeight:"bold"
      }, 
      painelLastActivity:{
        backgroundColor:"#474053", 
        borderRadius:12, 
        width:"100%", 
        // height:116, 
        borderWidth:0.9, 
        borderColor:"#FFF", 
        marginTop:16
      }, 
      scrollView:{
        marginBottom:84
      }
     
});