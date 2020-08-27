import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  ImageBackground,
  StatusBar,
  Image,
  Modal,
  ActivityIndicator
} from "react-native";
import styles from "../Styles/HomeStyles/HomepageStyleSheet";
import { Entypo } from "@expo/vector-icons";
import {
  AntDesign,
  MaterialIcons,
  EvilIcons,
  FontAwesome
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Types from "../Redux/Actions/types";
import { _retrieveData } from "../Networks/LoginScreenCalls";
import { RenderGamesOverlay } from "../Components/RenderGamesOverlay";
import { RenderUGCOverlay } from "../Components/RenderUGCOverlay";
import { productLink } from "../Networks/DiscoveryCalls";
import { GetModuleData } from "./GetModuleData";

class GenericCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      uploadedPhotoData:''
    };
    this.onSuccess = this.onSuccess.bind(this);
    this.UserProfileSuccess = this.UserProfileSuccess.bind(this);
    this.navigateToProductPage = this.navigateToProductPage.bind(this);
    this.testMethod = this.testMethod.bind(this);
  }

  async componentDidMount() {
    const { user_id } = await _retrieveData();
    const { moduleName, userId, profileType } = this.props;
    GetModuleData(
      { moduleName, user_id, profileType, userId },
      this.onSuccess,
      this.onFailure,
      this.UserProfileSuccess,
      this.UserProfileFailure
    );
  }

  // Fires when axios call successfull
  onSuccess(genericData) {
    
    const { moduleName } = this.props;
    this.props.loadGenericData({ genericData, moduleName });
    console.log("testing for uplpoaded photos",genericData, moduleName);
  }

  onFailure(error) {
    console.log("@Error [Profile] Failure", error.message);
  }

  UserProfileSuccess(data, typeOfGameSlider) {
    const { moduleName, userName } = this.props;
    let genericData = data.clicked_user[userName][typeOfGameSlider]
     this.props.loadGenericData({ genericData, moduleName });
  }

  UserProfileFailure(error) {
    console.log("@Error [Profile]", error.message);
  }

  testMethod(){
    let imageFormats = ["png", "jpg", "jpeg", "bmp", "gif", "webp", "psd"];
    let videoFormats = ["mp4","m4a","m4v","f4v","f4a","m4b","m4r","f4b","mov","3gp","3gp2","3g2","3gpp","3gpp2","ogg","oga","ogv","ogx", "wmv","wma","asf*","webm","flv","AVI*","QuickTime*","HDV*","OP1a*","OP-Atom*","ts","MPEG-2 PS","MPEG-2 TS*","WAV","Broadcast","WAV*","LXF","GXF*","VOB*"];
  }

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
        console.log("@Error [Profile] productLink", error.message);
      });
  }

  renderContent(genericData) {
    let isGenericData = genericData && genericData.length > 0;
    const { moduleName, title, navigation, navigateUrl , uploadData} = this.props;
    let component = RenderGamesOverlay;
    if (moduleName == "COMMUNITY_PHOTOS") {
      component = RenderUGCOverlay;
    }

    return (
      <React.Fragment>
        <HeaderTitle
          moduleName={moduleName}
          title={title}
          navigation={navigation}
          navigateUrl={navigateUrl}
          isGenericData={isGenericData}
          //uploadData = {uploadData}
        />

        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <GameCarousel
            data={genericData}
            navigateToProductPage={this.navigateToProductPage}
            component={component}
          />
        </View>
      </React.Fragment>
    );
  }

  render() {
    const { genericData, moduleName } = this.props;
    if (genericData != "{}") {
      let genericJSONData = JSON.parse(genericData)[moduleName];
      return (
        <View>
          {genericJSONData && this.renderContent(genericJSONData.slice(0, 6))}
        </View>
      );
    } else {
      return <View />;
    }
  }
}

const HeaderTitle = props => {
  const { moduleName, title, isGenericData,} = props;
  const nextProps = { moduleName, title, };
  return (
    <React.Fragment>
      {isGenericData == true ? (
        <View style={styles.gameTitle}>
          <Text style={styles.headerView}>{props.title}</Text>
         
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ViewAll", nextProps)}
          >
            <Text style={styles.labelThirteenText}>View all</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </React.Fragment>
  );
};

export const GameCarousel = props => (
  <React.Fragment>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: "row" }}>
        {props.data.length > 0 &&
          props.data.map((currentValue, index) => (
            <props.component key= {index}
              projectedObject={currentValue}
              index={index}
              navigateToProductPage={props.navigateToProductPage}
            />
          ))}
      </View>
    </ScrollView>
  </React.Fragment>
);

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
)(GenericCarousel);
