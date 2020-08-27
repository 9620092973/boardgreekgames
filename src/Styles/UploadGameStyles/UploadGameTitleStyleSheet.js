//
//  LoginStyleSheet.js
//  Upload game
//
//  Created by S7works.
//  Copyright © 2018 S7works. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	loginView: {
		backgroundColor: "white",
		flex: 1,
		alignItems:'center'
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
	viewThreeView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 448,
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
	viewFourView: {
		backgroundColor: "black",
		opacity: 0.1,
		height: 1,
		marginLeft: 2,
		// marginRight: 14,
		marginTop: 6,
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
		//cflexDirection: "row",
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
	uploadeText:{
		backgroundColor: "white",
		borderRadius: 2,
		alignSelf: "stretch",
		// height: 111,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 0,
	},
	GameSuccessButton:{
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
	GameButtonText:{
		color: "white",
		//fontFamily: "Tahoma",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	}
})

export default styles
