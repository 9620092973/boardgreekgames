import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import styles from "../../Styles/LoginPageStyles/LoginStyleSheet";
//import index from '../../constants/index'
import { _TrendingGame } from "../../Networks/ReUsableCalls";
import { socialLogin } from "../../Networks/LoginScreenCalls";
import { authRegistration } from "../../Networks/RegistrationCalls";
import { LoginUsers, _storeData } from "../../Networks/LoginScreenCalls";
import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { loggedOutScreen }  from '../../Redux/Actions';
import * as Types from '../../Redux/Actions/types'
import { Platform } from "@unimodules/core";

class FacebookAndGoogleLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePassword: true,
      password: "",
      username: "",
      user_id: "",
      checked: false,
      checkenewletter: false,
      password: "asdasd"
    };
    this.LoginIn = this.LoginIn.bind(this);
    this.FBlogIn = this.FBlogIn.bind(this);
    this.GooglelogIn = this.GooglelogIn.bind(this);
    this.socialLogindataFB = this.socialLogindataFB.bind(this);
    this.navigateToNextScreen = this.navigateToNextScreen.bind(this)
  }

  // Login with Facebook account integration url
  socialLogindataFB(fbResponse, token) {
    const { url } = fbResponse;
    socialLoginFB(fbResponse.url, token)
      .then(response => {
        console.log("social login fb ", JSON.stringify(response));
        if (response.status == 200) {
          //this.props.navigateToNextScreen()
          Alert.alert("Sucessfully Login");
        }
      })
      .catch(error => {
        alert("Login Failed Please try again");
        console.log("failed to login fb", error);
      });
  }

  // Storing user token
  async storeToken(authObject) {
    if (authObject !== null) {
      // Store user in Async
      _storeData(authObject);
    }
    return true;
  }

  // Storing Username
  async storeUsername(uname) {
    try {
      await AsyncStorage.setItem("username", uname); //ACCESS_TOKEN = username
      //this.getUsername();
    } catch (error) {
      console.log(error);
    }
  }

  // Login with facebook async fuction
  async FBlogIn() {
    try {
      console.log("inside try");
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        "483471218906843",
        {
          permissions: ["public_profile", "email"]
        }
      );
      console.log("inside try", type);
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture,birthday,hometown,first_name,last_name`
        );
        const jsonFB = await response.json();
        this.setState({
          username: jsonFB.name
        });
        authRegistration(
          jsonFB.name,
          jsonFB.first_name,
          jsonFB.last_name,
          jsonFB.email,
          this.state.password
        ).catch(error => {
            console.log("registration fails", error.message);
          });
          this.LoginIn(jsonFB.name, this.state.password)
      }
    } catch (error) {
      console.log("facebook login error", error);
      Alert.alert(`Please try again later!`);
    }
  }

  // Google with facebook async fuction
  async GooglelogIn() {
    const clientId =
      "656965400486-h723qh179jea8mhnsjja3v2bge01gerg.apps.googleusercontent.com";

    try {
      const result = await Google.logInAsync({
        clientId: clientId,
        scpoes: ["profile", "email"]
      });
      if (result.type === "success") {
        console.log("Token", result);
        this.setState({
          username: result.user.name
        });
        authRegistration(
          result.user.name,
          result.user.givenName,
          result.user.familyName,
          result.user.email,
          this.state.password
        )
          .then(response => {
            console.log('[Google Registration] Suceess')
          })
          .catch(error => {
            console.log("registration fails", error.message);
          });
          this.LoginIn(result.user.name, this.state.password);
        return result;
      }
      
    } catch (error) {
      console.log("reasgfdf", error);
      return { error: true };
    }
  }

  LoginIn(username, userpassword) {
    console.log("[LoginIn] inside")
    // Login integration url

    LoginUsers(username, userpassword)
      .then(response => {
        if (response.status == 200) {
          console.log("response is 200", response.data);
          if (response.data.user_status) {
            if(this.props.isGameInfo == true){
              
              this.props.loggedOutScreenData()
            }
            this.storeToken(response.data);
            this.storeUsername(this.state.username);
            // if(this.props.isLoginScreen == true){
            //   this.props.navigateToNextScreen()
            // }
            // else{
            //   this.props.navigation.navigate("HomePage",{loginUser:"loginuser"});
            // }
            this.navigateToNextScreen()
          }
        }
      })
      .catch(error => {
        console.log("failed to login", error.message);
        Alert.alert("Please Enter Valid Username and Password");
        throw new Error(error);
      });
  }

  navigateToNextScreen() {
    const { gameId, screenName } = this.props
    console.log("gameId is",gameId)
    console.log("screenName is",screenName)
		this.props.loggedOutScreen(Types.LAST_LOGGEDOUT_SCREEN)
		if(screenName && gameId  ) {
      console.log('inside navigateToNextScreen condition')
			this.props.navigation.navigate(screenName, { game_id: gameId, })
		} else {
      console.log('outside navigateToNextScreen condition')
			this.props.navigation.navigate("HomePage",{loginUser:"loginuser"})
		}
	}

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.oneTapSignInButton}>
          <Text style={styles.oneTapSignInButtonText}>{this.props.title}</Text>
        </TouchableOpacity>

        <View
          style={{
            width: "100%",
            height: 55,
            marginTop: 14,
            flexDirection: "row",
            justifyContent:'center'
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent:'center',
              flexDirection: "row",
              marginLeft:Platform.OS=== 'android'? 20 : null
            }}
          >
            <TouchableOpacity
              onPress={this.FBlogIn}
              style={styles.buttonTwoButton}
            >
              <Image
                source={require("../../../assets/Image/facebook_img.png")}
                style={styles.facebookImg}
              />
              <Text style={styles.buttonTwoButtonText}>Facebook</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginLeft:20
            }}
          >
            <TouchableOpacity
              onPress={this.GooglelogIn}
              style={styles.buttonButton}
            >
              <Image
                source={require("../../../assets/Image/google_img.png")}
                style={styles.googleImg}
              />
              <Text style={styles.buttonButtonText}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
	gameId: state.loggedOutReducer.game_id,
	screenName: state.loggedOutReducer.screen_name,
})

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		loggedOutScreen,
	}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(FacebookAndGoogleLogin)
