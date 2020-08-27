import { StyleSheet, Platform, Dimensions } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    width: 400,
    height: 300
  },
  buttonOne: {
    backgroundColor: "#3ba1da",
    padding: 10,
    borderRadius: 4
  },
  btn_txt: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  ImgView: {
    width: 300,
    height: 50,
    backgroundColor: "white",
    borderWidth: 1,
    fontSize: 16,
    marginTop: 20,
    borderRadius: 5,
    borderColor: "#ddd"
  },
  forget_password: {
    color: "#6699cc",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 15
  },

  /* Main Page */
  loginPage_btn: {
    backgroundColor: "#ddd",
    width: 200,
    height: 40,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: "25%"
  },
  textBox: {
    fontSize: 18,
    alignSelf: "stretch",
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    borderWidth: 1.5,
    paddingVertical: 0,
    borderColor: "grey",
    borderRadius: 5
  },
  visibilityBtn: {
    position: "absolute",
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },
  btnImage: {
    resizeMode: "contain",
    height: "100%",
    width: "100%"
  },

  /* Forgot Password Styles */
  forgot_box: {
    width: 300,
    height: 50,
    backgroundColor: "white",
    borderWidth: 1,
    fontSize: 16,
    marginTop: 10,
    borderRadius: 5,
    borderColor: "#ddd",
    marginLeft: 30
  },
  forgot_label: {
    width: 300,
    height: 50,
    backgroundColor: "white",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 30
  },
  Submit_btn: {
    backgroundColor: "#ddd",
    height: 40,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 5,
    marginLeft: 60
  },

  /* FB Button Styles */
  fb_btn: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#4267b2"
  },
  facebook_View: {
    marginTop: 15,
    width: "75%"
  },
  google_btn: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#dc4e41"
  },
  google_view: {
    marginTop: 15,
    width: "75%"
  },
  fb_google_text: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 25
  },
  headerLeftContainer: {
    flexDirection: "row",
    marginLeft: 8
  },

  loginView: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center"
  },
  signUpFieldsView: {
    backgroundColor: "white",
    borderRadius: 2,
    alignSelf: "stretch",
    height: 111,
    marginLeft: 31,
    marginRight: 32,
    marginTop: 47
  },
  yourNicknameTextInput: {
    backgroundColor: "transparent",
    padding: 0,
    color: "black",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    height: 20,
    marginLeft: 15,
    marginRight: 5,
    marginTop: 14
  },
  separatorView: {
    backgroundColor: "black",
    opacity: 0.1,
    height: 1,
    marginRight: 5,
    marginTop: 16
  },
  yourSpacemailTextInput: {
    color: "black",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    padding: 0,
    height: 23,
    marginLeft: 15,
    marginRight: 5,
    marginTop: 11
  },
  separatorTwoView: {
    backgroundColor: "black",
    opacity: 0.1,
    height: 1,
    marginRight: 5,
    marginTop: 16
  },
  forgotYourPasswordButton: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: 166,
    height: 18,
    marginBottom: 26
  },
  forgotYourPasswordButtonText: {
    color: "rgba(17, 222, 236, 0.66)",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center"
  },
  forgotYourPasswordButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  loginButtonText: {
    color: "rgba(245, 239, 239, 0.99)",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center"
  },
  loginButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  oneTapSignInButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  oneTapSignInButton: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: 190,
    height: 31,
    marginBottom: 14
  },
  oneTapSignInButtonText: {
    color: "rgba(154, 163, 164, 0.8)",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center"
  },
  buttonTwoButton: {
    backgroundColor: "rgba(3, 14, 75, 0.89)",
    borderRadius: 23,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: 141,
    height: 55
  },
  buttonTwoButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  buttonTwoButtonText: {
    color: "white",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left"
  },

  buttonButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },

  logoImage: {
    width: 120,
  },
  logoImageAnimated: {
    marginBottom: 10, 
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "center"
  },
  labelText: {
    color: "black",
    fontSize: 19,
    fontStyle: "normal",
    fontWeight: "bold",
    backgroundColor: "transparent",
    textAlign: "center",
   
  },
  labelTwoText: {
    color: "rgba(0, 0, 0, 0.42)",
    fontSize: 12,
    fontStyle: "normal",
    textAlign: "center",
    fontWeight: "normal",
    backgroundColor: "transparent",
    marginVertical: 10,
    marginLeft:35,
    marginRight:35,
  },
  viewTwoView: {
    backgroundColor: "white",
    position: "absolute",
    left: 0,
    width: 355,
    top: 0,
    height: 270
  },
  imageImage: {
    backgroundColor: "white",
    resizeMode: "center",
    width: 109,
    height: 93
  },
  imageFourImage: {
    backgroundColor: "white",
    resizeMode: "center",
    width: 109,
    height: 142,
    marginTop: 13
  },
  imageFiveImage: {
    backgroundColor: "white",
    resizeMode: "center",
    width: 109,
    height: 142
  },
  imageTwoImage: {
    backgroundColor: "white",
    resizeMode: "center",
    width: 109,
    height: 93,
    marginTop: 13
  },
  imageThreeImage: {
    backgroundColor: "white",
    resizeMode: "center",
    width: 109,
    height: 93
  },
  imageSixImage: {
    backgroundColor: "white",
    resizeMode: "center",
    width: 109,
    height: 142,
    marginTop: 9
  },
  theSilverRiverText: {
    color: "white",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 102,
    height: 16
  },
  theSilverRiverTwoText: {
    color: "white",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 102,
    height: 14,
    marginTop: 4
  },
  theSilverRiverFourText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 102,
    height: 16
  },
  theSilverRiverThreeText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 103,
    height: 14,
    marginTop: 4
  },
  theSilverRiverSixText: {
    color: "white",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 102,
    height: 16
  },
  theSilverRiverFiveText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 103,
    height: 14,
    marginTop: 4
  },
  theSilverRiverEightText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 101,
    height: 16
  },
  theSilverRiverSevenText: {
    color: "white",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 103,
    height: 14,
    marginLeft: 1,
    marginTop: 4
  },
  theSilverRiverTenText: {
    color: "white",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 102,
    height: 16
  },
  theSilverRiverNineText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 103,
    height: 14,
    marginLeft: 4,
    marginTop: 4
  },
  theSilverRiverTwelveText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 102,
    height: 16
  },
  theSilverRiverElevenText: {
    color: "white",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 103,
    height: 14,
    marginTop: 4
  },
  viewView: {
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 110,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  viewView2: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 30,
    height: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  loginButton: {
    backgroundColor: "white",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#1D365F",
    alignItems: "center",
    height: 52
  },
  buttonButton: {
    backgroundColor: "#1D365F",
    borderRadius: 30,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: 345,
    height: 52,
    top: 20
  },
  buttonButtonText: {
    color: "#1D365F",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    alignItems: "center",
    top: "25%"
  },
  buttonButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  welcomeView: {
    backgroundColor: "white",
    flex: 1,
    height: '100%',
  },

  viewTwoView: {
    backgroundColor: "white",
    position: "absolute",
    left: 0,
    width: 355,
    top: 0,
    height: 270
  },
  imageImage: {
    backgroundColor: "white",
    resizeMode: "center",
    width: 109,
    height: 93
  },
  imageFourImage: {
    backgroundColor: "white",
    resizeMode: "center",
    width: 109,
    height: 142,
    marginTop: 13
  },
  imageFiveImage: {
    backgroundColor: "white",
    resizeMode: "center",
    width: 109,
    height: 142
  },
  imageTwoImage: {
    backgroundColor: "white",
    resizeMode: "center",
    width: 109,
    height: 93,
    marginTop: 13
  },
  imageThreeImage: {
    backgroundColor: "white",
    resizeMode: "center",
    width: 109,
    height: 93
  },
  imageSixImage: {
    backgroundColor: "white",
    resizeMode: "center",
    width: 109,
    height: 142,
    marginTop: 9
  },
  theSilverRiverText: {
    color: "white",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 102,
    height: 16
  },
  theSilverRiverTwoText: {
    color: "white",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 102,
    height: 14,
    marginTop: 4
  },
  theSilverRiverFourText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 102,
    height: 16
  },
  theSilverRiverThreeText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 103,
    height: 14,
    marginTop: 4
  },
  theSilverRiverSixText: {
    color: "white",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 102,
    height: 16
  },
  theSilverRiverFiveText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 103,
    height: 14,
    marginTop: 4
  },
  theSilverRiverEightText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 101,
    height: 16
  },
  theSilverRiverSevenText: {
    color: "white",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 103,
    height: 14,
    marginLeft: 1,
    marginTop: 4
  },
  theSilverRiverTenText: {
    color: "white",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 102,
    height: 16
  },
  theSilverRiverNineText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 103,
    height: 14,
    marginLeft: 4,
    marginTop: 4
  },
  theSilverRiverTwelveText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 102,
    height: 16
  },
  theSilverRiverElevenText: {
    color: "white",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 103,
    height: 14,
    marginTop: 4
  },

  buttonButton: {
    backgroundColor: "white",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(36, 40, 114, 0.62)",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: 315,
    height: 52,
    marginTop: 110
  },

  buttonButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  imageEightImage: {
    backgroundColor: "transparent",
    borderRadius: 6,
    width: 120,
    height: 100,
    marginLeft: 5
  },
  textProfile: {
    color: "#fff",
    // fontWeight: "bold",
    fontSize: 13,
    position: "absolute",
    bottom: 8,
    left: 13,
    right: 4
  },
  profilePlayer: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    position: "absolute",
    bottom: 10,
    left: 17
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  accountBtn: {
    fontSize: 15,
    textAlign: "center",

    padding: 10
  },
  MainView: {
    marginTop:Platform.OS === 'ios' ? 5:null,
    flex: 0.4,
    alignItems: "stretch",
    justifyContent: "flex-end",
    marginLeft: "6%",
    marginRight: "6%"
  },
  SignUpBtn: {
    justifyContent: "center",
    backgroundColor: "#1D365F",
    borderRadius: 30,
    borderWidth: 1,
    alignItems: "center",
    marginBottom: 10,
    paddingVertical:5
  },
  LoginBtn: {
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "#191970",
    borderRadius: 30,
    borderWidth: 1,
    alignItems: "center",
    paddingVertical:5,
    marginBottom: 10,
  }
}));
