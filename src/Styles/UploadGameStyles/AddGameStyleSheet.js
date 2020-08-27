
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	welcomeView: {
		backgroundColor: "white",
		width : "100%",
		height:"100%",
		flex:1	 
	},
	imageImage: {
		backgroundColor: "transparent",
		height: 230,
	},
	gameImage:{
		backgroundColor: "#FFF",
	      justifyContent: "center",
	      alignItems: "center",
	      marginTop: 40
	},
	gameTextView:{
		flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF",
      marginTop: 20
  },
  gameText:{
  	backgroundColor: "transparent",
    color: "rgba(0, 0, 0, 0.72)",
    fontSize: 16,
  },
  baseGame:{
  	backgroundColor: "transparent",
    color: "black",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    marginTop: 20
},
gameView:{
	flex: 1,
	  flexDirection: "row",
	  marginLeft: 20,
	  marginTop: 30
	},
	GameView1:{
	flex: 1,
    padding: 15,
    borderRadius: 40
},
TouchGame:{
	justifyContent: "center",
	  alignItems: "center",
	  borderRadius: 20,
	  borderWidth: 1,
	  backgroundColor: "#fff",
	  height: 40,
	  width: "85%",
	  marginLeft: 25
	},
	Notnow:{
		color: "#000",
        textAlign: "center",
        fontWeight: "normal",
        fontSize: 15
	},
	upload:{
		justifyContent: "center",
	      alignItems: "center",
	      borderRadius: 20,
	      backgroundColor: "#1D365F",
	      height: 40,
	      width: "85%"
	  },
	  addGame:{
	  	color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
	  }
})

export default styles
