import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	viewStyle: {
		justifyContent: "center",
		flex: 1,
		marginTop: 25
	},
	textStyle: {
		padding: 10
	},
	btn: {
		height: 30,
		width: 70,
		marginTop: 10,
		backgroundColor: "blue",
		justifyContent: "center",
		alignItems: "center"
	},
	btnTxt: {
		color: "#fff",
		alignItems: "center",
		fontSize: 12,
		fontWeight: "bold"
	},
	gameView: {
		backgroundColor: "#fff",
		height: 75,
		width: "100%",
		padding: 15,
		borderBottomWidth: 1,
		borderColor: "gray",
		flexDirection: "row"
	},
	gameTxt: {
		color: "black",
		fontSize: 15,
		marginTop: 5
	},
	searchCategoryButtonText: {
		fontSize: 15,
		textAlign: "center",
		color: "black"
	},
	searchCategoryButtons: {
		backgroundColor: "#DCDCDC",
		borderRadius: 30,
		borderWidth: 1,
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "flex-start",
		padding: 5,
		marginTop: 30,
		marginLeft: 10,
		borderColor: "rgba(204, 202, 208, 0.95)"
	},
	topSearchCategoryHeading: {
		fontWeight: "bold"
	},
	filterListText: {
		marginStart: 10,
		fontSize: 16
	},
	filterListDropdownLeft: {
		flex: 1,
		marginStart: 10,
		marginEnd: 10
	},
	filterListDropdownRight: {
		flex: 1,
		marginEnd: 10,
		marginLeft: 10
	},
	gameTitle:{
		marginTop: "5%",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	headerView:{
		marginLeft: "4%",
		fontWeight: "bold",
		fontSize: 15
	},
	MainView:{
		alignItems: "center",
		marginTop: 30,
		left: 10,
		right: 10,
		justifyContent: "center",
	},
	GameImage: {
		width: 50, 
		height: 50, 
		marginRight: 20
	},
	
})

export default styles
