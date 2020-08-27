//
//  WelcomeStyleSheet.js
//  FORGETPASSWORD2
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	welcomeView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	otpView:{
		flex:1,
		justifyContent:"center",
		alignSelf:'center'
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
		//fontFamily: "Roboto-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		alignSelf: "center",
		top: 31,
	},
	viewThreeView: {
		position:'absolute',
		backgroundColor: "transparent",
		width: 375,
		height: 294,
		top: 25
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
	viewFourView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 294,
	},
	labelTwoText: {
		color: "black",
		//fontFamily: "Roboto-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 56,
	},
	textFieldTextInput: {
		color: "black",
		//fontFamily: "Roboto-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		width: 199,
		height: 22,
	},
	// viewFiveView: {
	// 	backgroundColor: "white",
	// 	borderWidth: 8,
	// 	borderColor: "rgba(192, 192, 192, 0.49)",
	// 	borderStyle: "solid",
	// 	width: 351,
	// 	height: 2,
	// },
	// buttonButton: {
	// 	backgroundColor: "rgba(192, 192, 192, 0.71)",
	// 	borderRadius: 21,
	// 	flexDirection: "row",
	// 	alignSelf: "center",
	// 	justifyContent: "center",
	// 	padding: 0,
	// 	width: 345,
	// 	height: 53,
	// 	top:0
	// },
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
		// marginBottom:100, 
		marginTop: 30,
	},
	buttonButtonText: {
		color: "black",
		//fontFamily: "Roboto-Regular",
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
