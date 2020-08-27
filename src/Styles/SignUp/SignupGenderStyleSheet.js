//
//  SignUp2StyleSheet.js
//  SignUp2
//
//  Created by Supernova.
//  Copyright © 2018 S7works. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	welcomeView: {  
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
	labelTwoText: {
		color: "rgba(0, 0, 0, 0.59)",
		////fontFamily: ".SFNSText",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		flex:1,
		marginTop:30,
		bottom:0,
		
	},
	
	check:{
		marginLeft:60,
	},
	labelThreeText: {
		backgroundColor: "transparent",
		color: "rgba(0, 0, 0, 0.59)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 55,
		height: 18,
		left: 60,
	},
	labelFourText: {
		backgroundColor: "transparent",
		color: "rgba(0, 0, 0, 0.59)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 55,
		height: 18,
		marginLeft: 40, 
	},
	
	
	icons:{
		left:32,
		marginTop:325,
	},
	buttonButton: {
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
		marginLeft: 31,
		marginRight: 29,
		marginTop:30

		//marginBottom: 280,
	},
	buttonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	buttonButtonText: {
		color: "black",
		////fontFamily: ".SFNSText",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left", 
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
	buttonTwoButton: {
		backgroundColor: "rgba(3, 14, 75, 0.89)",
		borderRadius: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 130,
		height: 38,
	},
	buttonTwoButtonImage: {
		resizeMode: "contain", 
		marginRight: 10,
	},
	buttonTwoButtonText: {
		color: "white",
		////fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	buttonThreeButton: {
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
	buttonThreeButtonText: {
		color: "white",
		////fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	buttonThreeButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
    },
    signUpText: {
		color: "rgba(13, 13, 13, 0.68)",
		//fontFamily: "TimesNewRomanPSMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 171,
		height: 23,
		marginTop: 28,
	},
	socialIcons:{
		flex:1,
		alignItems:"center",
		justifyContent:"flex-end",
		margin:20,

	},
})

export default styles
