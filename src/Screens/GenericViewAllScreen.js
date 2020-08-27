//Ramya edited this file

import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableHighlight
} from "react-native";
import { AntDesign, MaterialIcons, EvilIcons,Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";
import { LinearGradient } from "expo-linear-gradient";
import { _TrendingGame } from "../Networks/ReUsableCalls";
import { MyGameCollection } from "../Networks/MyCollectionCalls";
import TrendingGames from "../Components/ReUsableComponent/trendingGames.js";
import Collections from "./Collections.js";
import { connect } from "react-redux";
import { CustomTouchableIcon } from "../Components/Header/CustomTouchableIcon";
import UploadedPhotos from "../Components/ReUsableComponent/UploadedPhotos.js"


class GenericViewAll extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerStyle: {
        height: Platform.OS === 'ios' ? 55 : 65
      },
      // headerTitle: (
      //   <View style={{
      //     marginBottom: Platform.OS === "ios" ? 20 : null,
      //     marginLeft: Platform.OS === "ios" ? 8 : null
      //   }}>
      //     <Text
      //       style={{
      //         color: "#fff",
      //         position: Platform.OS === 'ios' ? "absolute" : null,
      //         right: Platform.OS === "ios" ? 20 : null,
      //         fontWeight: "bold",
      //         fontSize: 18
      //       }}
      //     >
      //       {navigation.state.params.title}
      //     </Text>
      //   </View>
      // ),
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
              {navigation.state.params.title}
        </Text>
          </View>
        ),
      headerRight: (
      <View style={{marginRight:10}}>
        <CustomTouchableIcon
          onPress={() => {
            navigation.navigate("Search");
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
      headerBackTitleStyle: {
        color: "white"
        //marginLeft:10
      },
      headerTintColor: "white"
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      ViewData: []
    };
    this.ViewSwitch = this.ViewSwitch.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  onSuccess(ViewData) {
    this.setState({ ViewData: ViewData });
  }

  onFailure(error) {
    console.log("error message", error.message);
  }

  ViewSwitch(moduleName, genericData, uploadData) {
    console.log("ViewSwitch : "+moduleName +" : "+JSON.stringify(uploadData))
    switch (moduleName) {
      case "TRENDING_GAMES":
        return <TrendingGames ViewData={genericData} />;
      case "MY_COLLECTION":
        return <Collections navigation={this.props.navigation} />;
      case "YOUR_COLLECTION":
        return <Collections navigation={this.props.navigation} 
                moduleName = "YOUR_COLLECTION"/>;   
      case "COMMUNITY_PHOTOS":
        return <UploadedPhotos ViewData={genericData}
               />;                  
      case "COMMON_GAMES":
        return <TrendingGames ViewData={genericData} 
               />;
      default:
        return null;
    }
  }

  render() {
   
    const { moduleName, uploadData } = this.props.navigation.state.params;
    const { genericData } = this.props;
    if (genericData != "{}") {
      let genericJSONData = JSON.parse(genericData)[moduleName];
      return (
        <View>
          {genericJSONData && this.ViewSwitch(moduleName, genericJSONData, uploadData)}
        </View>
      );
    }
  }
}

export default connect(
  state => ({
    avatar: state.avatarReducer.avatar,
    loading: state.avatarReducer.loading,
    genericData: state.GenericReducer.genericData
  }),
  dispatch => ({
    loadGenericData: options => {
      dispatch({ ...options, type: "LOAD_GENERIC_IDENTIFIER_DATA" });
    }
  })
)(GenericViewAll);
