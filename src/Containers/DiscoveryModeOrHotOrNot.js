import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Platform
} from "react-native";
import styles from "../Styles/DiscoveryModeStyles/DiscoveryModeStyleSheet";
import SwipeCards from "react-native-swipe-cards";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import {
  AddCollectionGame,
  FetchCollectionGameStatus
} from "../Networks/ProductPageCalls";
import {
  discoveryMode,
  HotOrNotSwipe,
  productLink,
  GameLike
} from "../Networks/DiscoveryCalls";
import { _retrieveData } from "../Networks/LoginScreenCalls";
import { LinearGradient } from "expo-linear-gradient";
import { CustomTouchableIcon } from "../Components/Header/CustomTouchableIcon.js"

export default class DiscoveryModeHotOrNot extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
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
              marginBottom: Platform.OS === 'ios' ? 4 : null,
              color: "#fff",
              fontWeight: "bold",
              fontSize: 18,

            }}>
            {params.identifier}
          </Text>
        </View>
      ),
      headerRight: (
        <View style={{ marginRight: 10 }}>
          <CustomTouchableIcon
            onPress={() => {
              navigation.navigate("Search");
            }}>
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
      headerBackTitle: null,
      headerTintColor: "#fff"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      productData: [],
      like: "like",
      dislike: "dislike",
      game_id: "",
      user_id: "",
      value: "",
      add_to_collection: false,
      cardLoading: false,
      cardIndex: -1 // helps to identify whether initial one is swiped or not.
    };
    this.renderDisovery = this.renderDisovery.bind(this);
    this.renderHotOrNot = this.renderHotOrNot.bind(this);
    this.renderProductLink = this.renderProductLink.bind(this);
    this.renderLike = this.renderLike.bind(this);
    this.renderDisLike = this.renderDisLike.bind(this);
    this.renderAddtoCollections = this.renderAddtoCollections.bind(this);
    this.gettingCollectionGameStatus = this.gettingCollectionGameStatus.bind(this);
    this.isDiscoveryModeOrHotOrNot = this.isDiscoveryModeOrHotOrNot.bind(this);
    this.storeIndexValue = this.storeIndexValue.bind(this);
  }

  async componentDidMount() {
    const usernameGet = await _retrieveData();
    if (usernameGet) {
      this.setState({ user_id: usernameGet.user_id });
    }
    this.isDiscoveryModeOrHotOrNot()
  }

  isDiscoveryModeOrHotOrNot() {
    // Whether to display Discovery Mode or Hot or Not Screen
    switch (this.props.navigation.state.params.identifier) {
      case "Discovery Mode":
        this.renderDisovery()
        break;
      case "Hot Or Not":
        this.renderHotOrNot()
        break;
      default:
        console.log("nothing")
    }
  }

  renderDisovery() {
    // Discovery mode swipe Response
    discoveryMode(this.state.user_id)
      .then(response => {
        console.log("Discovery mode", response.data);
        this.setState({
          cards: response.data
        });
      })
      .catch(error => {
        console.log("Dicovery mode error", error.message);
      });
  }

  renderHotOrNot() {
    // Hot Or Not Mode Swipe Response
    HotOrNotSwipe(this.state.user_id)
      .then(response => {
        console.log("##$%^^&*(", response.data);
        this.setState({
          cards: response.data,
        });
      })
      .catch(error => {
        console.log("error for hot or not", error.message);
      });
  }

  renderProductLink(game_id) {
    // product link Response
    productLink(game_id)
      .then(response => {
        console.log("productlink", response.data);
        this.setState(
          {
            productData: response.data,
            game_id: game_id
          },
          () => {
            if (response.status == 200) {
              this.props.navigation.navigate("GameInfo", {
                productData: this.state.productData,
                game_id: this.state.game_id
              });
            }
          }
        );
      })
      .catch(error => {
        console.log("Product link error", error.message);
      });
  }

  renderLike(game_id) {
    const card = game_id;
    this.storeIndexValue(card);

    // Swipe Like Response
    GameLike(this.state.user_id, game_id.id, "like")
      .then(response => {
        if (response.status == 200) {
          console.log("successfully liked game");
        }
      })
      .catch(error => {
        console.log("discovery mode like error", error.message);
      });
  }

  storeIndexValue(card) {
    const { cards } = this.state;
    for (index in cards) {
      if (cards[index].id == card.id) {
        this.setState({ cardIndex: index })
      }
    }
  }

  renderDisLike(game_id) {
    const card = game_id;
    this.storeIndexValue(card);

    // Swipe DisLike Response
    GameLike(this.state.user_id, game_id.id, "dislike")
      .then(response => {
        if (response.status == 200) {
          console.log("Dislike");
        }
      })
      .catch(error => {
        console.log("discovery mode like", error.message);
      });
  }

  renderAddtoCollections(game_id) {
    // Swipe up will add game to collections
    AddCollectionGame(game_id.id)
      .then(response => {
        if (response.status == 200) {
          console.log("Successfully Collected")
          this.setState({
            add_to_collection: true
          });
        }
      })
      .catch(error => {
        console.log("AddCollectionGame", error.message);
      })
  }

  gettingCollectionGameStatus(game_id) {
    const card = game_id;
    this.storeIndexValue(card)

    //Getting collection status ( whether it is collected or not ) of a game
    FetchCollectionGameStatus(game_id.id)
      .then(response => {
        let add_to_collection_status = response.data && response.data.length
          ? response.data[0].status
          : false
        if (add_to_collection_status == false) {
          this.renderAddtoCollections(game_id)
          Alert.alert("Successfully Collected");
        }
        else if (add_to_collection_status == true) {
          Alert.alert("You have already Collected");
        }
      })
      .catch(error => {
        console.log("error of FetchCollectionGameStatus", error.message);
      });
  }

  async handleButtonPressed(type) {
    let { cardIndex } = this.state;

    cardIndex = parseInt(cardIndex) + 1;
    let { cards } = this.state

    this.setState({ cardLoading: cards.length > 0 ? true : false })

    if (type == 'yup') {
      // Swipe DisLike Response
      GameLike(this.state.user_id, cards[cardIndex].id, "like")
        .then(response => {
          if (response.status == 200) {
            let tmp = cards;
            tmp.splice(cardIndex, cardIndex + 1)
            this.setState({
              cards: tmp, cardIndex: -1, cardLoading: false
            })
          }
        })
        .catch(error => {
          console.log("discovery mode like", error.message);
          this.setState({ cardLoading: false })
        });
    } else {
      // Swipe DisLike Response
      GameLike(this.state.user_id, cards[cardIndex].id, "dislike")
        .then(response => {
          if (response.status == 200) {
            let tmp = cards;
            tmp.splice(cardIndex, cardIndex + 1)
            this.setState({
              cards: tmp, cardIndex: -1, cardLoading: false
            })
          }
        })
        .catch(error => {
          console.log("discovery mode like", error.message);
          this.setState({ cardLoading: false })
        });
    }
  }

  render() {
    const { cards, cardLoading } = this.state;
    return (
      <View
        style={{
          width: "100%",
          height: "100%"
        }}>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center"
          }}
        >

          {!cardLoading && <SwipeCards
            cards={cards}
            renderCard={cardData => (
              <Card
                {...cardData}
                navigation={this.props.navigation}
                renderProductLink={this.renderProductLink} />
            )}
            renderNoMoreCards={() => <NoMoreCards />}
            yupStyle={styles.yupStyle}
            nopeStyle={{ marginLeft: 0 }}
            yupText={"Like"}
            nopeText={"DisLike"}
            hasMaybeAction
            handleYup={this.renderLike}
            handleNope={this.renderDisLike}
            handleMaybe={this.gettingCollectionGameStatus}
          />}
        </View>

        <View
          style={{
            justifyContent: "flex-end",
            flexDirection: "row"
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => this.handleButtonPressed("nope")}>
              <Image
                style={styles.discoveryfoterimage}
                source={require("../../assets/Image/nope.png")}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => this.handleButtonPressed("yup")}>
              <Image
                style={styles.discoveryfoterimage}
                source={require("../../assets/Image/like.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderProductDiscovery = this.renderProductDiscovery.bind(this);
  }

  renderProductDiscovery() {
    this.props.renderProductLink(this.props.id);
    console.log("gameID");
  }

  render() {
    let card_image = this.props.card_image && this.props.card_image.length > 0
      ? { uri: this.props.card_image[0] }
      : require("../../assets/Image/ABCme.jpeg");
    return (
      <View>
        <View style={{ margin: 10 }}>
          <ImageBackground
            style={styles.game_image}
            imageStyle={{ borderRadius: 10 }}
            source={card_image}>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <LinearGradient
                colors={["rgba(52, 52, 52, 0)", "#0F0E0E"]}
                style={{ flex: 1, justifyContent: "flex-end" }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}>
                <Text
                  style={styles.modeName}>
                  {this.props.name} (2019)
                </Text>
                <View
                  style={styles.cardMode}>
                  <Text style={{ flex: 1, color: "white", fontSize: 12 }}>
                    {this.props.minimum_players} - {this.props.maximum_players}{" "}
                    players
                  </Text>
                  <Text style={{ flex: 1, color: "white", fontSize: 12 }}>
                    {this.props.minimum_playing_time} -{" "}
                    {this.props.maximum_playing_time} min
                  </Text>
                  <Text style={{ flex: 1, color: "white", fontSize: 12 }}>
                    Age: {this.props.mfg_suggested_ages}
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    );
  }
}


