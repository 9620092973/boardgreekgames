import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ListView,
  ScrollView,
  Image,
  Platform, 
  Dimensions,
  Alert,
  Modal,
  TouchableHighlight
} from "react-native";
import {
  MyGameCollection,
  deleteGameFromCollection
} from "../Networks/MyCollectionCalls";
import { _retrieveData } from "../Networks/LoginScreenCalls";
import styles from "../Styles/MyCollectionStyles/MyCollectionsStyleSheet";
import { FontAwesome, AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import { productLink } from "../Networks/DiscoveryCalls";
import { LinearGradient } from "expo-linear-gradient";

import { connect } from "react-redux";
import { CustomTouchableIcon } from "../Components/Header/CustomTouchableIcon";

class Collections extends React.Component {
  static navigationOptions = ({ navigation }) => {
    if (navigation.state.params && !navigation.state.params.fullscreen) {
      return { header: null };
    } else {
      return {
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
              My Collections
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
        headerTintColor: "white"
      };
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      myCollection: [],
      user_id: "",
      animating: true,
      fullscreenWidth: null,
      fullscreenHeight: null,
      mygameCollection: null,
      isVisible: false
    };
    this.closeActivityIndicator = this.closeActivityIndicator.bind(this);
    deleteGameAlert = this.deleteGameAlert.bind(this);
    this.renderDeleteGameFromCollection = this.renderDeleteGameFromCollection.bind(
      this
    );
    this.renderMyCollections = this.renderMyCollections.bind(this);
    navigateToProductPage = this.navigateToProductPage.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  async componentDidMount() {
    const fullscreenWidth = Math.round(Dimensions.get("window").width);
    const fullscreenHeight = Math.round(Dimensions.get("window").height);

    this.setState({
      full_screen_width: fullscreenWidth,
      full_screen_height: fullscreenHeight
    });
    const usernameGet = await _retrieveData();
    if (usernameGet) {
      this.setState({ user_id: usernameGet.user_id });
    }
    this.closeActivityIndicator();
    this.renderMyCollections();
    this.props.navigation.setParams({
      fullscreen: !this.state.isVisible
    });
  }
  renderMyCollections() {
    MyGameCollection(this.onSuccess, this.onFailure);
  }

  onSuccess(response) {
    this.props.loadGenericData({
      genericData: response,
      moduleName: "MY_COLLECTION"
    });
  }
  onFailure(error) {
    console.log("error message of collections", error.message);
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
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#000"
        }}
      />
    );
  };

  deleteGameAlert(game_id) {
    Alert.alert(
      "Do you want to Delete",
      "This will remove this item from your collection",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => this.renderDeleteGameFromCollection(game_id)
        }
      ]
    );
  }

  renderDeleteGameFromCollection(game_id) {
    deleteGameFromCollection(this.state.user_id, game_id)
      .then(response => {
        MyGameCollection(this.onSuccess, this.onFailure);
      })
      .catch(error => {
        console.log("error message", error.message);
      });
  }
  renderGameCollection(game, index) {
    let card_image = game.card_image[0]
      ? { uri: game.card_image[0] }
      : require("../../assets/Image/ABCme.jpeg");
    return (
      <View key={index}>
        <TouchableOpacity
          onPress={() => {
            this.navigateToProductPage(game.id);
          }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.GameImage}>
              <Image source={card_image} style={styles.imageViewContainer} />
            </View>
            <View style={styles.textViewContainer}>
              <Text>
                {game.name}
                <Text style={{ color: "#rgba(204, 202, 208, 0.95)" }}>
                  {" "}
                  ({game.year_published})
                </Text>
              </Text>
              <Text style={{ marginTop: 2 }}>
                {game.minimum_players}-{game.maximum_players} Players
              </Text>
            </View>

            <View style={styles.DltImage}>
              {/* delete icon */}
              <TouchableHighlight
                onPress={() => {
                  this.deleteGameAlert(game.id);
                }}
                underlayColor="rgba(0,0,0,0.08)"
                style={{
                  padding: 15,
                  borderRadius: 25,
                  backgroundColor: "white"
                }}
              >
                <Image
                  source={require("../../assets/Image/delet.png")}
                  style={styles.imageViewDlt}
                />
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.separatorView} />
        </TouchableOpacity>
      </View>
    );
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
        console.log("error", error.message);
      });
  }

  render() {
    const { genericData } = this.props;
    let genericJSONData;
    if (genericData != "{}") {
      if(this.props.moduleName == "YOUR_COLLECTION"){
        genericJSONData = JSON.parse(genericData)["YOUR_COLLECTION"];
      }else{
        genericJSONData = JSON.parse(genericData)["MY_COLLECTION"];
      }
    }

    if (!genericJSONData) {
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
              source={require("../../assets/Image/mycollection.png")}
            />
          </View>
        </Modal>
      );
    }
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.MainContainer}>
          {genericJSONData && genericJSONData.length > 0 ? (
            genericJSONData.map(this.renderGameCollection)
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
                  Sorry, there are no collected games.
              </Text>
              </View>
            )}
        </View>
      </ScrollView>
    );
  }
}
export default connect(
  state => ({
    genericData: state.GenericReducer.genericData
  }),
  dispatch => ({
    loadGenericData: options => {
      dispatch({ ...options, type: "LOAD_GENERIC_IDENTIFIER_DATA" });
    }
  })
)(Collections);