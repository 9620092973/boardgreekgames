import React from "react";
import Image from "react-native-remote-svg";
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  AsyncStorage,
  ImageBackground,
  ActivityIndicator,
  Platform,
  StatusBar,
  NativeModules
} from "react-native";
import styles from "../../Styles/Header/header";
import { Container, Content, Footer, FooterTab } from "native-base";
import { Logout, _removeUser } from "../../Networks/HeaderCalls";
import { LinearGradient } from "expo-linear-gradient";
import {
  AntDesign,
  MaterialIcons,
  EvilIcons,
  Ionicons,
  FontAwesome
} from "@expo/vector-icons";
import { GetProfilePic } from "../../Networks/UserProfileCalls";
import { _retrieveData } from "../../Networks/LoginScreenCalls";
import { connect } from "react-redux";
import { avatarGet, avatarUploading } from "../../Redux/Actions";
import { bindActionCreators } from "redux";
import * as Types from "../../Redux/Actions/types";

import ProfilePhoto from "../Header/ProfilePhoto";
import FeedbackIcon from "../../../assets/Image/FeedbackIcon.svg" 
import LogoutImage from "../../../assets/Image/LogoutImage.svg"
import ProfileImage from "../../../assets/Image/ProfileImage.svg"
import ScanImage from "../../../assets/Image/ScanImage.svg"
import CollectionImage from "../../../assets/Image/CollectionImage.svg"
import FollowingImage from "../../../assets/Image/FollowingImage.svg"
import NotificationsImage from "../../../assets/Image/NotificationsImage.svg"
import AccountSettingsImage from "../../../assets/Image/AccountSettingsImage.svg"
import { getStatusBarHeight } from 'react-native-status-bar-height';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? getStatusBarHeight() : 0;

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={{height: STATUSBAR_HEIGHT, backgroundColor }}>
  </View>
);

class SideMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      image: null,
      user_id: ""
    };
    this.userProfilePic = this.userProfilePic.bind(this);
    this.handleLogout = this.handleLogout.bind(this)
  }

  async componentDidMount() {
    const usernameGet = await _retrieveData();
    if (usernameGet) {
      this.setState({ user_id: usernameGet.user_id });
    }
    this.getUsername();
    this.userProfilePic();
  }

  //Logged in user will logout with this function
  handleLogout() {
    Logout().then(response => {
      if (response.status == 200) {
        _removeUser();
        this.props.navigation.navigate("AuthLoading");
      }
    });
  }
  async getUsername() {
    try {
      username = await AsyncStorage.getItem("username");
      this.setState(
        {
          username: username
        }
      );
    } catch (error) {
      console.log("@Error [sidemenu]", error.message);
    }
  }

  /* my profilre get method of image */
  userProfilePic() {
    GetProfilePic().then((response) => {
    	this.setState({image:response.data.profile_picture})
    })
    	.catch((error) => {
    		console.log("@Error [sidemenu] ProfilePic", error.message);
    	})
  }

  render() {
    return (
      <Container>
       <MyStatusBar backgroundColor="#001a33" barStyle="light-content" />
        <Content>        
          <View style={styles.welcomeView}>
            <View style={styles.gradient}>
            <LinearGradient
          colors={["#001a33", "#004f99"]}
          style={{paddingBottom:Platform.OS ==='android' ? 10 :null, flex:1}}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
      
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Profile", {
                  userName: this.state.username,
                  userId: this.state.user_id,
                  profileType: "MyProfile"
                });
              }}
            >
              <View
                style={{
                  marginLeft: 30,
                  marginTop: Platform.OS ==='android' ? 40 :20,
                  marginBottom:20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ProfilePhoto
                  style={[styles.profileView, {top: 0}]}
                  size={50}
                  styleIcon={{ position: "absolute", top: 15 }}
                  profileImage = {this.state.image}
                />

                <View style={{ flexDirection: "column" }}>
                  <View>
                    <Text style={styles.labelThreeText1}>
                      {this.state.username}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            </LinearGradient>
            </View>
           
            <View style={{
                marginTop: Platform.OS == 'android' ? 140 : 120 
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Profile", {
                    userName: this.state.username,
                    userId: this.state.user_id,
                    profileType: "MyProfile"
                  });
                }}
              >
                <View
                  pointerEvents="box-none"
                  style={{
                    width: 163,
                    height: 44,
                    marginTop: 30,
                    marginLeft:32,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <ProfileImage width={30} height={30} />
                  <Text style={styles.labelThreeText}>My Profile</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("ScannerTab");
                }}
              >
                <View
                  pointerEvents="box-none"
                  style={{
                    width: 154,
                    height: 44,
                    marginTop: 10,
                    marginLeft:32,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <ScanImage width={30} height={30} />
                  <Text style={styles.labelThreeText}>Scan Barcode</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Collections");
                }}
              >
                <View
                  pointerEvents="box-none"
                  style={{
                    width: 163,
                    height: 44,
                    marginTop: 10,
                    marginLeft:32,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                 <CollectionImage width={30} height={30} />
                  <Text style={styles.labelThreeText}>My Collection</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Followings");
                }}
              >
                <View
                  pointerEvents="box-none"
                  style={{
                    width: 138,
                    height: 44,
                    marginTop: 10,
                    marginLeft:32,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <FollowingImage width={30} height={30} />
                  <Text style={styles.labelThreeText}>Following</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Notifications");
                }}
              >
                <View
                  pointerEvents="box-none"
                  style={{
                    width: 140,
                    height: 44,
                    marginTop: 10,
                    marginLeft:32,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                 <NotificationsImage width={30} height={30} />
                  <Text style={styles.labelThreeText}>Notifications</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("AccountSettings");
                }}
              >
                <View
                  pointerEvents="box-none"
                  style={{
                    width: 140,
                    height: 44,
                    marginTop: 10,
                    marginLeft:32,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                 <AccountSettingsImage width={30} height={30} />
                  <Text style={styles.labelThreeText}>Account Settings </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Feedback");
                }}
              >
                <View
                  pointerEvents="box-none"
                  style={{
                    width: 124,
                    height: 44,
                    marginLeft: 3,
                    marginTop: 10,
                    marginLeft:32,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                   <FeedbackIcon width={30} height={30} />
                  <Text style={styles.labelThreeText}>Feedback</Text>
                </View>
              </TouchableOpacity>
            </View>
            </View>
        </Content>
        <View
          style={{
            backgroundColor: "rgba(192, 192, 192, 0.79)",
            alignSelf: "stretch",
            height: 1,
            marginTop: 6
          }}
        ></View>
        <TouchableOpacity onPress={this.handleLogout}>
          <View
            pointerEvents="box-none"
            style={{
              width: 124,
              height: 44,
              marginVertical: 5,
              marginLeft: 30,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
           <LogoutImage width={30} height={30} />

            <Text style={styles.labelText}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  avatar: state.avatarReducer.avatar,
  loading: state.avatarReducer.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      avatarUploading
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
