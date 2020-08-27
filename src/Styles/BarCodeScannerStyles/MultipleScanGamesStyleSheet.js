
import { StyleSheet, Platform } from "react-native"

const styles = StyleSheet.create({
	loginView: {
		backgroundColor: "white",
		flex: 1,
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
	viewFiveView: {
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
	imageThreeImage: {
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
	imageTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 33,
		marginLeft: 98,
	},
	viewTwoView: {
		flex: 1,
	},
	bodyView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 605,
	},

	scanninginfoView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		width: 375,
		top: 0,
		height: 456,
	},
	imageImage: {
		marginTop: 40

	},
	labelText: {
		color: "black",
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: "center",
		backgroundColor: "transparent",
		marginTop: 41,
		paddingBottom: 80
	},
	seperatorView: {

		backgroundColor: "white",
		borderWidth: 0.5,
		borderColor: "rgba(192, 192, 192, 0.99)",

	},
	viewThreeView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 372,
		height: 130,
		marginTop: 2,
	},
	buttonsView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		width: 372,
		top: 0,
		height: 130,
	},

	deleteButton: {
		backgroundColor: "rgba(192, 192, 192, 0.8)",
		borderRadius: 30,
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		width: "40%"
	},
	deleteButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	deleteButtonText: {
		fontSize: 12,
		padding: Platform.OS === "ios" ? 10 : 7,
		textAlign: "center"
	},
	scanButton: {
		backgroundColor: "rgb(20, 56, 87)",
		borderRadius: 30,
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		width: "40%"
	},
	scanButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	scanButtonText: {
		color: "white",
		fontSize: 12,
		width: 100,
		textAlign: "center",
	},
	addcollectionButton: {
		backgroundColor: "rgba(192, 192, 192, 0.8)",
		borderRadius: 25,
		marginVertical: 5,
		height: 30

	},
	addcollectionButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	addcollectionButtonText: {
		padding: Platform.OS === "ios" ? 10 : 7,
		fontSize: 12,
		textAlign: "center",
	},
	ImageView: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
	},
	ButtonStyles: {
		flexDirection: "row",
		justifyContent:'space-around',
		alignItems: "center",
		marginHorizontal: 20,
		marginVertical: 20
	},
	// multipleGmeCollection styles

	GameImage: {
		// Setting up View inside content in Vertically center.
		justifyContent: "flex-start",
		padding: 8,
		paddingLeft: 8,
		flex: 1
	},
	imageViewContainer: {
		padding: 10,
		width: 60,
		height: 60
	},
	textViewContainer: {
		textAlignVertical: "center",
		flex: 4,
		padding: 15
	},
	separatorView: {
		backgroundColor: "black",
		opacity: 0.1,
		height: 1,
		width: "100%"
	}
})

export default styles
