import { StyleSheet } from 'react-native';
import { Platform } from '@unimodules/core';

export default styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:'#2D82DA',
   
   },
   header_menu:{ 
    top: 45,
    right: 15,
    zIndex: 1,
    position: 'absolute',
   }, 
   headerView:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
   },
   header_title:{
       color:'#fff',
       fontWeight:'bold',
       fontSize:20,
      
   },
   menu:{
       color:'#fff'
   },
   /* side menu styles */
   sidemenu_touch:{
    borderBottomWidth:1,
    borderColor:'#ddd',
    width:'90%',
    marginLeft:10
   },
   menu_text:{
    margin:"1%",
    padding:20,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  
   },
   logout_container:{
    flexDirection:'row',
    alignContent:'center',
    bottom:0,
    
   },
   logout_icon:{
     marginTop:20,
     marginLeft:20,
     padding:5,
     fontWeight:'bold'
   },
   logoutText:{
    marginTop:20,
    fontWeight:'bold',
    padding:10,
    fontSize:18
   },
   /*back arrow */
   back_arrow:{
    top: 30,
    left: 15,
    zIndex: 1,
    position: 'absolute',
   },
   welcomeView: {
    backgroundColor: "white",
    flex: 1,
},
viewView: {
    backgroundColor: "white",
    position: "absolute",
    left: 0,
    width: 375,
    top: 0,
    height: 667,
},
viewTwoView: {
    backgroundColor: "white",
    position: "absolute",
    left: 0,
    width: 375,
    top: 160,
    height: 507,
},
imageSevenImage: {
    backgroundColor: "red",
    resizeMode: "center",
    width: 44,
    height: 44,
    marginLeft: 32,
},
imageThreeImage: {
    backgroundColor: "transparent",
    //resizeMode: "center",
    width: 25,
    height: 18,
    marginTop:10
},
labelThreeText: {
    backgroundColor: "transparent",
    color: "black",
    width:"100%",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    height: 25,
    marginLeft: 23,
},
imageTwoImage: {
    backgroundColor: "transparent",
    //resizeMode: "center",
    width: 25,
    height: 18,
    marginTop:10
},
labelFourText: {
    backgroundColor: "transparent",
    color: "black",
    //fontFamily: "Roboto-Regular",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    height: 28,
    marginLeft: 23,
    marginTop: 8,
},
imageFourImage: {
   // resizeMode: "center",
    backgroundColor: "transparent",
    width: 25,
    height: 18,
    marginTop:10
},
labelTwoText: {
    backgroundColor: "transparent",
    color: "black",
    //fontFamily: "Roboto-Regular",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    height: 28,
    marginLeft: 23,
    marginTop: 8,
},
imageFiveImage: {
    backgroundColor: "transparent",
    marginTop:10
},
labelFiveText: {
    backgroundColor: "transparent",
    color: "black",
    //fontFamily: "Roboto-Regular",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    height: 28,
    marginLeft: 23,
    marginTop: 8,
    width:150
},
labelSixText: {
    backgroundColor: "transparent",
    color: "black",
    //fontFamily: "Roboto-Regular",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    height: 28,
    marginLeft: 23,
    marginTop: 10,
},
imageImage: {
    // resizeMode: "center",
    backgroundColor: "transparent",
    width: 33,
    height: 33,
    marginTop:3
},
labelText: {
    backgroundColor: "transparent",
    color: "black",
    //fontFamily: "Roboto-Regular",
    fontSize: 18,
    fontStyle: "normal",
    textAlign: "left",
    height: 28,
    marginLeft: 23, 
    marginTop: 3,
},
imageSixImage: {
   // resizeMode: "center",
   backgroundColor: "transparent",
   width: 30,
   height: 20,
   marginTop:10
},
gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height:Platform.OS ==='android' ? 140 :120,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
    
},
imageThreeImage1: {
   // resizeMode: "center",
    backgroundColor: "red",
    borderRadius: 35,
    width: 20,
    height: 20,
    top:0,
},
imageThreeImage2: {
    // resizeMode: "center",
    backgroundColor: "transparent",
    // borderRadius: 15,
    // width: 60,
    // height: 60,
    left:40,
    top:8,
    color:"white"
},
labelThreeText1: {
    backgroundColor: "transparent",
    color: "white",
    //fontFamily: "Roboto-Regular",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    textAlign: "left",
    textAlignVertical:'center',
    // height: 28,
    marginLeft: 18,
    // marginTop: 10,
    // // width:100
    // height: 50, 
    // width: 150, 
},
labelThreeText2:{
    backgroundColor: "transparent",
    color: "white",
    //fontFamily: "Roboto-Regular",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    height: 20,
    marginLeft: 20,
    marginTop: 10,
},
profileView:{
    backgroundColor: "white", 
    borderRadius: 35, 
    width: 75, 
    height: 75,   
    justifyContent: 'center', 
    alignItems: 'center'
},
})
