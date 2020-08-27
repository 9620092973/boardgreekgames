//
//  ForgetPassword1StyleSheet.js
//  FORGETPASSWORD1
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 const styles = StyleSheet.create({
    viewThreeView:{
        flex: 1,
        top: 30,
        marginHorizontal:20
    },
	viewView: {
		backgroundColor: "transparent",
		width: 375,
		height: 76,
	},
	viewTwoView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 76,
	},
	imageImage: {
		resizeMode: "center",
		backgroundColor: "rgba(56, 65, 135, 0.65)",
		position: "absolute",
		left: 12,
		right: 335,
		top: 24,
		height: 34,
	},
    
    Text: {
		backgroundColor: "transparent",
		color: "rgba(0, 0, 0, 0.91)",
		//fontFamily: "Roboto-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		alignSelf: "center",
		top: 31,
	},

	viewFourView: {
		backgroundColor: "white",
		position: "absolute",
		alignSelf: "center",
		width: 375,
		top: 0,
		height: 24,
    },
	textFieldTextInput: {
		fontSize: 15,
        height: 40
    },
    signUpFieldsView: {
		backgroundColor: "white",
		borderRadius: 2,
		alignSelf: "stretch",
		height: 111,
		marginLeft: "5%",
		marginRight: 32,
		//marginTop: "5%",
	},

	buttonButton: {
		backgroundColor: "rgba(204, 202, 208, 0.95)",
		borderRadius: 30,
		borderWidth: 1,
		borderColor: "rgba(162, 157, 157, 0.65)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "stretch",
		height: 52,
		marginTop: 30,
	},

	buttonButtonText: {
		color: "white",
		////fontFamily: ".SFNSText",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	buttonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	labelTwoText: {
		color: "rgba(0, 0, 0, 0.8)",
		fontSize: 15,
	},





	container: {
        //paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        justifyContent:'center',
        alignItems: 'center',
        marginTop:100,
        width:400,
        height:300
    },   

    buttonOne:{
        backgroundColor:"#3ba1da",
        padding:10,
        borderRadius:4,
        
    },
    btn_txt:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center'
    },
 
    
    ImgView:{
        width:300,
        height:50,   
        backgroundColor:'white',
        borderWidth: 1,
        fontSize:16,
        marginTop:20,
        borderRadius:5,
        borderColor:'#ddd',
    },
    
    forget_password:{
        color:"#6699cc",
        marginTop:10,
        fontWeight:'bold',
        fontSize:15
    }, 
        /* main Page */
    page_container:{
        marginTop:150,
    },
    loginPage_btn:{
       backgroundColor:'#ddd',
       width:200,
        height:40,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginLeft:'25%'
    },
    textBox:{
        fontSize: 18,
        alignSelf: 'stretch',
        height: 45,
        paddingRight: 45,
        paddingLeft: 8,
        borderWidth: 1.5,
        paddingVertical: 0,
        borderColor: 'grey',
        borderRadius: 5
    },
    visibilityBtn:{
        position: 'absolute',
        right: 3,
        height: 40,
        width: 35,
        padding: 5
    },
    btnImage:{
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
    },
    /* forgot password styles */
    forgot_box:{
        width:300,
        height:50,   
        backgroundColor:'white',
        borderWidth: 1,
        fontSize:16,
        marginTop:10,
        borderRadius:5,
        borderColor:'#ddd',
        marginLeft:30
    },
    forgot_label:{
        width:300,
        height:50,   
        backgroundColor:'white',
        fontSize:16,
        marginTop:10,
        marginLeft:30
    },
    Submit_btn:{
        backgroundColor:"#ddd",
        height:40,
        width:150,
        justifyContent:"center",
        alignItems:"center" ,
        marginTop:10,
        borderRadius:5,
        marginLeft:60
    },
    /* fb button styles */
    fb_btn:{
        flexDirection:'row',
        padding:10,
        borderRadius:4,
        backgroundColor:"#4267b2"
    },
    facebook_View:{
        marginTop:15,
        width:'75%'
    },
    google_btn:{
        flexDirection:'row',
        padding:10,
        borderRadius:4,
        backgroundColor:"#dc4e41"
    },
    google_view:{
        marginTop:15,
        width:'75%',
        //paddingBottom:60
    },
    fb_google_text:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold', 
        marginLeft:25
    },
    buttonSuccessButton: {
		backgroundColor: "#1D365F",
		borderRadius: 30,
		borderWidth: 1,
		borderColor: "rgba(162, 157, 157, 0.65)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "stretch",
		height: 52,
		marginTop: 30,
	

    },
    buttonThreeSuccessButton: {
		backgroundColor: "#1D365F",
		//backgroundColor: "rgba(204, 202, 208, 0.95)",
		borderRadius: 30,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "stretch",
		height: 52,
		marginLeft: 31,
		marginRight: 32,

	},
    layout:{
        borderBottomColor: "black",
		borderBottomWidth: 1,
		alignSelf:"stretch",
		marginLeft: "5%",
		//marginRight: 20,
		marginTop:5,

    },

    //OTP

    welcomeView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},

	viewView: {
		backgroundColor: "transparent",
		width: 375,
		height: 76,
	},
	viewTwoView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 76,
	},
	imageImage: {
		backgroundColor: "rgba(56, 65, 135, 0.65)",
		resizeMode: "center",
		position: "absolute",
		left: 12,
		right: 335,
		top: 24,
		height: 34,
	},
	labelText: {
		backgroundColor: "transparent",
		color: "rgba(0, 0, 0, 0.91)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		alignSelf: "center",
		top: 31,
	},

	OTPbuttonThreeSuccessButton: {
		backgroundColor: "#1D365F",
		borderRadius: 30,
		borderWidth: 1,
		borderColor: "rgba(162, 157, 157, 0.65)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "stretch",
		height: 52,
		 marginLeft: 31,
		 marginRight: 29,
		marginTop:120
	},
	viewFourView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 294,
	},
	
	textFieldTextInput: {
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		width: 250,
		height: 30
	},

	OTPButton: {
		backgroundColor: "rgba(162, 159, 159, 0.54)",
		borderRadius: 30, 
		borderWidth: 1,
		borderColor: "rgba(162, 157, 157, 0.65)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "stretch",
		top:100,
		left:10,
		height: 55
	},
	buttonButtonText: {
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		alignSelf:'center'
	},
	buttonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},

})

export default styles


