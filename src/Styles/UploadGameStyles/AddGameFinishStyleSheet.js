//
//  AddGameStyleSheet.js
//  AddGame Finish
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	welcomeView: {
		backgroundColor: "white",
		flex: 1,
		alignItems:'center'
	},
	imageImage: {
		//resizeMode: "center",
		backgroundColor: "transparent",
		height: 230,
		marginLeft: 32,
		marginRight: 31,
		marginTop: 50,
	},
	labelText: {
		color: "black",
		//fontFamily: ".SFNSText",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		height: 26,
		//marginLeft: 32,
		//marginRight: 29,
		marginTop: 47,
	},
	buttonButton: {
		backgroundColor: "#1D365F",
		borderRadius: 30,
		shadowColor: "black",
		shadowRadius: 2,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 135,
		height: 44,
		position:'absolute',
		bottom:60
	},
	buttonButtonText: {
		color: "white",
		//fontFamily: ".SFNSText",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	buttonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	FinishText:{
		color:'#000',
		marginTop:20,
		fontSize:15,
		textAlign:'center'
	}
})

export default styles
