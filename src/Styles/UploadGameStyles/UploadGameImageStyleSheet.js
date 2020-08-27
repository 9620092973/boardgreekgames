//
//  UploadGame1StyleSheet.js
//  Upload game
//
//  Created by S7works.
//  Copyright © 2018 S7works. All rights reserved.
//

import { StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
	welcomeView: {
		backgroundColor: "white",
		flex: 1,
		//alignItems:'center'
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
	imageTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 44,
		height: 44,
	},
	labelTwoText: {
		color: "white",
		////fontFamily: "Roboto-Regular",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 163,
		height: 24,
		marginLeft: 11,
		marginTop: 11,
	},
	labelText: {
		color: "white",
		////fontFamily: "Roboto-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 49,
		height: 21,
		marginTop: 13,
	},
	imageImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 64,
		width: 44,
		top: 31,
		height: 44,
	},
	viewThreeView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 67,
		alignItems: "flex-start",
	},
	viewFourView: {
		backgroundColor: "white",
		width: 378,
		height: 67,
	},
	labelThreeText: {
		backgroundColor: "transparent",
		color: "black",
		////fontFamily: "Roboto-Regular",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 17,
		right: 29,
		top: 15,
		height: 24,
	},
	viewScrollView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		width: 375,
		top: 0,
		height: 732,
	},
	imageEightImage: {
		//resizeMode: "center",
		backgroundColor: "transparent",
		borderRadius: 6,
		width: wp('45%'),
		height: hp('25%'),
	},
	imageSevenImage: {
		backgroundColor: "transparent",
		borderRadius: 6,
		//resizeMode: "center",
		width: wp('45%'),
		height: hp('25%'),
		marginLeft: 7,
		
	},
	imageFourImage: {
		//resizeMode: "center",
		backgroundColor: "transparent",
		borderRadius: 6,
		width: wp('45%'),
		height: hp('25%'),
		marginTop:6
	
	},
	imageFiveImage: {
		//resizeMode: "center",
		backgroundColor: "transparent",
		borderRadius: 6,
		width: wp('45%'),
		height: hp('25%'),
		marginLeft: 7,
		marginTop:6
	
	},
	imageSixImage: {
		//resizeMode: "center",
		backgroundColor: "transparent",
		borderRadius: 6,
		width: wp('45%'),
		height: hp('25%'),
		marginTop:6
	
	},
	imageThreeImage: {
		backgroundColor: "transparent",
		borderRadius: 6,
		//resizeMode: "center",
		width: wp('45%'),
		height: hp('25%'),
		marginLeft: 7,
		marginTop:6
		
	},
})

export default styles
