//
//  AccountSettingStyleSheet.js
//  AcntStngPrsnlInfoAddclction
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  welcomeView: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "flex-end"
  },

  viewView: {
    backgroundColor: "transparent"
  },
  hrLine: {
    borderWidth: 0.2,
    marginTop: 8,
    marginBottom: 8,
    borderColor: "black",
    borderStyle: "solid",
    height: 1
  },
  wholeviewView: {
    backgroundColor: "white",
    position: "absolute",
    alignItems: "flex-start",
    left: 0,
    top: 0
  },
  imageTwoImage: {
    width: 20,
    height: 20,
    marginTop: 10
  },
  labelSevenText: {
    color: "white",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 36,
    marginTop: 10
  },
  imageImage: {
    width: 26,
    height: 26,
    marginLeft: 100,
    marginTop: 10
  },
  viewScrollView: {
    height: 671
  },
  accountinfoView: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.79)",
    position: "absolute",
    left: 0,
    right: 8,
    top: 0,
    height: 603
  },
  labelFiveText: {
    color: "black",
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "left"
  },
  emailTwoText: {
    color: "rgba(0, 0, 0, 0.57)",
    fontSize: 15,
    fontWeight: "normal",
    alignItems: "flex-start",
    width: 107,
    marginTop: 19
  },
  textFieldTwoTextInput: {
    color: "black",
    fontWeight: "normal",
    alignItems: "flex-start",
    height: 23,
    marginTop: 3,
    
  },
  emailseperatorView: {
    backgroundColor: "rgba(192, 192, 192, 0.79)",
    alignSelf: "stretch",
    height: 1,
    // marginRight: 9
  },
  emailText: {
    color: "rgba(0, 0, 0, 0.57)",
    fontSize: 15,
    fontWeight: "normal",
    alignItems: "flex-start",
    width: 107,
    marginTop: 30
  },
  textFieldTextInput: {
    padding: 0,
    color: "black",
    fontSize: 15,
    fontWeight: "normal",
    alignItems: "flex-start",
    height: 23,
    marginTop: 4
  },
  viewThreeView: {
    backgroundColor: "rgba(192, 192, 192, 0.79)",
    alignSelf: "stretch",
    height: 1,
    marginLeft: 22,
    marginRight: 9,
    marginTop: 6
  },
  labelFourText: {
    color: "black",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left"
  },
  labelThreeText: {
    color: "black",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",

    marginTop: 3
  },
  switchTwoSwitch: {
    width: 51,
    height: 31,
    marginLeft: 90
  },
  switchSwitch: {
    width: 51,
    height: 31,
    marginLeft: 120,
    marginTop: 6
  },
  labelTwoText: {
    color: "black",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    alignSelf: "center",
    marginTop: 41
  },
  socialacccountsView: {
    backgroundColor: "transparent",
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  buttonTwoButtonText: {
    color: "white",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    marginRight: 15
  },
  buttonTwoButton: {
    backgroundColor: "rgb(27, 67, 147)",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 150,
    height: 42,
    marginLeft: 29
  },
  buttonTwoButtonImage: {
    marginRight: 10
  },
  buttonThreeButtonImage: {
    marginRight: 10
  },
  buttonThreeButton: {
    backgroundColor: "rgb(12, 139, 202)",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,
    width: 150,
    height: 42,
    marginLeft: 24
  },
  buttonThreeButtonText: {
    color: "white",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    marginRight: 20
  },
  buttonButtonText: {
    color: "#191970",
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "left"
  },
  buttonButton: {
    backgroundColor: "white",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#191970",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    alignSelf: "center",
    width: 224,
    height: 47,
    marginTop: 33
  },
  buttonButtonImage: {
    marginRight: 10
  },
  viewTwoView: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgba(192, 192, 192, 0.79)",
    alignSelf: "stretch",
    height: 2,
    marginBottom: 0
  },
  labelText: {
    color: "rgba(0, 0, 0, 0.41)",
    fontSize: 18,
    paddingBottom: "4%",
    textAlign: "center",
    marginTop: 15
  },
  labelSixText: {
    color: "black",
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "left",
    position: "absolute",
    left: 27,
    top: 365
  },
  facebookImg: {
    width: 25,
    height: 25,
    borderRadius: 10,
    marginLeft: 10
  },
  googleImg: {
    width: 28,
    height: 28,
    borderRadius: 15,
    marginLeft: 15
  }
});

export default styles;
