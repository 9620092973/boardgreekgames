import { StyleSheet, Dimensions} from "react-native"

 //const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
	welcomeView: {
		backgroundColor: "black",
		flex:1
	},
	viewView: {
		backgroundColor: "transparent",
		flex: 1,
	},
	wholeviewView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 4,
		height: 667,
	},
	viewThreeView: {
		backgroundColor: "transparent",
		height: 62,
	},
	headerView: {
		backgroundColor: "rgba(27, 67, 147, 0.92)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	imageTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 26,
		height: 33,
	},
	labelTwoText: {
		color: "white",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 36,
		marginTop: 4,
	},
	imageImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 33,
		marginLeft: 217,
	},
	viewTwoView: {
		backgroundColor: "black",
		height: 605,
	},
	image1Image: {
		backgroundColor: "transparent",
		paddingLeft:15	
	},
	image2Image: {
		backgroundColor: "transparent",
		paddingRight:15
		
	},
	labelText: {
		color: "white",
		fontSize: 15,
		textAlign:"center",
		backgroundColor: "transparent",	
	},
	lableView:{
		paddingTop:35,
		paddingBottom:10
	},
	image3Image: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		width: 285,
		height: 198,
		marginTop: 68,
	},
	game_text:{
        marginTop:30,
        textAlign:'center',
        fontSize:15
    },
    gamename:{
        padding:7,
        fontSize:25,
        textAlign:'center'
    },
    game_image:{
        width:'90%',
        height:200,
        marginLeft:20,
        padding:7
    },
    no_btn:{
        backgroundColor:"#ddd",
        height:40,
        width:50,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        borderRadius:5,
        marginLeft:75
    },
    /*ISBN complete styles */

    add_text:{
        marginLeft:70,
        fontSize:13,
        marginTop:10
    },
    text_add:{
     textAlign:'center',
     marginTop:20,

    },
    add_btn:{
      backgroundColor:'#ddd',
      height:60,
      width:200,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5,
      marginTop:40,
      marginLeft:90
    },
    direct_text:{
        backgroundColor:'#ddd',
        height:60,
        width:290,
        marginTop:40,
        marginLeft:50
    
    },
    /*video_scanner styles */
    scanner_image:{
        width:250,
        height:250,
        marginLeft:40,
        justifyContent:'center',
        alignItems:'center'
    },
    video_scanner:{
		width:"100%",
		height:"100%"
	},
		
	iconsBottom:{
		//flexDirection:"row",
	},
	
	img1:{
		marginTop:"0%",
		marginLeft:"7%",
		alignItems:"center",
	},
	img2:{
	
		marginTop:"2%",
		alignItems:"center",


	},
	img3:{
		marginRight:'6%',
		marginTop:"2%",
		alignItems:"center",


	},
	icons:{
		flexDirection:"row",
		justifyContent:'space-between',
		alignItems:"flex-end",
		paddingTop:20
	},
	container: {
  },
  cameraView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  maskOutter: {
    position: 'absolute',
     top:0,
    left: 0,
    bottom:10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  maskInner: {
    width: 250,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
  },
  maskFrame: {
    backgroundColor: 'rgba(1,1,1,0.6)',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: { flexDirection: 'row' },
});

export default styles
