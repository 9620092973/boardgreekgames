//
//  MyProfileStyleSheet.js
//  My Profile
//
//  Created by Supernova.
//  Copyright © 2018 S7works.io. All rights reserved.
//

import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  welcomeView: {
    backgroundColor: "transparent",
    flex: 1,
    width: wp("100%")
  },
  viewAll: {
    backgroundColor: "transparent",
    color: "rgb(10, 186, 239)",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "right",
    paddingHorizontal: 3
  },
  viewView: {
    backgroundColor: "rgb(8, 67, 159)",

    position: "absolute",
    left: 0,
    right: 1,
    top: 0
  },

  viewTwoView: {
    backgroundColor: "white",
    borderRadius: 60,
    borderWidth: 1,
    shadowColor: "rgb(138, 131, 131)",
    shadowRadius: 2,
    shadowOpacity: 1,
    width: 100,
    height: 150,
    marginTop: 3
  },
  imageTwoImage: {
    backgroundColor: "transparent",

    height: 100,
    width: 100,
    borderRadius: 50
  },
  viewThreeView: {
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "rgb(107, 104, 104)",
    shadowRadius: 2,
    shadowOpacity: 1,
    width: 35,
    height: 35,
    position: "absolute",
    left: 215,
    top: 10
  },
  PostMainView:{
    margin:15
  },
  TitleView:{
    fontSize:15,
    fontWeight:"bold"
  },
  TitleText:{
    fontSize:15,
    fontWeight:"bold",

  },
  ContentText:{
    margin:10
  },
  imageImage: {
    backgroundColor: "transparent",
    position: "absolute",
    left: 223,
    top: 20,
    height: 20,
    width: 20
  },
  viewSixView: {
    backgroundColor: "rgb(8, 67, 159)",
    width: 46,
    height: 44
  },
  labelText: {
    backgroundColor: "transparent",
    color: "white",

    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",

    marginLeft: 50,

    marginTop: 30
  },
  viewFiveView: {
    backgroundColor: "rgb(8, 67, 159)",
    width: 46,
    height: 44,
    marginLeft: 152
  },
  imageThreeImage: {
    backgroundColor: "transparent",

    position: "absolute",
    right: 21,
    width: 25,
    top: 30,
    height: 25
  },
  imageFourImage: {
    backgroundColor: "transparent",

    position: "absolute",
    left: 14,
    width: 20,
    top: 30,
    height: 20
  },
  viewEightView: {
    backgroundColor: "white",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 91
  },
  labelTenText: {
    backgroundColor: "transparent",
    color: "#0352A0",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    width: 317
  },
  labelNineText: {
    backgroundColor: "transparent",
    color: "black",
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "center",

    marginTop: 6
  },
  labelEightText: {
    color: "black",
    fontSize: 16,
    fontWeight: "normal",
    paddingBottom: 3,
    marginLeft: 5
  },
  viewSevenView: {
    backgroundColor: "white",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 77
  },
  labelSevenText: {
    color: "black",

    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent"
  },
  labelFourText: {
    backgroundColor: "transparent",
    color: "#0C8AE3",

    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    marginTop: 9
  },
  labelFiveText: {
    backgroundColor: "transparent",
    color: "black",

    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center"
  },
  labelTwoText: {
    backgroundColor: "transparent",
    color: "#0C8AE3",

    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    marginTop: 9
  },
  labelSixText: {
    color: "black",

    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent"
  },
  labelThreeText: {
    color: "#0C8AE3",

    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    marginTop: 9
  },

  buttonButtonText: {
    color: "rgb(88, 84, 84)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left"
  },
  buttonButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  imageFiveImage: {
    backgroundColor: "transparent",
    position: "absolute",

    height: 24
  },
  labelElevenText: {
    color: "black",

    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    marginLeft: 13
  },
  viewNineView: {
    backgroundColor: "white",
    height: 25,
    marginTop: 57
  },
  viewScrollView: {
    backgroundColor: "white",
    position: "absolute",
    left: 2,
    width: 375,
    top: 0,
    height: 411
  },
  labelFourteenText: {
    color: "rgb(34, 200, 241)",

    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    backgroundColor: "transparent",
    marginLeft: 310,
    marginRight: 292
  },
  viewTwoScrollView: {
    backgroundColor: "white",
    alignSelf: "flex-end",
    width: 652,
    height: 130,
    marginTop: 5
  },
  viewTenView: {
    backgroundColor: "white",
    height: 25,
    marginLeft: 1,
    marginRight: 277,
    marginTop: 9
  },
  viewThreeScrollView: {
    backgroundColor: "white",
    alignSelf: "flex-end",
    width: 652,
    height: 130,
    marginRight: 1,
    marginTop: 8
  },
  viewFourScrollView: {
    backgroundColor: "white",
    alignSelf: "flex-end",
    width: 652,
    height: 130
  },
  labelTwelveText: {
    color: "black",

    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "transparent",
    marginLeft: 15
  },
  labelThirteenText: {
    backgroundColor: "transparent",
    color: "rgb(10, 112, 239)",

    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",

    marginRight: 10
  },
  imageEightImage: {
    backgroundColor: "transparent",
    width: 150,
    height: 130,
    marginLeft: 15
  },
  imageSevenImage: {
    backgroundColor: "transparent",
    borderRadius: 6,
    width: 120,
    height: 100,
    marginLeft: 15
  },
  imageSixImage: {
    backgroundColor: "transparent",
    borderRadius: 6,
    width: 120,
    height: 100,
    marginLeft: 15
  },
  imageElevenImage: {
    backgroundColor: "transparent",
    borderRadius: 6,

    width: 120,
    height: 100,
    marginLeft: 15
  },
  imageTenImage: {
    backgroundColor: "transparent",
    borderRadius: 6,
    width: 120,
    height: 100,
    marginLeft: 15
  },
  imageNineImage: {
    backgroundColor: "transparent",
    width: 150,
    height: 130,
    marginLeft: 15
  },
  viewElevenView: {
    backgroundColor: "white",
    position: "absolute",
    left: 1,
    right: 277,
    top: 5,
    height: 20
  },
  labelSixteenText: {
    color: "black",

    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "transparent",

    marginLeft: 15
  },
  labelFifteenText: {
    color: "#0C8AE3",

    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    backgroundColor: "transparent",

    marginRight: 10
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
  buttonButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    height: 44,
    borderRadius: 23,
    margin: 17,
    borderStyle: "solid",
    justifyContent: "center"
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch"
  },
  TextStyle: {
    color: "black",
    marginRight: 20
  },
  pro_image: {
    borderRadius: 50,
    height: 100,
    width: 100,
    marginLeft: "38%",
    marginTop: "20%"
  },
  img: {
    top: 12
  },
  upload_view: {
    width: 100,
    height: 100,
    backgroundColor: "#eee",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  image_pick: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    shadowColor: "#787c82",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    right: 0,
    bottom: 0,
    zIndex: 1
  },
  child: {
    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    textAlign: "center"
  },
  main: {
    flex: 1,
    backgroundColor: "white"
  },
  wrapperStyle: {
    flex: 1,
    width: "100%",
    padding: 6,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    elevation: 2
  },
  currentText: {
    textAlign: "center",
    alignSelf: "center",
    color: "black"
  },

  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black",
    marginRight: 10
  },

  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "grey",
    marginRight: 10
  },
  next: {
    fontWeight: "bold",
    fontSize: 40
  }
});

export default styles;
