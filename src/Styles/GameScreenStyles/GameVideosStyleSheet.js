
import { StyleSheet,Platform } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
	profileView: {
		backgroundColor: "white",
	},
	viewViewLinearGradient: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: hp('50%'),
	},
	imageTwoImage: {
		backgroundColor: "transparent",
		width: wp('20%'),
		height: hp('20%'),
	},
	labelText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 164,
		height: 24,
		marginLeft: 10,
		marginTop: 7,
	},
	imageImage: {
		backgroundColor: "transparent",
		width: wp('20%'),
		height: hp('20%'),
	},
	viewScrollView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 104,
		top: 0,
		height: 804,
	},
	imageSevenImage: {
		backgroundColor: "transparent",
		height: hp('70%'),
		width:wp('100%'),
	},
	viewTwoScrollView: {
		backgroundColor: "white",
		height: 133,
	},
	imageSixImage: {
		backgroundColor: "transparent",
		width: wp('25%'),
		height: hp('12%'),
	},
	imageFiveImage: {
		backgroundColor: "transparent",
		width: wp('25%'),
		height: hp('12%'),
		marginLeft: 10,
	},
	imageFourImage: {
		backgroundColor: "transparent",
		width: wp('25%'),
		height: hp('12%'),
		marginLeft: 13,
	},
	imageThreeImage: {
		backgroundColor: "transparent",
		width: wp('25%'),
		height: hp('12%'),
		marginLeft: 13,
	},
	NoImages:{
		textAlign:'center',
		fontSize:23,
		color:'#ddd',
		fontWeight:'bold'
	},
	gameImageView:{
		flexDirection: "row",
		marginTop:'3%',
		marginLeft:10
	},
	game_video:{
		 color: "#fff",
            position: "absolute",
            right: Platform.OS === "ios" ? 40 : null,
            fontWeight: "bold",
            fontSize: 17
	}
})

export default styles
