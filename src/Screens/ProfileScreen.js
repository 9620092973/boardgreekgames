import {
  View,
  Text,
  ScrollView,
  AsyncStorage,
  Platform
} from "react-native";
import {
  Ionicons
} from "@expo/vector-icons";
import styles from "../Styles/MyProfileStyles/MyProfileStyleSheet";
import React from "react";
import { _retrieveData } from "../Networks/LoginScreenCalls";
import { productLink } from "../Networks/DiscoveryCalls";
import GenericCarousel from "../Components/GenericCarousel";
import { FetchUserProfileData } from "../Networks/UserProfileCalls.js";
import UserDetails from "../Components/ProfileComponents/UserDetails.js";
import Swiper from "react-native-swiper";
import { CustomTouchableIcon } from "../Components/Header/CustomTouchableIcon"
import { LinearGradient } from "expo-linear-gradient";
import AddImage from "../Screens/MyProfile/AddImage";
import { NavigationHeader } from "../Components/NavigationHeader/NavigationHeader"

const slideText = [
  "Game Description Language, or GDL, is a logic programming language designed by Michael Genesereth as part of the General Game Playing Project at Stanford University, California. GDL describes the state of a game as a series of facts.",
  "It is very easy to use",
  "You can simply install and use it now",
  "If you have any issues open up an issue in issues tab"
];

class ProfileScreen extends React.Component {
  // Static header with gradiant colors.
  static navigationOptions = ({ navigation }) => {

    return {
      headerStyle: {
        height: Platform.OS === 'ios' ? 55 : 65
      },
      headerLeft: (
        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 8, marginRight: 10 }}>

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
            Profile
        </Text>
        </View>
      ),
      headerBackground: (
        <LinearGradient
          colors={["#001a33", "#004f99"]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }} />
      ),
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      usercommongamecollection: null,
      username: null,
      my_collection_count: 0,
      my_followers_count: 0,
      my_followings_count: 0,
      usergamecollection: null,
      user_id: null,
      animating: true,
      fullscreenWidth: null,
      fullscreenHeight: null,
      user_data: [],
      profileType: "MyProfile",
      currentUserId: "",
      profileTypeCheck: "",
      reviews: [],
      strategy: [],
      tutorials: [],
      modstips: [],
      allCategoriesData: [],
      uploadPhotoData: null,
      category: ''

    };
    this.getUsername = this.getUsername.bind(this);
    this.navigateToProductPage = this.navigateToProductPage.bind(this);
    this.gettingDataFromGameCollections = this.gettingDataFromGameCollections.bind(
      this
    );
    this.UserProfileSuccess = this.UserProfileSuccess.bind(this);
    this.ProfileSuccess = this.ProfileSuccess.bind(this);
    this.getUploadPhotosData = this.getUploadPhotosData.bind(this);
  }

  //This async function loads while screen loads and gets below data.
  async componentDidMount() {
    let currentUserId;
    const usernameGet = await _retrieveData();
    if (usernameGet) {
      currentUserId = usernameGet.user_id;
      this.setState({ currentUserId: currentUserId });
    }
    const uId = this.props.navigation.state.params.userId;

    FetchUserProfileData(
      uId,
      this.ProfileSuccess,
      this.ProfileFailure,
      "reviews",
      "reviews"
    );
    FetchUserProfileData(
      uId,
      this.ProfileSuccess,
      this.ProfileFailure,
      "strategy",
      "strategy"
    );
    FetchUserProfileData(
      uId,
      this.ProfileSuccess,
      this.ProfileFailure,
      "tutorials",
      "tutorials"
    );
    FetchUserProfileData(
      uId,
      this.ProfileSuccess,
      this.ProfileFailure,
      "modstips",
      "modstips"
    );
    FetchUserProfileData(
      uId,
      this.ProfileSuccess,
      this.ProfileFailure,
      "photos",
      "photos"
    );

    // }
    const { params } = this.props.navigation.state;
    profileTypeCheck = this.props.navigation.state.params.profileType;

    if (params.profileType == "UserProfile" && currentUserId != params.userId) {
      this.setState({
        profileType: "UserProfile",
        user_id: params.userId,
        username: params.userName
      });
      FetchUserProfileData(
        params.userId,
        this.UserProfileSuccess,
        this.UserProfileFailure
      );
    } else if (params.profileType == "MyProfile" && currentUserId == params.userId) {
      this.setState({
        user_id: currentUserId,
        profileType: "MyProfile"
      });
      this.getUsername();
    }

  }
  ProfileSuccess(data, category) {
    let newData = data.data ? data.data : [];
    let allCategoriesData = this.state.allCategoriesData;
    allCategoriesData1 = allCategoriesData.concat(newData);
    this.setState({
      [category]: newData,
      allCategoriesData: allCategoriesData1
    });
    this.getUploadPhotosData(data);
  }
  UserProfileSuccess(data) {
    const { userName } = this.props.navigation.state.params;
    this.setState({
      user_data: data.clicked_user[userName],
      my_followings_count: data.clicked_user[userName].followings,
      my_collection_count: data.clicked_user[userName].GameCollections
    });
    //this.getUploadPhotosData(data);
  }

  UserProfileFailure(error) {
    console.log("error message1234", error.message);
  }

  getUploadPhotosData(data) {
    this.setState({
      uploadPhotoData: data,
    })
  }

  //This async fuctions stores logged in user name.
  async getUsername() {
    try {
      this.username = await AsyncStorage.getItem("username");
      this.setState({
        username: username
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  //This function will navigates to game info screen.
  navigateToProductPage(game_id) {
    productLink(game_id)
      .then(response => {
        if (response.status == 200) {
          this.props.navigation.navigate("GameInfo", {
            productData: response.data,
            game_id: game_id
          });
        }
      })
      .catch(error => {
        console.log("error", error.message);
      });
  }

  gettingDataFromGameCollections(data) {

  }

  renderProfileImage = () =>
    <AddImage
      userId={this.props.navigation.state.params.userId}
      title={this.state.profileType}
      ProfilePhoto={this.props.navigation.state.params.ProfilePic}
    />

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.welcomeView}>

        <ScrollView showsVerticalScrollIndicator={false}>

          <NavigationHeader
            parentName="Profile"
            Component={this.renderProfileImage.bind(this)}
          />

          <View>
            <UserDetails
              params={this.props.navigation.state}
              userID={this.props.navigation.state.params.userId}
              profileTypeNew={this.props.navigation.state.params.profileType}
              userNameNew={this.props.navigation.state.params.userName}
              navigation={this.props.navigation}
            />
            <View
              pointerEvents="box-none"
            >
              <View
                pointerEvents="box-none"
                style={{
                  position: "absolute",
                  left: 4,
                  right: 274,
                  top: 99,
                  height: 96
                }}
              />
              {/* GenericCarousel component called here to display collection of Games */}

              <GenericCarousel
                navigation={navigation}
                moduleName={this.state.profileType == "MyProfile" ? "MY_COLLECTION" : "YOUR_COLLECTION"}
                title="Collection"
                profileType={this.props.navigation.state.params.profileType}
                userName={this.props.navigation.state.params.userName}
                userId={this.props.navigation.state.params.userId}
              />

              {this.state.profileType == "UserProfile" && (
                <GenericCarousel
                  navigation={navigation}
                  moduleName="COMMON_GAMES"
                  title="Common Games"
                  profileType={this.state.profileType}
                  userName={this.state.username}
                  userId={this.state.user_id}
                />
              )}

              <GenericCarousel
                navigation={navigation}
                moduleName="COMMUNITY_PHOTOS"
                title="Uploaded Media"
                profileType={this.props.navigation.state.params.profileType}
                userName={this.props.navigation.state.params.userName}
                userId={this.props.navigation.state.params.userId}
                uploadData={this.state.uploadPhotoData}
              />

              {this.state.reviews && this.state.reviews.length > 0 && (
                <View>
                  <View
                    style={{
                      height: 200,
                      flex: 1,
                      justifyContent: "center"
                    }}
                  >
                    <View style={styles.PostMainView}>
                      <Text style={styles.TitleView}>Reviews </Text>
                    </View>

                    <Swiper
                      showsButtons={true}
                      buttonColor={"red"}
                      buttonWrapperStyle={{
                        alignItems: "flex-start",
                        marginTop: "1.8%"
                      }}
                      loop={false}
                      showsPagination={false}
                      nextButton={
                        <Text style={[{ color: "black" }, styles.next]}>
                          ›
                          </Text>
                      }
                      prevButton={
                        <Text style={[{ color: "black" }, styles.next]}>
                          ‹
                          </Text>
                      }
                    >
                      {this.state.reviews.map((data, index) => (
                        <View style={{ paddingLeft: 30, paddingRight: 30 }} key={index}>
                          <View style={{ marginTop: 7 }}>
                            <Text style={styles.TitleText}>
                              {data.post_title}
                            </Text>
                          </View>

                          <Text style={styles.ContentText}>
                            {data.post_content}
                          </Text>
                        </View>
                      ))}
                    </Swiper>
                  </View>
                </View>
              )}

              {this.state.strategy && this.state.strategy > 0 && (
                <View style={{ paddingTop: 10 }}>
                  <View
                    style={{
                      height: 200,
                      flex: 1,
                      justifyContent: "center"
                    }}
                  >
                    <View style={styles.PostMainView}>
                      <Text style={styles.TitleView}>Strategies </Text>
                    </View>

                    <Swiper
                      showsButtons={true}
                      buttonColor={"red"}
                      buttonWrapperStyle={{
                        alignItems: "flex-start",
                        marginTop: "7%"
                      }}
                      loop={false}
                      showsPagination={false}
                      nextButton={
                        <Text style={[{ color: "black" }, styles.next]}>
                          ›
                          </Text>
                      }
                      prevButton={
                        <Text style={[{ color: "black" }, styles.next]}>
                          ‹
                          </Text>
                      }
                    >
                      {this.state.strategy.map((data, index) => (
                        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
                          <View style={{ marginTop: 10 }}>
                            <Text style={styles.TitleText}>
                              {data.post_title}
                            </Text>
                          </View>

                          <Text style={styles.ContentText}>
                            {data.post_content}
                          </Text>
                        </View>
                      ))}
                    </Swiper>
                  </View>
                </View>
              )}

              {this.state.strategy && this.state.strategy.length > 0 && (
                <View style={{ paddingTop: 10 }}>
                  <View
                    style={{
                      height: 200,
                      flex: 1,
                      justifyContent: "center"
                    }}
                  >
                    <View style={styles.PostMainView}>
                      <Text style={styles.TitleView}>Tutorials </Text>
                    </View>

                    <Swiper
                      showsButtons={true}
                      buttonColor={"red"}
                      buttonWrapperStyle={{
                        alignItems: "flex-start",
                        marginTop: "7%"
                      }}
                      loop={false}
                      showsPagination={false}
                      nextButton={
                        <Text style={[{ color: "black" }, styles.next]}>
                          ›
                          </Text>
                      }
                      prevButton={
                        <Text style={[{ color: "black" }, styles.next]}>
                          ‹
                          </Text>
                      }
                    >
                      {this.state.strategy.map((data, index) => (
                        <View style={{ paddingLeft: 30, paddingRight: 30 }} key={index}>
                          <View style={{ marginTop: 10 }}>
                            <Text style={styles.TitleText}>
                              {data.post_title}
                            </Text>
                          </View>

                          <Text style={styles.ContentText}>
                            {data.post_content}
                          </Text>
                        </View>
                      ))}
                    </Swiper>
                  </View>
                </View>
              )}

              {this.state.modstips && this.state.modstips.length > 0 && (
                <View style={{ paddingTop: 10 }}>
                  <View
                    style={{
                      height: 200,
                      flex: 1,
                      justifyContent: "center"
                    }}
                  >
                    <View style={styles.PostMainView}>
                      <Text style={styles.TitleView}>Mods/tips </Text>
                    </View>

                    <Swiper
                      showsButtons={true}
                      buttonColor={"red"}
                      buttonWrapperStyle={{
                        alignItems: "flex-start",
                        marginTop: "7%"
                      }}
                      loop={false}
                      showsPagination={false}
                      nextButton={
                        <Text style={[{ color: "black" }, styles.next]}>
                          ›
                          </Text>
                      }
                      prevButton={
                        <Text style={[{ color: "black" }, styles.next]}>
                          ‹
                          </Text>
                      }
                    >
                      {this.state.modstips.map((data, index) => (
                        <View style={{ paddingLeft: 30, paddingRight: 30 }} key={index}>
                          <View style={{ marginTop: 10 }}>
                            <Text style={styles.TitleText}>
                              {data.post_title}
                            </Text>
                          </View>

                          <Text style={styles.ContentText}>
                            {data.post_content}
                          </Text>
                        </View>
                      ))}
                    </Swiper>
                  </View>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ProfileScreen;
