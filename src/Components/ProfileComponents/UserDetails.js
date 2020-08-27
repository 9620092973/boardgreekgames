import {
  Image,
  View,
  Text,
  AsyncStorage,
  Dimensions,
  Modal
} from "react-native";
import React from "react";
import styles from "../../Styles/MyProfileStyles/MyProfileStyleSheet";
import { MyGameCollection } from "../../Networks/MyCollectionCalls";
import { _retrieveData } from "../../Networks/LoginScreenCalls";
import { fetchFollowingData } from "../../Networks/Following";
import ProfileFollowing from "../../Components/ProfileComponents/ProfileFollowing.js";
import ProfileEditFollow from "../../Components/ProfileComponents/ProfileEditFollow.js";
import UserFollowButton from "../../Components/ProfileComponents/UserFollowButton.js";
import {
  GetProfilePic,
  FetchUserProfileData
} from "../../Networks/UserProfileCalls.js";

export default class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      my_collection_count: 0,
      my_followers_count: 0,
      my_followings_count: 0,
      user_id: null,
      animating: true,
      fullscreenWidth: null,
      fullscreenHeight: null,
      user_data: [],
      profileType: "MyProfile",
      currentUserId: "",
      params: "",
      userID: "",
      profileTypeNew: "",
      userNameNew: ""
    };
    this.closeActivityIndicator = this.closeActivityIndicator.bind(this);
    this.getUsername = this.getUsername.bind(this);
    this.renderFollowingData = this.renderFollowingData.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.userData = this.userData.bind(this);
    this.UserProfileSuccess = this.UserProfileSuccess.bind(this);
  }

  //This async function loads while screen loads and gets below data.
  async componentDidMount() {
   
    const fullscreenWidth = Math.round(Dimensions.get("window").width);
    const fullscreenHeight = Math.round(Dimensions.get("window").height);
    this.setState({
      full_screen_width: fullscreenWidth,
      full_screen_height: fullscreenHeight
    });
    this.closeActivityIndicator();
    let currentUserId;
    const usernameGet = await _retrieveData();
    if (usernameGet) {
      this.setState({ 
        currentUserId: usernameGet.user_id 
      });
    }
    params = this.props.params;
    userID = this.props.userID;
    profileTypeNew = this.props.profileTypeNew;
    userNameNew = this.props.userNameNew;
    navigate = this.props.navigation;

    if (profileTypeNew == "UserProfile") {
      this.setState({
        profileType: profileTypeNew,
        user_id: userID,
        username: userNameNew
      });
      FetchUserProfileData(
        userID,
        this.UserProfileSuccess,
        this.UserProfileFailure
      );
    } else {
      this.setState({
        user_id: this.state.currentUserId,
        profileType: profileTypeNew,
        username: userNameNew
      });
      this.getUsername();
      this.renderFollowingData();
      this.userData();
      MyGameCollection(this.onSuccess, this.onFailure);
    }
  }

  // Close Loading
  closeActivityIndicator = () =>
    setTimeout(
      () =>
        this.setState({
          animating: false
        }),
      1000
    );

  //This async fuctions stores logged in user name.
  async getUsername() {
    try {
      this.username = await AsyncStorage.getItem("username");
      this.setState({
        username: username
      });
    } catch (error) {
      console.log("@Error [Profile] UserDetails", error.message);
    }
  }

  //This function shows logged in user followers and following users count.
  renderFollowingData() {
    fetchFollowingData()
      .then(response => {
        let my_followings_count = 0;
        let my_followers_count = 0;
        if (response.data) {
          for (let [key, value] of Object.entries(response.data.followings)) {
            my_followings_count = my_followings_count + 1;
          }
          for (let [key, value] of Object.entries(response.data.followers)) {
            my_followers_count = my_followers_count + 1;
          }
          this.setState(
            {
              my_followings_count: my_followings_count,
              my_followers_count: my_followers_count
            },
            () => {
              this.setState({
                customStyleIndex: 0
              });
            }
          );
        }
      })
      .catch(error => {
        console.log("@Error [Profile] UserDetails", error.message);
      });
  }

  onSuccess(response) {
    let my_collection_count = 0;
    for (let [key, value] of Object.entries(response)) {
      my_collection_count = my_collection_count + 1;
    }
    this.setState({
      my_collection_count: my_collection_count
    });
  }
  onFailure(error) {
    console.log("@Error [Profile] UserDetails", error.message);
  }

  //profile user data
  userData() {
    GetProfilePic()
      .then(response => {
        this.setState({ user_data: response.data });
      })
      .catch(error => {
        console.log("@Error [Profile] UserDetails", error.message);
      });
  }

  UserProfileSuccess(data) {
    const { userName } = this.props.navigation.state.params;
    this.setState({
      user_data: data.clicked_user[userName],
      my_followings_count: data.clicked_user[userName].followings,
      my_followers_count: data.clicked_user[userName].followers,
      my_collection_count: data.clicked_user[userName].GameCollections
    });
  }

  render() {
    return (
      <View>
        <View style={{ marginTop: 30 }}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.labelTenText}>{this.state.username}</Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
                marginBottom: 8
              }}
            >
              <Text style={styles.labelNineText}>
                Id: {this.state.user_id}
              </Text>
              <Image
                source={require("../../../assets/Image/noun_gender_1820716.png")}
                style={{ marginTop: 12, marginLeft: 10 }}
              />
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={styles.viewSevenView} />
          {/* Send Data to ProfileFollowing Component*/}
          <ProfileFollowing
            my_followings_count={this.state.my_followings_count}
            my_followers_count={this.state.my_followers_count}
            my_collection_count={this.state.my_collection_count}
          />
          {/* Follower UI */}
        </View>
        <View
          style={{
            height: 44,
            justifyContent: "center",
            marginTop: 20
          }}
        >
          {/* Check profile type and display edit profile and follow button*/}
          {this.state.profileType == "MyProfile" && (
            <ProfileEditFollow
              navigation={this.props.navigation}
              userID={this.state.currentUserId}
            />
          )}
          {this.state.profileType == "UserProfile" && (
            <UserFollowButton navigation={this.props.navigation}
            userId={this.state.user_id} />
          )}
        </View>
      </View>
    );
  }
}