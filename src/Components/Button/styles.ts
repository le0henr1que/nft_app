import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        display:'flex',
        borderRadius:12,
        width: 342, 
        height:48, 
        textAlign:'center', 
        justifyContent: 'center',
        alignItems:'center', 
        
        shadowColor: "#9A4DFF",
        shadowOffset: {
            width: 12,
            height: 12,
        },
        shadowOpacity: 2,
        shadowRadius: 30,

        elevation: 30,
   
    }, 
    textButton:{
        color:'#FFFF', 
        fontSize:14
    }, 
    buttonLine:{
        borderWidth:  3, 
        borderColor:  '#9A4DFF',
        display:'flex',
        borderRadius:12,
        width: 342, 
        height:48, 
        textAlign:'center', 
        justifyContent: 'center',
        alignItems:'center', 
      
    }, 
    textButtonLine:{
        color:'#9A4DFF', 
        fontSize:14
    }
});