//
//  DiscoveryModeStyleSheet.js
//  HotOrNot
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	welcomeView: {
		backgroundColor: "white",
		borderRadius: 33,
		shadowColor: "white",
		shadowRadius: 2,
		shadowOpacity: 1,
		flex: 1,
	}, 
	headerView: {
		backgroundColor: "rgb(10, 46, 85)",
		height: 80,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	imageImage: {
		//resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 20,
		marginLeft: 18,
		marginTop: 35,
	},
	labelText: {
		color: "white",
	//	fontFamily: "Roboto-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 26,
		marginTop: 35,
	},
	imageTwoImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		borderRadius: 12,
		position: "absolute",
		alignSelf: "center",
		width: 290,
		top: 0,
		height: 399,
	},
	imageThreeImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		borderRadius: 12,
		position: "absolute",
		alignSelf: "center",
		width: 320,
		top: 25,
		height: 374,
	},
	imageFourImage: {           
		backgroundColor: "transparent",
		borderRadius: 12,
		resizeMode: "stretch",
		position: "absolute",
		alignSelf: "center",
		width: 341,
		top: 57,
		height: 353,
	},
	labelFiveText: {
		color: "white",
	//	fontFamily: "Roboto-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft:15
	},
	labelFourText: {
		color: "white",
	//	fontFamily: "Roboto-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft:13
	},
	labelThreeText: {
		color: "white",
		//fontFamily: "Roboto-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
	},
	labelTwoText: {
		color: "white",
	//	fontFamily: "Roboto-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 25,
		marginTop: 33,
	},
	imageFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 33,
		height: 35,
		marginLeft: 31,
	},
	viewView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 345,
		height: 100,
		marginTop: 9,
	},
	viewTwoView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		width: 345,
		top: 0,
		height: 100,
	},
	// viewFourView: {
	// 	backgroundColor: "white",
	// 	borderRadius: 25,
	// 	shadowColor: "rgba(0, 0, 0, 0.7)",
	// 	shadowRadius: 7,
	// 	shadowOpacity: 1,
	// 	width: 50,
	// 	height: 50,
	// },
	// viewThreeView: {
	// 	backgroundColor: "white",
	// 	borderRadius: 25,
	// 	shadowColor: "rgba(0, 0, 0, 0.7)",
	// 	shadowRadius: 7,
	// 	shadowOpacity: 1,
	// 	width: 50,
	// 	height: 50,
	// 	marginLeft: 134,
	// },
	imageSixImage: {
		backgroundColor: "transparent",
		//resizeMode: "center",
		position: "absolute",
		left: 200,
		width: 80,
		top: 50,
		height: 80,
	},
	imageSevenImage: {
		backgroundColor: "transparent",
		//resizeMode: "center",
		position: "absolute",
		left: 100,
		width:80,
		top: 50,
		height: 80,
	},
	game_image:{
		resizeMode: 'cover',
		padding: 0,
		height: 350, 
		width: 300 ,

	},
	gamename:{
		padding:7,
		fontSize:20,
		textAlign:'center'
	},
	dislike_btn:{
		backgroundColor:"#ddd",
		height:60,
		width:100,
		justifyContent:"center",
		alignItems:"center" ,
		marginTop:10,
		marginLeft:55
	},
	link_page:{
		backgroundColor:"#ddd",
		height:60,
		width:200,
		justifyContent:"center",
		alignItems:"center" ,
		marginTop:20,
		marginLeft:90
	},
	yupStyle:{
		marginRight:15,   
	},
	/*HotOrNot Landing page styles */
	hotOrNot_image:{
		width: '90%',
		height:150,
		marginLeft:20
	},
	explain_content:{
		width: '90%',
		height:180,
		marginLeft:20,
		borderWidth:1,
		borderColor:'#ddd',
		marginTop:20
	},
	start_btn:{
		width:130,
		height:60,
		marginTop:15,
		marginLeft:'35%',
		backgroundColor:'#ddd',
		justifyContent:'center',
		alignItems:'center'
	}

})

export default styles
