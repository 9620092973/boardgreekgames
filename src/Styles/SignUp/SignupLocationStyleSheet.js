//
//  Signup5StyleSheet.js
//  SignUp2
//
//  Created by Supernova.
//  Copyright © 2018 S7works. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	navigationBarItem: { 
	},
	navigationBarItemTitle: {
		color: "black",
	}, 
	navigationBarItemIcon: {
		tintColor: "black",
	},
	headerLeftContainer: {
		flexDirection: "row",
		marginLeft: 8, 
	},
	profileView: {
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
		//padding: 3,
		height: 40,
		//margin :10,
		  
	   
	},
	separatorView: {
		marginTop: 0,
		backgroundColor: "black",
		color:"black",
		opacity: 0.1,
		height: 1,
		 width: "100%"
	},
	yourSpacemailTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "black",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		height: 20,
		marginLeft: 15,
		marginRight: 56,
		marginTop: 14,
	},
	separatorTwoView: {
		backgroundColor: "black",
		opacity: 0.1,
		height: 1,
		marginLeft: 15,
		marginRight: 6,
		marginTop: 16,
	},
	imageImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 289,
		width: 33,
		top: 67,
		height: 25,
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
	},
	icons:{
		left:32,
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
	// picker:{
	// 	color:'green',
		
	// },
	socialIcons:{
		flex:1,
		alignItems:"center",
		justifyContent:"flex-end",
		margin:20,

	},
})

export default styles
