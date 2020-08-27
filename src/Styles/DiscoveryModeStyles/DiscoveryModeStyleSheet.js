//
//  DiscoveryModeStyleSheet.js
//  DiscoveryMode
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { StyleSheet,Platform } from "react-native"

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
	labelTwoText: {
		backgroundColor: "transparent",
		color: "white",
		//fontFamily: "Roboto-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginTop: 11,
	},
	imageTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 44,
		height: 44,
	},
	imageThreeImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		borderRadius: 12,
		position: "absolute",
		alignSelf: "center",
		width: 290,
		top: 0,
		height: 399,
	},
	imageFourImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		borderRadius: 12,
		position: "absolute",
		alignSelf: "center",
		width: 320,
		top: 25,
		height: 374,
	},
	imageFiveImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		borderRadius: 11,
		position: "absolute",
		alignSelf: "center",
		width: 341,
		top: 58,
		height: 353,
	},
	labelSixText: {
		color: "white",
		//fontFamily: "Roboto-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 5,
		marginLeft:10
	},
	labelFourText: {
		color: "white",
		//fontFamily: "Roboto-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		flex: 1,
		marginRight: 5,
		marginLeft:10
	},
	labelFiveText: {
		color: "white",
		//fontFamily: "Roboto-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 75,
		height: 16,
		marginLeft: 5,
		marginLeft:10
	},
	labelThreeText: {
		color: "white",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 89,
		marginLeft: 12,
		marginLeft:10
	},
	imageSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 26,
		marginLeft: 15,
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
	imageSevenImage: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 212,
		width: 80,
		top: 39,
		height: 80,
	},
	imageEightImage: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 86,
		width: 80,
		top: 39,
		height: 80,
	},
	game_image:{
		resizeMode: 'cover',
		height: 350, 
		width: 300,
		borderRadius:10, 
		overflow:'hidden' 
	},

	discoveryfoterimage:{
		resizeMode: 'cover',
		padding : 2
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
	},

	ModeTitle:{
		 color: "#fff",
	    position: "absolute",
	    right: Platform.OS === "ios" ? "5%" : null,
	    fontWeight: "bold",
	    fontSize: 17
	},
	modeName:{
		 color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginStart: 10
	},
	cardMode:{
		 marginTop: 10,
        flexDirection: "row",
        marginStart: 10,
        marginBottom: 6
	}
})

export default styles
