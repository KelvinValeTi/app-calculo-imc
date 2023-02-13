import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    body:{
        width:"100%",
        height:"100%",
        bottom:0,
    },
    form:{
        width:"100%",
        height:"auto",
        alignItems:"center",
    },

    textLabel:{
        fontSize:20,
        color:"#263159",
    },

    error:{
        fontSize:12,
        color:"red"
    },

    input:{
        width: "90%",
        backgroundColor:"#ffffff",
        height: 40,
        borderRadius:50,
        paddingLeft: 10,
        marginTop:10,
        marginBottom:10,
    },
    button:{
        width:"60%",
        height:50,
        borderRadius:50,
        backgroundColor:"#263159",
        alignItems:"center",
        justifyContent:"center", 
    },
    textButton:{
        color:"#FFFBEB",
        fontWeight:"bold",
        fontSize:20,
    },

    viewResultContainer:{
        alignItems:"center",
    },  
});

export default styles;