import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Platform,
  Alert,
  StatusBar
} from "react-native";
import styles from "../../Styles/HomeStyles/HomepageStyleSheet";
import {
  EvilIcons,
  Entypo,
  MaterialIcons,
  Ionicons
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { GetProfilePic } from "../../Networks/UserProfileCalls";
import GenericCarousel from "../../Components/GenericCarousel";
import ProfilePhoto from "../../Components/Header/ProfilePhoto.js";

import { CustomTouchableIcon } from "../../Components/Header/CustomTouchableIcon";
import { NavigationHeader } from "../../Components/NavigationHeader/NavigationHeader"

class HomePage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerStyle: {
        height: Platform.OS === 'ios' ? 55 : 65
      },
      headerRight: (
        <View style={{ flexDirection: "row" }}>
          <CustomTouchableIcon
            onPress={() => {
              navigation.navigate("Notifications");
            }}>
            <Ionicons
              name="md-notifications"
              size={20}
              color={"white"}
              backgroundColor={"white"}
            />
          </CustomTouchableIcon>
          <View style={{ marginRight: 10 }}>
            <CustomTouchableIcon
              onPress={() => {
                navigation.navigate("Search");
              }}
            >
              <EvilIcons name="search" size={28} color={"white"} />
            </CustomTouchableIcon>
          </View>
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
      headerLeft: (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{ marginLeft: 15 }}
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <ProfilePhoto
              style={styles.profileView}
              size={25}
              styleIcon={{ position: "absolute", top: 3 }}
              profileImage={params.image}
            />
          </TouchableOpacity>
          <View style={{ marginLeft: Platform.OS === 'ios' ? 18 : 18 }}>
            <Text style={[styles.homeTitle]}>Double Critical</Text>
          </View>
        </View>
      )
    };
  };

  _focusDoneSubscribe;
  _blurGoingSubscribe;

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      game_id: "",
      isOpen: false,
      myCollection: [],
      image: null,
      user_id: true
    };

    this.viewMore = this.viewMore.bind(this);
    this.userProfilePic = this.userProfilePic.bind(this);
    this.renderDiscoveryMode = this.renderDiscoveryMode.bind(this);
    this.renderHotOrNot = this.renderHotOrNot.bind(this);
    // Backhandler of the exitApp
    this._focusDoneSubscribe = props.navigation.addListener(
      "didFocus",
      payload =>
        BackHandler.addEventListener(
          "hardwareBackPress",
          this.onBackButtonPressAndroid
        )
    );
  }

  // To get the image data from and pass as params to header
  setProfilePicture = image => {
    const { setParams } = this.props.navigation;
    setParams({ image: image });
  };

  componentDidMount() {
    this._blurGoingSubscribe = this.props.navigation.addListener(
      "willBlur",
      payload =>
        BackHandler.removeEventListener(
          "hardwareBackPress",
          this.onBackButtonPressAndroid
        )
    );
    this.userProfilePic();
    //  if(this.props.navigation.state.params && this.props.navigation.state.params.loginUser == "loginuser"){

    //  }
  }

  componentWillUnmount() {
    //BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
  }

  //Alert Function of the BackHandler exit app
  onBackButtonPressAndroid = () => {
    Alert.alert(
      "Exiting App",
      "Confirm quitting the app?",
      [
        { text: "CANCEL", style: "cancel" },
        { text: "OK", onPress: () => BackHandler.exitApp() }
      ],
      { cancelable: false }
    );
    return true;
  };

  renderDiscoveryMode() {
    this.props.navigation.push("DiscoveryModeHotOrNot", {
      identifier: "Discovery Mode"
    });
  }

  renderHotOrNot() {
    this.props.navigation.push("DiscoveryModeHotOrNot", {
      identifier: "Hot Or Not"
    });
  }

  viewMore() {
    this.props.navigation.navigate("TrendingGames");
  }

  /*To get profile image data */
  userProfilePic() {
    GetProfilePic()
      .then(response => {
        this.setState(
          {
            image: response.data.profile_picture
          },
          () => {
            this.setProfilePicture(this.state.image);
          }
        );
      })
      .catch(error => {
        console.log("no uploaded image", error.message);
      });
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    const { navigation } = this.props;
    return (
      <View
        pointerEvents="box-none"
        style={{
          flex: 1
        }}
      >
        <ScrollView vertical={true} style={{ height: "100%" }}>
          {/* Header cards of the DiscoveryMode and HotOrNot Mode*/}
          <NavigationHeader
            renderDiscoveryMode={this.renderDiscoveryMode}
            renderHotOrNot={this.renderHotOrNot}
            parentName="HomePage"
          />
          {/* Trending Games images displaying here */}
          <GenericCarousel
            title="Trending Games"
            moduleName="TRENDING_GAMES"
            navigation={navigation}
          />

          {/* My collecions */}
          <GenericCarousel
            title="Collections"
            moduleName="MY_COLLECTION"
            navigation={navigation}
          />
        </ScrollView>
      </View>
    );
  }
}

export default HomePage;
