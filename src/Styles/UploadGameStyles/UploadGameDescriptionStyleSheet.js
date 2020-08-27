//
//  UploadGame9StyleSheet.js
//  Spacebook
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	loginView: {
		
		flex:1,
		 
		justifyContent: 'flex-start',
		margin:20
	},  
	viewView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 90,
	},
	viewTwoView: {
		backgroundColor: "rgb(8, 67, 159)",
		height: 90,
	},
	imageImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 44,
		height: 44,
	},
	labelText: {
		backgroundColor: "transparent",
		color: "white",
		////fontFamily: "Roboto-Regular",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 163,
		height: 24,
		marginLeft: 11,
		marginTop: 11,
	},
	labelTwoText: {
		color: "rgba(0, 0, 0, 0.8)",
		//fontFamily: ".SFNSText",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 281,
		height: 22,
		marginLeft: 20,
		marginTop: 30,
	},
	textFieldTextInput: {
		backgroundColor: "transparent",
		//  paddingHorizontal: 3,
		// paddingVertical: 5,
		color: "black",
		////fontFamily: "Roboto-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		//textAlign: "left",
		//flex: 1,
		height: 33,
		//marginRight: 11,
		marginTop: 4,
		marginLeft:10
		//padding: 10,

	},

	TextInputStyleClass:{

		textAlign: 'center',
		height: 50,
		borderWidth: 2,
		borderColor: '#9E9E9E',
		borderRadius: 20 ,
		backgroundColor : "#FFFFFF",
		height: 150
		 
		},
	viewThreeView: {
		backgroundColor: "rgba(136, 124, 124, 0.56)",
		height: 1,
		marginLeft: 14,
		marginRight: 14,
		marginTop: 60
		
	},
	buttonButtonText: {
		color: "#000",
		//fontFamily: "Tahoma",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
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
		// marginBottom: 300,
		marginTop:30,
	},
	buttonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	categoriSuccessButton:{
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
		marginTop:30,
	},
	categoriButtonText:{
		color: "white",
		//fontFamily: "Tahoma",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	}
})

export default styles
