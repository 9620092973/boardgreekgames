//
//  UploadGame6StyleSheet.js
//  Upload game
//
//  Created by S7works.
//  Copyright © 2018 S7works. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	messagesView: {
		backgroundColor: "white",
		flex: 1,
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
		//fontFamily: "TimesNewRomanPS-BoldMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 163,
		height: 26,
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
	viewThreeView: {
		backgroundColor: "rgba(136, 124, 124, 0.56)",
		height: 1,
		marginLeft: 14,
		marginRight: 35,
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
	buttonButtonText: {
		color: "rgba(13, 12, 12, 0.7)",
		//fontFamily: ".SFNSDisplay",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	buttonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	buttonTwoButtonText: {
		color: "rgba(13, 12, 12, 0.7)",
		//fontFamily: ".SFNSDisplay",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	buttonTwoButton: {
		backgroundColor: "rgba(255, 255, 255, 0.86)",
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "black",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 37,
		marginLeft: 237,
		marginRight: 30,
		marginTop: 11,
	},
	buttonTwoButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
		GameDesignSuccessButton:{
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
	GameDesignButtonText:{
		color: "white",
		//fontFamily: "Tahoma",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",

	}
})

export default styles
