
import { StyleSheet,Platform } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
	welcomeView: {
		backgroundColor: "white",
		flex: 1,
	},
	viewView: {
		backgroundColor: "rgb(16, 105, 171)",
		height: 100,
	},
	imageTwoImage: {
		backgroundColor: "transparent",
		width: 20,
		height: 20,
		marginTop:10
	},
	labelText: {
		color: "white",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 36,
		marginTop: 10,
	},
	imageImage: {
		backgroundColor: "transparent",
		width: 26,
		height: 26,
		 marginLeft: 160,
		marginTop:10
	},
	labelTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 162,
		top: 149,
	},
	gameimageImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		 height: 200,
		 width:wp('100%')
	},
	imageThreeImage: {
		backgroundColor: "transparent",
		width: 20,
		height: 20,
	},
	labelFourText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		marginLeft: 10,
		 
	},
	imageFourImage: {
		backgroundColor: "transparent",
		width: 27,
		height: 20,
		marginLeft: 46,
	},
	labelThreeText: {
		color: "white",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "bold",
		backgroundColor: "transparent",
		width: 16,
		marginLeft: 10,
	},
	viewScrollView: {
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "rgba(255, 255, 255, 0.79)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 74,
	},
	labelEightText: {
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	labelSevenText: {
		color: "rgba(0, 0, 0, 0.67)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		
		backgroundColor: "transparent",
	},
	labelSixText: {
		color: "rgba(0, 0, 0, 0.7)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		marginLeft:40,
		backgroundColor: "transparent",
	},
	labelFiveText: {
		backgroundColor: "transparent",
		color: "rgba(0, 0, 0, 0.7)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		marginLeft:40
	},
	viewFiveView: {
		backgroundColor: "white",
		borderWidth: 0.5,
		borderColor: "rgba(192, 192, 192, 0.79)",
		marginTop: 15
	},
	ratingView: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "rgba(255, 255, 255, 0.79)",
	},
	viewTwoView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 37,
	},
	labelNineText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 3,

	},
	imageEightImage: {
		backgroundColor: "transparent",
		width: 30,
		height: 30,
	},
	imageSixImage: {
		backgroundColor: "transparent",
		height: 27,
		marginLeft: 59,
		marginRight: 17,
	},
	imageSevenImage: {
		backgroundColor: "transparent",
		height: 30,
		width:30,
	},
	imageNineImage: {
		backgroundColor: "transparent",
		height: 30,
		width:30,
	},
	imageFiveImage: {
		backgroundColor: "transparent",
		height: 30,
		width:39,
	},
	viewThreeView: {
		backgroundColor: "white",
		borderWidth: 0.5,
		borderColor: "rgba(192, 192, 192, 0.79)",
		borderStyle: "solid",
	},
	viewFourView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 131,
	},
	labelFifteenText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 351,
	},
	labelFourteenText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 345,
		marginLeft: 4,
		marginTop: 9,
	},
	labelThirteenText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 353,
		marginLeft: 4,
		marginTop: 9,
	},
	labelTwelveText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 366,
		height: 32,
		marginTop: 9,
	},
	labelElevenText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 362,
		height: 32,
		marginTop: 8,
	},
	viewEightView: {
		backgroundColor: "white",
		borderWidth: 0.5,
		borderColor: "rgba(192, 192, 192, 0.79)",
		marginLeft: 4,
		marginTop: 18,
	},
	labelTenText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 6,
		right: 20,
		top: 0,
	},
	viewSixView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 375,
		top: 107,
		height: 62,
	},
	viewSevenView: {
		backgroundColor: "white",
		position: "absolute",
		alignSelf: "center",
		width: 372,
		top: 0,
		height: 56,
	},
	labelSixteenText: {
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		backgroundColor: "transparent", 
		marginTop:8
	},
	labelNineteenText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
		
	},
	labelSeventeenText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		marginLeft: 22,
		marginTop:5
	},
	labelEighteenText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		backgroundColor: "transparent",
		marginLeft: 20,
	},
	imageElevenImage: {
		backgroundColor: "transparent",
		width: 44,
		height: 44,
	},
	imageTenImage: {
		backgroundColor: "transparent",
		width: 44,
		height: 44,
		marginLeft: 46,
	},
	imageThirteenImage: {
		backgroundColor: "transparent",
		width: 44,
		height: 44,
		marginLeft: 17,
	},
	imageTwelveImage: {
		backgroundColor: "transparent",
		width: 44,
		height: 44,
		marginLeft: 34,
	},
	footerStyle: {
		marginTop:30,
	},
	btn_collect:{
        backgroundColor:"#ddd",
        height:40,
        width:50,
        marginTop:10,
        borderRadius:5,
        marginLeft:50
    },
    btn_collect1:{
        height:40,
        width:100,
        marginTop:10,
        borderRadius:5,
        marginLeft:50
    },
    btn_share:{
       
        marginLeft:25,
        fontSize:14,
	},
	addCollection:{
		justifyContent:'center'
	},


	/** modal styles */
	container: {
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		right:0,
		marginBottom:0
	  },
	  content: {
		backgroundColor: 'white',
		padding: 22,
		alignItems: 'center',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
	  },
	  contentTitle: {
		fontSize: 16,
		marginBottom: 9,
	  },
	  bottomModal: {
		justifyContent: 'flex-end',
		margin: 0
	  },
	  modalSign:{
		  backgroundColor:'#1D365F',
		  alignItems: "center",
		justifyContent: "space-between",
		borderRadius: 15,
		width:80,
		height:30,
		marginRight:30
	  },
	  modalLogin:{
		backgroundColor:'#1D365F',
		alignItems: "center",
	  justifyContent: "space-between",
	  borderRadius: 15,
	  width:80,
	  height:30,
	  marginLeft:30
	  },


	signUpButton: {
		backgroundColor: "#1D365F",
		borderRadius: 30,
		borderWidth: 1,
		alignItems: "center",
		height: 52,
	},
	signUpButtonText: {
		color: "white",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		justifyContent:"center",
		marginTop:15
	},
	loginButton: {
		backgroundColor: "white",
		borderRadius: 30,
		borderWidth: 1,
		alignItems: "center",
		height: 52,
		borderColor:'#1D365F'
		
	},
	buttonButtonText: {
		color: "#1D365F",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		alignItems: "center",
		marginTop:15
	},
	socialIcons:{
		flex:2,
		alignItems:'center',
		justifyContent:"flex-end",
		margin:10,
	},	

	//rate button stylings

	RateButton:{
		width:120,
		height:25,
		backgroundColor:"#159CDA",
		borderRadius:3
	},
	RateText:{
		color:'white',
		textAlign:'center',
		padding:3,
               
	},
	gameContainer:{
		flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
   modalContent: {
      backgroundColor: 'white',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
      modalHeading: {
        fontSize: 25,
        marginLeft: 22,
        marginBottom: 10,
        marginTop: 35,
    },

    likeImage: {
		backgroundColor: "transparent",
		height:40,
		width:40,
	},
	hateImage: {
		backgroundColor: "transparent",
		height: 40,
		width:40,
	},
	hateImage_red:{
		backgroundColor: "transparent",
		height: 50,
		width:50,

	},
	loveImage: {
		backgroundColor: "transparent",
		height: 40,
		width:50,
	},
	loveImage_green:{
		backgroundColor: "transparent",
		height: 55,
		width:70,
	},
	dislikeImage: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
	},
	bad_text:{
		color:'#ccc',
		fontSize:15,
		paddingVertical:5,
		textAlign:"center",
		
	},
	bad_View:{
		fontSize:15,
		padding:5,
		textAlign:"center"
	},
		bad_text1:{
		color:'#ccc',
		fontSize:15,
		//padding:3,
		textAlign:"center",
		paddingRight:10,
		//paddingTop:5
		
	},
	bad_View1:{
		fontSize:15,
		//padding:3,
		textAlign:"center",
		paddingRight:10,
		//paddingTop:5
	},
	submit_rate:{
		width:80,
		height:30,
		backgroundColor:"#159CDA",
		borderRadius:3,
		padding:5
	},
	submit_text:{
		color:'white',
		textAlign:'center',
		fontSize:15
	},
	submit_rategame:{
		width:80,
		height:30,
		backgroundColor:"#ddd",
		borderRadius:3,
		padding:5
	},
	description_text:{
		flex: 0.3,
        marginTop: 10,
        marginStart: 10,
        textAlign: "left"
	},
	sample_text:{
		flex: 1,
        marginTop: 10,
        marginStart: 10,
        textAlign: "left"
	},
	footer_tab:{
		backgroundColor: "#fff",
        borderTopColor: "#ccc",
        borderWidth: 1,	
        borderBottomColor: "white"
	},
	image_load:{
		 height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
	},
	login_style:{
		
        margin: 25,
        flexDirection: "column",
        alignItems: "center"
	},
	gameViews:{
		justifyContent:'space-around',
          flexDirection: "row",
          padding: 20,

	},
	modal_txt:{
		alignSelf: "flex-start",
        fontSize: 18,
        fontWeight: "200",
        top: 0
	},
	modal_links:{
		flexDirection: "row",
        alignSelf: "flex-start",
        justifyContent: "space-around",
        marginTop: 40,
        marginBottom: 50
	},
	modal_visible:{
		backgroundColor: "#159CDA",
	      borderRadius: 4,
	      height:25,
	      width:60
	  },
	  shop_btn:{
	  	color: "white",
        fontSize: 14,
        textAlign: "center",
        paddingTop:Platform.OS === "ios" ? 4 : 2
	  },
	  averageView:{
	  	justifyContent:'space-around',
	      flexDirection: "row",
	      alignItems: "flex-start",
	      padding: 10,
	  },
	  rateGame:{
	  	flexDirection: "row",
	  	justifyContent:'space-between',
	  	padding:15
	  }
})

export default styles
