import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  eventDetailView: {
    backgroundColor: "white",
    flex: 1
  },
  gradient: {
    height: 160,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  navigationHeader: {
    height: 70,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  naviHeader: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: "hidden"
  },
  viewTwoView: {
    backgroundColor: "rgb(6, 22, 193)",
    borderRadius: 33,
    position: "absolute",
    left: 0,
    right: 0,
    top: 18,
    height: 127
  },
  profileView: {
    backgroundColor: "#fff",
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  viewFiveView: {
    backgroundColor: "white",
    borderRadius: 27,
    alignSelf: "stretch",
    height: 48,
    marginLeft: 2,
    marginRight: 41
  },
  viewSevenView: {
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 1.5,
    flex: 1,
    shadowRadius: 2,
    shadowOpacity: 4,
    shadowOffset: { width: 0, height: 1 },
    width: "47%",
    height: "120%",
    marginLeft: "3%",
    borderWidth: 1,
    borderColor: "#F2EFEF",
    shadowColor: "gray",
    paddingVertical: 5
  },
  viewFourView: {
    backgroundColor: "white",
    borderRadius: 7,
    shadowRadius: 3,
    width: "30%",
    height: 70,
    marginLeft: 10,
    zIndex: 1,
    borderWidth: 1,
    borderColor: "#F2EFEF",
    shadowColor: "gray"
  },
  viewThreeView: {
    backgroundColor: "white",
    borderRadius: 7,
    shadowRadius: 3,
    width: "30%",
    height: 70,
    marginLeft: 10,
    zIndex: 1,
    borderWidth: 1,
    borderColor: "#F2EFEF",
    shadowColor: "gray"
  },
  profileImage: {
    position: "absolute",
    left: 320,
    right: 15,
    top: 23,
    height: 50,
    flexDirection: "row"
  },
  imageThreeImage: {
    backgroundColor: "transparent",
    borderRadius: 20,
    width: 50,
    height: 50
  },
  imageImage: {
    backgroundColor: "transparent",
    width: 30,
    height: 30,
    marginLeft: 40,
    marginTop: 7
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
    left: 20,
    right: 30
  },
  labelText: {
    backgroundColor: "transparent",
    color: "black",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    marginTop: 10,
    marginLeft: 8
  },
  imageTwoImage: {
    backgroundColor: "transparent",
    width: 30,
    height: 30,
    marginLeft: 40,
    marginTop: 7
  },
  labelTwoText: {
    backgroundColor: "transparent",
    color: "black",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    marginTop: 10,
    marginLeft: 10
  },
  textFieldTextInput: {
    backgroundColor: "transparent",
    padding: 10,
    color: "black",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 290,
    height: 39,
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "white"
  },
  searchIcon: {
    color: "white"
  },
  dcText: {
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: 22,
    color: "white",
    left: "25%"
  },

  imageFourImage: {
    backgroundColor: "transparent",
    textAlign: "center",
    width: 45,
    height: 40,
    position: 'relative'
  },
  imageFiveImage: {
    backgroundColor: "transparent",
    width: 40,
    height: 41,
    marginTop: "7%",
    marginLeft: "30%"
  },
  labelThreeText: {
    backgroundColor: "transparent",
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: "3%",
    marginTop: 5
  },
  labelFourText: {
    backgroundColor: "transparent",
    color: "black",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
    top: "16%"
  },
  mode_btn: {
    backgroundColor: "#ddd",
    width: 250,
    height: 60,
    marginLeft: "15%",
    marginTop: 25
  },
  mode_text: {
    textAlign: "center",
    padding: 20
  },
  list_image: {
    width: 40,
    height: 40
  },
  serach_touch: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
    width: 300,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fff"
  },
  search_icon: {
    marginTop: 10,
    marginLeft: 10,
    color: "#B6B4B4"
  },
  following_feed: {
    width: "90%",
    height: 200,
    marginLeft: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  following_title: {
    backgroundColor: "#ddd",
    alignItems: "center",
    width: "90%",
    marginLeft: 20,
    padding: 10,
    marginTop: 10
  },
  game_arrow: {
    position: "absolute",
    right: 5,
    height: 40,
    width: 35,
    padding: 5
  },
  imageEightImage: {
    backgroundColor: "transparent",
    width: 150,
    height: 130,
    borderRadius:4,
    overflow:'hidden'
  },
  textProfile: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 5,
    marginTop: 5
  },
  profilePlayer: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    margin: 5
  },
  labelTwelveText: {
    color: "rgb(90, 86, 86)",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    marginLeft: 15
  },
  labelThirteenText: {
    backgroundColor: "transparent",
    color: "rgb(10, 186, 239)",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "right",
    marginRight: 12
  },
  headerView: {
    marginLeft: "4%",
    fontWeight: "bold",
    fontSize: 15
  },
  gameTitle: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  profileImage: {
    backgroundColor: "red",
    borderRadius: 50 / 2,
    width: 50,
    height: 50
  },
  discoveryView: {
    flexDirection: "row",
    position: "absolute",
    top: 20,
    left: "1%",
    right: "4%",
    alignItems: "center",
    justifyContent: "space-around"
  },
  homeTitle: {
    marginTop: Platform.OS === 'ios' ? 4 : 1,
    fontWeight: "bold",
    fontSize: 18,
    color: "white"
  },
  avatarImage: {
    backgroundColor: "transparent",
    borderRadius: 50 / 2,
    width: 50,
    height: 50
  }
});

export default styles;
