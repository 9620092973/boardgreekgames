//
//  Following
//  DoubleCritical
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  Image,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
  Alert,
  Dimensions,
  Modal
} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import styles from "../Styles/FollowingStyles/FollowingStyleSheet";
import { FontAwesome, AntDesign, EvilIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { fetchFollowingData, unFollowUser } from "../Networks/Following";
import { _retrieveData } from "../Networks/LoginScreenCalls";
import { CustomTouchableIcon } from "../Components/Header/CustomTouchableIcon";

export default class Following extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // headerTitle: (
    //   <View style={{ marginBottom: 20 }}>
    //     <Text
    //       style={{
    //         color: "#fff",
    //         position: "absolute",
    //         right: Platform.OS === "ios" ? 50 : null,
    //         fontWeight: "bold",
    //         fontSize: 17
    //       }}
    //     >
    //       Followings
    //     </Text>
    //   </View>
    // ),
    headerStyle: {
      height: Platform.OS === 'ios' ? 55 : 65
    },
    headerLeft: (
      <View style={{ flexDirection: "row", alignItems: "center",marginLeft:8,marginRight:10 }}>

        <CustomTouchableIcon onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={25} color={"white"} />
        </CustomTouchableIcon>

        <Text
          style={{
            marginBottom: Platform.OS === 'ios' ? 6 : null,
            color: "#fff",
            fontWeight: "bold",
            fontSize: 18,
          }}>
          Followings
        </Text>
      </View>
    ),
    headerRight: (
    <View style={{marginRight:10}}>
      <CustomTouchableIcon
        onPress={() => {
          navigation.navigate("Search1");
        }}
      >
        <EvilIcons name="search" size={28} color={"white"} />
      </CustomTouchableIcon>
      </View>
    ),
    headerBackground: (
      <LinearGradient
        colors={["#001a33", "#004f99"]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    ),
    headerBackTitle: null,
    headerTintColor: "white"
  });

  constructor(props) {
    super(props);
    this.state = {
      unfollowing_usrname: "",
      animating: true,
      fullscreenWidth: null,
      fullscreenHeight: null,
      userfollowing: null,
      userfollower: null
    };
    this.closeActivityIndicator = this.closeActivityIndicator.bind(this);
    this.renderFollowingData = this.renderFollowingData.bind(this);
    this.unFollowAlert = this.unFollowAlert.bind(this);
    this.followerUsers = this.followerUsers.bind(this);
    this.followingUsers = this.followingUsers.bind(this);
  }

  async componentDidMount() {
    const fullscreenWidth = Math.round(Dimensions.get("window").width);
    const fullscreenHeight = Math.round(Dimensions.get("window").height);

    this.setState({
      full_screen_width: fullscreenWidth,
      full_screen_height: fullscreenHeight
    });

    const  usernameGet = await _retrieveData();
    if (usernameGet) {
      this.setState({ 
        user_id: usernameGet.user_id 
      });
    }
    this.closeActivityIndicator();
    this.renderFollowingData();
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

  renderFollowingData() {
    fetchFollowingData()
      .then(response => {
        //Alert.alert("New feed was added successfully")
        let following_data = [];
        let follower_data = [];
        if (response.data) {
          for (let [key, value] of Object.entries(response.data.followings)) {
            following_data.push(value);
          }
          for (let [key, value] of Object.entries(response.data.followers)) {
            follower_data.push(value);
          }
          this.setState(
            {
              following_data: following_data,
              userfollowing: following_data,
              follower_data: follower_data,
              userfollower: follower_data
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
        console.log("error message", error.message);
      });
  }

  unFollowAlert(following_usrname) {
    Alert.alert(
      "Do you want to Unfollow User",
      "This will remove this item from your collection",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Unfollow",
          onPress: () => this.renderUnfollow(following_usrname)
        }
      ]
    );
  }


  followerProfile = (profileuser, userId, avatar) => {
    this.props.navigation.navigate("Profile", {
      userName: profileuser,
      userId: userId,
      profileType: userId == this.state.user_id ? "MyProfile" : "UserProfile",
      ProfilePic : avatar,
    });
  };

  renderUnfollow(following_usrname) {
    unFollowUser(this.state.user_id, following_usrname, "True")
      .then(response => {
        let i = 0;
        let following_data = [];
        for (let following_user of this.state.following_data) {
          if (following_user.username == following_usrname) {
            continue;
          } else {
            following_data.push(following_user);
          }
        }
        this.setState({
          following_data: following_data
        });
      })
      .catch(error => {
        console.log("error message", error.message);
      });
  }

  handleIndexChange = index => {
    this.setState(
      {
        ...this.state,
        selectedIndex: index
      },
      () => {
        console.log("selectedIndex is:", this.state.selectedIndex);
      }
    );
  };

  handleCustomIndexSelect = index => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    this.setState(prevState => ({ ...prevState, customStyleIndex: index }));
  };

  followingUsers(items, index) {
    if (this.state.unfollowing_usrname != items.username) {
      return (
        <View key={index}>
          <View style={styles.viewTweleveView} key={index}>
            <View style={styles.following_View}>
              <TouchableOpacity
                onPress={() => this.followerProfile(items.username, items.id, items.avatar)}
              >
                <Image
                  source={{uri:items.avatar}}
                  style={styles.imageTweleveImage}
                />
              </TouchableOpacity>
              <View pointerEvents="box-none" style={styles.following_content}>
                <Text style={styles.labelTenText}>{items.username}</Text>
                <Text style={styles.labelElevenText}>
                  {items.GameCollections} Collections | {items.followers}{" "}
                  Followers
                </Text>
              </View>
              <CustomTouchableIcon
                onPress={() => {
                  this.unFollowAlert(items.username);
                }}
              >
                <Entypo
                  name="dots-three-vertical"
                  size={16}
                  color={"black"}
                  style={styles.imageTwelveImage}
                />
              </CustomTouchableIcon>
            </View>
          </View>
          <View style={styles.seperator2View} />
        </View>
      );
    }
  }
  followerUsers(items, index) {
    return (
      <View>
        <View style={styles.viewTweleveView} key={index}>
          <View style={styles.follower_view}>
            <TouchableOpacity
              onPress={() => this.followerProfile(items.username, items.id, items.avatar)}
            >
              <Image
                 source={{uri:items.avatar}}
                style={styles.imageTweleveImage}
              />
            </TouchableOpacity>

            <View style={styles.follower_content}>
              <Text style={styles.labelTenText}>{items.username}</Text>
              <Text style={styles.labelElevenText}>
                {items.GameCollections} Collections | {items.followers}{" "}
                Followers
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.seperator2View} />
      </View>
    );
  }

  render() {
    const customStyleIndex = this.state.customStyleIndex;
    if (!this.state.userfollower && !this.state.userfollowing) {
      return (
        <Modal transparent animationType={"fade"}>
          <View
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/Image/followerandfollowings.png")}
            />
          </View>
        </Modal>
      );
    }
    return (
      <View style={styles.profileView}>
        <SegmentedControlTab
          values={["Following", "Followers"]}
          selectedIndex={customStyleIndex}
          onTabPress={this.handleCustomIndexSelect}
          tabsContainerStyle={{ height: 50, backgroundColor: "#F2F2F2" }}
          tabStyle={{
            backgroundColor: "white",
            borderRightColor: "#fff",
            borderColor: "white"
          }}
          activeTabStyle={{ backgroundColor: "white" }}
          tabTextStyle={{ color: "#888888", fontWeight: "bold", fontSize: 15 }}
          activeTabTextStyle={{ color: "#444444" }}
        />
        <View>
          <Text
            style={{
              position: "absolute",
              color: "#888888",
              left: 200,
              bottom: 13
            }}
          >
            |
          </Text>
        </View>

        <View style={styles.seperator2View} />

        <ScrollView>
          {customStyleIndex === 0 && (
            //
            <View style={styles.viewTwoView}>
              <View style={styles.following_scroll}>
                {this.state.following_data &&
                  this.state.following_data.length > 0 ? (
                    this.state.following_data.map(this.followingUsers)
                  ) : (
                    <View style={{ padding: 25 }}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 23,
                          color: "#ddd",
                          fontWeight: "bold"
                        }}
                      >
                        Sorry, there are no followings.
                    </Text>
                    </View>
                  )}
                {/*	{this.state.following_data.map(this.followingUsers)}*/}
              </View>
            </View>

            //
          )}
          {customStyleIndex === 1 && (
            <View style={styles.viewTwoView}>
              <View>
                {/*{this.state.follower_data.map(this.followerUsers)}*/}
                {this.state.follower_data &&
                  this.state.follower_data.length > 0 ? (
                    this.state.follower_data.map(this.followerUsers)
                  ) : (
                    <View style={{ padding: 25 }}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 23,
                          color: "#ddd",
                          fontWeight: "bold"
                        }}
                      >
                        Sorry, there are no followers.
                    </Text>
                    </View>
                  )}
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
