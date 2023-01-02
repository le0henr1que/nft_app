import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems:'center'
        
      }, 
      content:{
        width:"95%", 
        
      }, 
      imageDetail:{
        width:"100%", 
        height:441, 
      }, 
      buttonClose:{
        position: "absolute",
        width: 48,
        height: 48,
        backgroundColor:"#211D28",
        left:"83%", 
        top:48, 
        borderRadius:50, 
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center"
      }, 
      scrollView:{
        marginBottom:5, 
      }, 
      imageProfile:{
        borderRadius:50, 
        width:50,
        height:50, 
        borderWidth:1, 
        borderColor:"#E990FF"
      }, 
      contentDetailProfile:{
        width:"100%",
        display:"flex", 
        flexDirection:"row", 
        justifyContent:"space-between",
        marginTop:18,
        marginBottom:-6

      }, 
      contentDetailProfileImage:{
        
        display:"flex", 
        flexDirection:"row", 
        justifyContent:"center", 
        alignItems:"center"
      },
      buttonFollow:{
        width:110
      }, 
      buttonIdNft:{
        fontSize:20, 
        color:"#FFA7FF",
        fontWeight:"bold"
      }, 
      buttonNameNft:{
        fontSize:40, 
        color:"#FFF",
        fontWeight:"bold", 
      }, 
      textProfile:{
        marginLeft:12
      }, 
      textProfileArea:{
        color:"#FFA7FF",
        fontSize:12,
        fontWeight:"normal"
      }, 
      textProfileName:{
        color:"#FFF", 
        fontSize:14,
        fontWeight:"bold"
      }, 
      borderOpacity:{
        backgroundColor:"#FFF", 
        width:"100%", 
        height:1, 
        opacity:0.2, 
        marginTop:20,
      }, 
      textBold:{
        color:"#FFF", 
        fontSize:16,
        fontWeight:"bold", 
        marginTop:24
      },
      painelLastActivity:{
        backgroundColor:"#474053", 
        borderRadius:12, 
        width:"100%", 
        // height:116, 
        // borderWidth:0.9, 
        // borderColor:"#FFF", 
        marginTop:16
      }, 
      buttonLoad:{
        width:"100%", 
        marginTop:10
      }
     
});