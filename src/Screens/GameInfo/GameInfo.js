import {
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  Alert,
  Platform,
  Linking,
  ImageBackground,
  StatusBar
} from "react-native";
import Image from "react-native-remote-svg";
import React from "react";
import styles from "../../Styles/GameInfoStyles/GameInfoStyleSheet";
import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import { Footer, FooterTab } from "native-base";
import {
  AddCollectionGame,
  GameFollow,
  FetchCollectionGameStatus
} from "../../Networks/ProductPageCalls";
import { _retrieveData } from "../../Networks/LoginScreenCalls";
import { LinearGradient } from "expo-linear-gradient";
import { HeaderBackButton } from "react-navigation";
import FacebookAndGoogleLogin from "../../Components/ReUsableComponent/facebookAndGoogleLogin";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loggedOutScreen, GameId } from "../../Redux/Actions";
import * as Types from "../../Redux/Actions/types";
import { productLink } from "../../Networks/DiscoveryCalls";
import GameRating from "../../Components/GameRating.js";
import Modal from "react-native-modal";
import GameHeader from "../../Components/GameMainHeader";
import GameInfoImage from "../../../assets/Image/GameInfoImage"
import GameCommunityImage from "../../../assets/Image/GameCommunityImage"
import GameHelpImage from "../../../assets/Image/GameHelpImage"
import { CustomTouchableIcon } from "../../Components/Header/CustomTouchableIcon";

class GameInfo extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerStyle: {
        height: Platform.OS === 'ios' ? 55 : 65
      },
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
      headerLeft: (
        <View style={{ flexDirection: "row", alignItems: 'center',marginLeft:8,marginRight:10 }}>

          <CustomTouchableIcon onPress={() => params.navigation_from ? navigation.navigate('Landing') : navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={25} color={"white"} />
          </CustomTouchableIcon>
          <View>
            <Text
              style={{
                marginBottom: Platform.OS === 'ios' ? 6 : null,
                color: "#fff",
                fontWeight: "bold",
                fontSize: 18,
              }}>
              Game Info
          </Text>
          </View>
        </View>
      ),
      headerBackground: (
        <LinearGradient
          colors={["#001a33", "#004f99"]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }} />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      game_id: this.props.navigation.state.params.game_id,
      user_id: "",
      navigation_from: this.props.navigation.state.params.navigation_from,
      add_to_collection: false,
      modalVisible: false,
      visibleModal: null,
      reviewGame: {},
      reviews_data: [],
      responseGame: null,
      game_rating: ""
    };
    this.renderListData = this.renderListData.bind(this);
    this.renderProductGameFollow = this.renderProductGameFollow.bind(this);
    this.GameinfoBack = this.GameinfoBack.bind(this);
    this.renderShare = this.renderShare.bind(this);
    this.renderUGCFeed = this.renderUGCFeed.bind(this);
    this.renderGameHelp = this.renderGameHelp.bind(this);
    this.renderGameInfo = this.renderGameInfo.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.LoginModal = this.LoginModal.bind(this);
    this.nonLoggedInAndLoggedIn = this.nonLoggedInAndLoggedIn.bind(this);
    this.fetchProductData = this.fetchProductData.bind(this);
    this.loggedOutScreenData = this.loggedOutScreenData.bind(this);
  }
  async componentDidMount() {
    let user_id = await _retrieveData();
    if (user_id) {
      this.setState({ user_id: user_id.user_id });
    }
    this.nonLoggedInAndLoggedIn();
    this.props.navigation.setParams({
      BackButton: this.GameinfoBack
    });
  }

  nonLoggedInAndLoggedIn() {
    if (this.props.navigation.state.params.productData) {
      let data = this.props.navigation.state.params.productData;
      const gameRating = data.game_rating;
      let card_image =
        data.card_image && data.card_image.length
          ? { uri: data.card_image[0] }
          : require("../../../assets/Image/ABCme.jpeg");
      this.props.GameId(
        Types.GAME_ID,
        this.props.navigation.state.params.game_id,
        data
      );
      this.setState({
        game_rating: gameRating,
        productData: data,
        card_image: card_image
      });
    } else {
      this.fetchProductData();
    }
  }
  renderProductGameFollow() {
    GameFollow(this.state.game_id, this.state.user_id)
      .then(response => {
        if (response.status == 200) {
          this.setState({ follow: !this.state.follow });
          Alert.alert("You follow the game");
        }
      })
      .catch(error => {
        console.log("GameFollow", error.message);
      });
  }
  fetchProductData() {
    productLink(this.props.navigation.state.params.game_id)
      .then(response => {
        if (response.status == 200) {
          let gameRating = response.data.game_rating;
          let card_image =
            response.data.card_image && response.data.card_image.length > 0
              ? { uri: response.data.card_image[0] }
              : require("../../../assets/Image/ABCme.jpeg");
          this.props.GameId(
            Types.GAME_ID,
            this.props.navigation.state.params.game_id,
            response.data
          );
          this.setState({
            game_rating: gameRating,
            productData: response.data,
            card_image: card_image
          });
        }
      })
      .catch(error => {
        console.log("error[product data]", error.message);
      });
  }

  GameinfoBack() {
    if (this.state.user_id) {
      this.props.navigation.goBack();
    } else {
      this.props.navigation.navigate("WelcomePage");
    }
  }

  renderShare() {
    if (this.state.navigation_from == "WelcomePage") {
      this.setModalVisible(true);
    } else {
      this.child.onShare();
    }
  }

  renderUGCFeed() {
    if (this.state.navigation_from == "WelcomePage") {
      this.setModalVisible(true);
    } else {
      this.props.navigation.navigate("GameFeed");
    }
  }

  renderGameHelp() {
    if (this.state.navigation_from == "WelcomePage") {
      this.setModalVisible(true);
    } else {
      this.props.navigation.navigate("RulesandFAQTabs");
    }
  }

  renderGameInfo() {
    if (this.state.navigation_from == "WelcomePage") {
      this.setModalVisible(true);
    }
  }

  loggedOutScreenData() {
    this.props.loggedOutScreen(
      Types.LAST_LOGGEDOUT_SCREEN,
      "GameInfo",
      this.state.game_id,
      this.state.productData
    );
  }

  LoginModal() {
    this.props.loggedOutScreen(
      Types.LAST_LOGGEDOUT_SCREEN,
      "GameInfo",
      this.state.game_id,
      this.state.productData
    );
    this.props.navigation.navigate("Login");
  }
  siginModal() {
    this.props.loggedOutScreen(
      Types.LAST_LOGGEDOUT_SCREEN,
      "GameInfo",
      this.state.game_id,
      this.state.productData
    );
    {
      this.props.navigation.navigate("Signup");
    }
  }

  setModalVisible(visible) {
    console.log("inside setModalVisible");
    this.setState({ modalVisible: visible });
  }

  modalContent() {
    // modal popup content
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../../assets/Image/modalHeader.png")}
          style={{ width: "100%" }}
        />
        <TouchableOpacity
          onPress={() => {
            this.setState({ modalVisible: !this.state.modalVisible });
          }}
          style={{ position: "absolute", right: 12, top: 15 }}
        >
          <AntDesign name="close" size={23} color="white" />
        </TouchableOpacity>
        <Text style={{ textAlign: "center", fontSize: 17, marginTop: 18 }}>
          You need an account to continue
        </Text>
        <View style={styles.login_style}>
          <View style={{ justifyContent: "flex-end", alignSelf: "stretch" }}>
            <TouchableOpacity
              onPress={() => {
                this.siginModal();
              }}
              style={styles.signUpButton}
            >
              <Text style={styles.signUpButtonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              justifyContent: "flex-end",
              alignSelf: "stretch"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.LoginModal();
              }}
              style={styles.loginButton}
            >
              <Text style={styles.buttonButtonText}>I have an account</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.socialIcons}>
          <FacebookAndGoogleLogin
            title={"One-tap sign in"}
            navigation={this.props.navigation}
            loggedOutScreenData={this.loggedOutScreenData}
            isGameInfo={true}
            setModalVisible={this.setModalVisible}
          />
        </View>
      </View>
    );
  }

  renderListData() {
    let array_list = [
      "designer",
      "publisher",
      "artist",
      "category",
      "mechanism"
    ];
    let List = [];
    for (let key of array_list) {
      for (let [key1, value] of Object.entries(this.state.productData)) {
        if (key == key1 && key == "designer") {
          let designer = "";
          var keys = Object.values(value);

          for (let i = 0; i < keys.length; i++) {
            if (i != keys.length - 1) {
              designer = designer + keys[i] + ", ";
            } else {
              designer = designer + keys[i];
            }
          }
          List.push(
            <View key={key}>
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <View style={{ flex: 0.4, justifyContent: "flex-start" }}>
                  <Text>Designer:</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-start" }}>
                  <Text>{designer}</Text>
                </View>
              </View>
            </View>
          );
        } else if (key == key1 && key == "publisher") {
          let publisher = "";
          var keys = Object.values(value);

          for (let i = 0; i < keys.length; i++) {
            if (i != keys.length - 1) {
              publisher = publisher + keys[i] + ", ";
            } else {
              publisher = publisher + keys[i];
            }
          }
          List.push(
            <View key={key}>
              <View
                style={{ flexDirection: "row", marginTop: 15, marginLeft: 10 }}
              >
                <View style={{ flex: 0.4, justifyContent: "flex-start" }}>
                  <Text>Publisher:</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-start" }}>
                  <Text>{publisher}</Text>
                </View>
              </View>
            </View>
          );
        } else if (key == key1 && key == "artist") {
          let artist = "";
          var keys = Object.values(value);

          for (let i = 0; i < keys.length; i++) {
            if (i != keys.length - 1) {
              artist = artist + keys[i] + ", ";
            } else {
              artist = artist + keys[i];
            }
          }
          List.push(
            <View key={key}>
              <View
                style={{ flexDirection: "row", marginTop: 15, marginLeft: 10 }}
              >
                <View style={{ flex: 0.4, justifyContent: "flex-start" }}>
                  <Text>Artist:</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-start" }}>
                  <Text>{artist}</Text>
                </View>
              </View>
            </View>
          );
        } else if (key == key1 && key == "category") {
          let category = "";

          var keys = Object.values(value);

          for (let i = 0; i < keys.length; i++) {
            if (i != keys.length - 1) {
              category = category + keys[i] + ", ";
            } else {
              category = category + keys[i];
            }
          }
          List.push(
            <View key={key}>
              <View
                style={{ flexDirection: "row", marginTop: 15, marginLeft: 10 }}
              >
                <View style={{ flex: 0.4, justifyContent: "flex-start" }}>
                  <Text>Category:</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-start" }}>
                  <Text
                    style={{
                      color: "#159CDA",
                      textDecorationLine: "underline"
                    }}
                  >
                    {category}
                  </Text>
                </View>
              </View>
            </View>
          );
        } else if (key == key1 && key == "mechanism") {
          let mechanism = "";
          var keys = Object.values(value);

          for (let i = 0; i < keys.length; i++) {
            if (i != keys.length - 1) {
              mechanism = mechanism + keys[i] + ", ";
            } else {
              mechanism = mechanism + keys[i];
            }
          }
          List.push(
            <View key={key}>
              <View
                style={{ flexDirection: "row", marginTop: 15, marginLeft: 10 }}
              >
                <View style={{ flex: 0.4, justifyContent: "flex-start" }}>
                  <Text>Mechanism:</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-start" }}>
                  <Text
                    style={{
                      color: "#159CDA",
                      textDecorationLine: "underline"
                    }}
                  >
                    {mechanism}
                  </Text>
                </View>
              </View>
            </View>
          );
        }
      }
    }
    return List;
  }

  getCardImageSource() {
    const { card_image } = this.props.gameData;
    return card_image && card_image.length
      ? { uri: card_image[0] }
      : require("../../../assets/Image/ABCme.jpeg");
  }

  render() {

    return (
      <View style={styles.welcomeView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <GameHeader
            {...this.props} 
            navigation_from={this.state.navigation_from}
            setModalVisible={this.setModalVisible}
            gameId={this.state.game_id}
          />
          <View>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
            >
              {this.modalContent()}
            </Modal>
          </View>
          <GameRating
            navigation={this.props.navigation}
            game_rating={this.state.game_rating}
            navigation_from={this.state.navigation_from}
            setModalVisible={this.setModalVisible}
            game_id={this.state.game_id}
            user_id={this.state.user_id}
            fetchProductData={this.fetchProductData}
          />
          <View style={styles.viewThreeView} />
          <View
            pointerEvents="box-none"
            style={{
              // height: 190,
              marginTop: 15
            }}
          >

            <View>{this.renderListData()}</View>

          </View>
          <View style={styles.viewEightView} />

          <View style={{ paddingBottom: 30 }}>
            <Text style={styles.description_text}>Description:</Text>
            <Text style={styles.sample_text}>
              {this.state.productData.description}
              The Silver River is a new 4X game, designed by Robert Burke and
              Nate Blivins. Ton Ho Sim has made the artwork. You should really
              read on because this game looks good indeed.{" "}
            </Text>
          </View>
        </ScrollView>
        <View>
          <Footer>
            <FooterTab
              style={styles.footer_tab}
              renderTabBar={() => <ScrollableTab />}
            >
              {!this.state.productData && (
                <TouchableOpacity
                  onPress={this.renderGameInfo}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <GameInfoImage width={20} height={20} />
                  <Text style={{ textAlign: "center", marginTop: 7 }}>
                    Game Info
                  </Text>
                </TouchableOpacity>
              )}
              {this.state.productData && (
                <TouchableOpacity
                  onPress={this.renderGameInfo}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <GameInfoImage width={20} height={20} />
                  <Text
                    style={{
                      color: "#159CDA",
                      textAlign: "center",
                      marginTop: 7
                    }}
                  >
                    Game Info
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={this.renderUGCFeed}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <GameCommunityImage width={20} height={20} />
                <Text style={{ textAlign: "center", marginTop: 7 }}>
                  Community
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.renderGameHelp}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <GameHelpImage width={20} height={20} />
                <Text style={{ textAlign: "center", marginTop: 7 }}>
                  Game Help
                </Text>
              </TouchableOpacity>
            </FooterTab>
          </Footer>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  screenName: state.loggedOutReducer.screen_name,
  gameData: state.GameIDReducer.gameData,
  gameId: state.loggedOutReducer.game_id
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loggedOutScreen,
      GameId
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameInfo);
