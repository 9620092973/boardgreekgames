//
//  Signup4StyleSheet.js
//  SignUp2
//
//  Created by Supernova.
//  Copyright © 2018 S7works. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({ 
	navigationBarItemIcon: { 
		tintColor: "white",
	}, 
	headerLeftContainer: {
		flexDirection: "row",
		marginLeft: 8,
	},
	navigationBarItem: {
	},
	signupView: {
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
	yourNicknameTextInput: {
		color: "black",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		flex: 1,
		height: 20,
		marginRight: 6,
		marginTop: 4,
	},
	imageImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 24,
		marginLeft: 6,
	},
	separatorView: {
		backgroundColor: "black",
		opacity: 0.1,
		alignSelf: "stretch",
		height: 1,
		marginLeft: 31,
		marginRight: 35,
		marginTop: 11, 
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
		color: "white",
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
	socialIcons:{
		flex:1,
		alignItems:"center",
		justifyContent:"flex-end",
		margin:20,

	},
})

export default styles
