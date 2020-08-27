//
//  LoginStyleSheet.js
//  DoubleCritical
//
//  Created by Supernova.
//  Copyright © 2018 S7Works. All rights reserved.
//

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navigationBarItem: {},
  headerLeftContainer: {
    flexDirection: "row",
    marginLeft: 8
  },
  navigationBarItemIcon: {
    tintColor: "white"
  },
  //////// Styling for login screen ////////

  Loginmainview: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    justifyContent: "center"
  },

  NormLoginview: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center"
  },

  SocialLoginview: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 10
  },

  Forgotpassview: {
    width: "100%",
    justifyContent: "flex-start"
  },

  ///////// Styling for login screen ///////

  loginView: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  labelText: {
    color: "black",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    width: 211,
    marginLeft: 88,
    marginTop: 32
  },
  signUpFieldsView: {
    backgroundColor: "white",
    borderRadius: 2,
    alignSelf: "stretch",
    height: 111,
    marginLeft: "5%",
    marginRight: 32,
    marginTop: "5%"
  },
  yourNicknameTextInput: {
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    height: 40
  },
  separatorView: {
    backgroundColor: "black",
    opacity: 0.1,
    height: 1,
    marginRight: 5,
    marginTop: 0
  },
  yourSpacemailTextInput: {
    backgroundColor: "transparent",
    padding: 0,
    color: "black",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginLeft: 2,
    marginTop: 0
  },
  separatorTwoView: {
    backgroundColor: "black",
    opacity: 0.1,
    height: 1,
    marginRight: 5,
    marginTop: 0
  },
  forgotYourPasswordButton: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: 166,
    height: 18,
    marginLeft: "3%",
    marginBottom: 50,
    marginTop: "5%"
  },
  forgotYourPasswordButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  forgotYourPasswordButtonText: {
    color: "#0C8AE3",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    marginTop: 0
  },
  loginButton: {
    backgroundColor: "rgba(204, 202, 208, 0.95)",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    alignSelf: "stretch",
    height: 52,
    marginLeft: 31,
    marginRight: 32
  },
  loginSuccessButton: {
    backgroundColor: "#1D365F",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    alignSelf: "stretch",
    height: 52,
    marginLeft: 31,
    marginRight: 32,
    marginBottom: 200
  },
  loginButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  loginButtonText: {
    color: "rgba(245, 239, 239, 0.99)",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center"
  },
  oneTapSignInButton: {
    backgroundColor: "transparent",
    flexDirection: "row",
    padding: 0,
    alignSelf: "center",
    width: 190,
    height: 25,
    marginBottom: 8,
    justifyContent: "space-around",
    alignItems: "flex-end"
  },
  oneTapSignInButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  oneTapSignInButtonText: {
    color: "#585858",
    fontSize: 19,
    fontWeight: "normal",
    textAlign: "center"
  },
  buttonTwoButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 25,
    marginLeft:5
  },
  buttonTwoButton: {
    backgroundColor: "rgb(27, 67, 147)",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 130,
    height: 42,
  },
  buttonTwoButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  buttonButton: {
    backgroundColor: "rgb(12, 139, 202)",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 130,
    height: 42,
  },
  buttonButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  buttonButtonText: {
    color: "white",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    marginRight: 35,
    marginLeft:5
  },
  facebookImg: {
    width: 25,
    height: 25,
    borderRadius: 12,
    marginLeft: 10
  },
  googleImg: {
    width: 28,
    height: 28,
    borderRadius: 15,
    marginLeft: 15
  },
  icon_password: {
    position: "absolute",
    right: 0,
    height: 40,
    width: 35,
    padding: 5,
    top: 90
  },
  icon_image: {
    resizeMode: "contain",
    height: "100%",
    width: "100%"
  }
});

export default styles;
