//
//  UploadGame3StyleSheet.js
//  Upload game
//
//  Created by S7works.
//  Copyright © 2018 S7works. All rights reserved.
//

import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  signupView: {
    backgroundColor: "white",
    height: Dimensions.get("window").height-100,
    width: Dimensions.get("window").width,
    paddingHorizontal: "3%",
   // position:"absolute",
    //bottom:0,
    flex:1,
    marginTop:20,
    paddingLeft:10,
    paddingRight:10
   
  },
  viewView: {
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 90
  },
  viewTwoView: {
    backgroundColor: "rgb(8, 67, 159)",
    height: 90
  },
  imageImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: 44,
    height: 44
  },
  labelText: {
    backgroundColor: "transparent",
    color: "white",
    ////fontFamily: "Roboto-Regular",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 163,
    height: 24,
    marginLeft: 11,
    marginTop: 11
  },
  viewThreeView: {
    backgroundColor: "white",
    position: "absolute",
    left: 0,
    width: 375,
    top: 0,
    height: 577
  },
  // labelFiveText: {
  //   backgroundColor: "transparent",
  //   color: "rgb(71, 68, 68)",
  //   ////fontFamily: "Roboto-Regular",
  //   fontSize: 17,
  //   fontStyle: "normal",
  //   fontWeight: "bold",
  //   textAlign: "left",
  //   marginTop: 10
  //   //marginRight: 221,
  // },
  textFieldThreeTextInput: {
    backgroundColor: "transparent",
    paddingHorizontal: 3,
    paddingVertical: 5,
    color: "black",
    ////fontFamily: "Roboto-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 144,
    height: 33
  },
  labelSixText: {
    color: "rgb(71, 68, 68)",
    ////fontFamily: "Roboto-Regular",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 38,
    marginLeft: 4,
    marginTop: 9
  },
  textFieldTwoTextInput: {
    color: "black",
    ////fontFamily: "Roboto-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    paddingHorizontal: 3,
    paddingVertical: 5,
    width: 140,
    height: 33,
    marginLeft: 12
  },
  viewSevenView: {
    backgroundColor: "rgba(136, 124, 124, 0.56)",
    width: 142,
    height: 2
  },
  viewEightView: {
    backgroundColor: "rgba(136, 124, 124, 0.56)",
    width: 143,
    height: 1,
    marginLeft: 57
  },
  labelThreeText: {
    backgroundColor: "transparent",
    color: "rgb(71, 68, 68)",
    ////fontFamily: "Roboto-Regular",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    //marginRight: 221,
    marginTop: 20
  },
  textFieldFiveTextInput: {
    color: "black",
    ////fontFamily: "Roboto-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    paddingHorizontal: 3,
    paddingVertical: 5,
    width: 145,
    height: 33
  },
  labelTwoText: {
    backgroundColor: "transparent",
    color: "rgb(71, 68, 68)",
    fontSize: 17,
    paddingTop: "10%",
    width: "10%"
  },
  textFieldFourTextInput: {
    color: "black",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    paddingHorizontal: 3,
    paddingVertical: 5,
    width: 135,
    height: 33,
    marginLeft: 13
  },
  viewSixView: {
    backgroundColor: "rgb(136, 124, 124)",
    width: 142,
    height: 2
  },
  viewFiveView: {
    backgroundColor: "rgb(136, 124, 124)",
    width: 143,
    height: 1,
    marginLeft: 57
  },
  labelFourText: {
    backgroundColor: "transparent",
    color: "rgb(71, 68, 68)",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    marginTop: "2%"
  },
  labelFiveText:{
    backgroundColor: "transparent",
    color: "rgb(71, 68, 68)",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    marginTop: "2%",
  },
  categoryMechanicBox: {
    color: "rgb(71, 68, 68)",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "left",
    marginVertical: "10%",
    textAlign: "center"
  },
  FilterBtn:{
    backgroundColor: "#191970",
    justifyContent:"center",
    alignItems:"center",
    marginTop:40,
    padding:10,
    borderColor: "#191970",
    borderRadius: 30,
    borderWidth: 1,
    borderStyle: "solid"
  },
  textFieldTextInput: {
    color: "black",
    //fontFamily: ".SFNSText",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    padding: 0,
    height: 15,
    marginTop: 28
  },
  viewFourView: {
    backgroundColor: "rgb(136, 124, 124)",
    alignSelf: "flex-start",
    width: 334,
    height: 1
  },
  searchmodalbutton: {
    backgroundColor: "#191970",
    borderColor: "#191970",
    borderRadius: 30,
    borderWidth: 1,
    borderStyle: "solid",
    marginHorizontal: "4%",
    paddingVertical: "3%",
    marginVertical: "5%"
  },
  buttonButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  buttonButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlignVertical: "center",
    textAlign: "center"
  },
  textFieldSixTextInput: {
    backgroundColor: "transparent",
    paddingHorizontal: 3,
    paddingVertical: 5,
    color: "black",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    position: "absolute",
    left: 15,
    right: 34,
    top: 347,
    height: 33
  },
  textFieldSevenTextInput: {
    backgroundColor: "transparent",
    paddingHorizontal: 3,
    paddingVertical: 5,
    color: "black",
    ////fontFamily: "Roboto-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    position: "absolute",
    left: 15,
    width: 326,
    top: 347,
    height: 33
  },
  uploadButton: {
    backgroundColor: "#1D365F",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(162, 157, 157, 0.65)",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    alignSelf: "stretch",
    height: 52,
    marginLeft: 31,
    marginRight: 29,
    marginTop: 30
  },
  uploadButtonText: {
    color: "white",
    //fontFamily: "Tahoma",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center"
  },
  viewTwelveView: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgba(204, 204, 204, 0.86)",
    borderStyle: "solid",
    height: 2,
    marginTop: 5
  },
  buttonButton: {
    backgroundColor: "rgba(162, 159, 159, 0.54)",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(162, 157, 157, 0.65)",
    borderStyle: "solid",
    //cflexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    alignSelf: "stretch",
    height: 52,
    marginLeft: 31,
    marginRight: 29,
    // marginBottom: 300,
    marginTop:30,
  },
});

export default styles;
