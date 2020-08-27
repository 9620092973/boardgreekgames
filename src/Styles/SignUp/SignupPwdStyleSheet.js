//
//  Signup6StyleSheet.js
//  SignUp2
//
//  Created by Supernova.
//  Copyright © 2018 S7works. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	navigationBarItemTitle: {
		color: "white",  
	},
	headerLeftContainer: {  
		flexDirection: "row",
		marginLeft: 8,
	},
	navigationBarItem: {
	},
	navigationBarItemIcon: {
		tintColor: "white",
	},
	profileSettingsView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	labelText: {
		color: "rgba(0, 0, 0, 0.8)",
		//fontFamily: ".SFNSText",
		fontSize: 19,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 281,
		// height: hp('5%'),
		marginLeft: 20,
		marginTop: 30,
		height:30,
	},
	signUpFieldsView: {
		backgroundColor: "white",
		borderRadius: 2,
		alignSelf: "stretch",
		// height: 111,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 0,
	},
	yourNicknameTextInput: {
		color: "black",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 3,
		height: 30,
		marginLeft: 2,
		// marginRight: 30,
		marginTop: 20,
	},
	separatorView: {
		backgroundColor: "black",
		opacity: 0.1,
		height: 1,
		marginLeft: 2,
		// marginRight: 6,
		marginTop: 0,
	},
	labelTwoText: {
		color: "rgba(0, 0, 0, 0.59)",
		////fontFamily: ".SFNSText",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 143,
		height: 19,
		marginTop: 3,
	},
	imageImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 18,
		marginLeft: 4,
	},
	labelThreeText: {
		backgroundColor: "transparent",
		color: "rgba(0, 0, 0, 0.59)",
		////fontFamily: ".SFNSText",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 180,
		height: 19,
		marginLeft: 171,
		marginTop: 30,
	},
	buttonThreeButton: {
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
		height: 52,  
		marginLeft: 31,
		marginRight: 29,
		//marginBottom: 280,
		marginTop:30
	},
	buttonThreeSuccessButton: {
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
		marginTop:30

		//marginBottom: 280,
	},
	icons:{
		left:32,
		marginBottom:25,
	},
	icons:{
		left:32,
		marginBottom:25,
	},
	buttonThreeButtonText: {
		color: "black",
		////fontFamily: ".SFNSText",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	buttonThreeButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	oneTapSignInButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "center",
		width: 190,
		height: 31,
		marginBottom: 14,
	},
	oneTapSignInButtonText: {
		color: "#585858",
		////fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	oneTapSignInButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	buttonButton: {
		backgroundColor: "rgba(3, 14, 75, 0.89)",
		borderRadius: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 130,
		height: 38,
	},
	buttonButtonText: {
		color: "white",
		////fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	buttonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	buttonTwoButton: {
		backgroundColor: "rgb(12, 139, 202)",
		borderRadius: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 130,
		height: 38,
		marginLeft: 33,
	},
	buttonTwoButtonText: {
		color: "white",
		////fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	buttonTwoButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
    },
    inputIOS:{
        fontSize: 16,
        width:300, 
        height:40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        marginTop:20,
        marginLeft:20,
        padding:10,
	},
	CheckBox:{
        paddingTop:30,
       	marginLeft:95,
        justifyContent:'center',
        alignSelf:'stretch'
	},
	icon_password:{
        position: 'absolute',
        right: 20,
        height: 40,
        width: 35,
        padding: 5,
        top:53
	},
	icon_image:{
        resizeMode: 'contain',
    height: '100%',
    width: '100%'
	},
	socialIcons:{
		flex:1,
		alignItems:"center",
		justifyContent:"flex-end",
		margin:20,

	},
})

export default styles
