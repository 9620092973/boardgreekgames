import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,StyleSheet
} from "react-native";
import styles from "../../Styles/WelcomePageStyles/WelcomeScreen.css";

import { _TrendingGame } from "../../Networks/ReUsableCalls";
import { productLink } from "../../Networks/DiscoveryCalls";

import Swiper from "react-native-swiper";
import { EvilIcons } from "@expo/vector-icons";
import { Platform } from "@unimodules/core";
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from "native-base";

export default class Welcome extends React.Component {
 
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.renderTrendingGames = this.renderTrendingGames.bind(this);
    this.navigateToProductPage = this.navigateToProductPage.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }


  componentDidMount() {
    this.renderTrendingGames();
    const screenWidth = Math.round(Dimensions.get("window").width) / 3 - 20;
    const fullscreenWidth = (Math.round(Dimensions.get('window').width));
    const fullscreenHeight = (Math.round(Dimensions.get('window').height));
    this.setState({
      screen_width: screenWidth,
      full_screen_width: fullscreenWidth,
      full_screen_height: fullscreenHeight
    })
  }
  
  onSuccess(response) {
    console.log(Dimensions.get('window').height+"iPhone 5s Weight ")
    let numberCard
    if(Dimensions.get('window').height <= 568){
      numberCard=3  
    }
    else{
      numberCard=6
    }
    if (response) {
      let data = response;
      let total_length = data.length;
      let remaining_length = data.length;
      let count = 0;
      let game_slice = [];
      for (let i = 0; i < data.length;) {
        if (remaining_length < numberCard) {
          game_slice.push(data.slice(i, i + remaining_length));
          i = i + remaining_length;
          remaining_length = 0;
          total_length = 0; 
        } else {
          game_slice.push(data.slice(i, i + numberCard));
          i = i + numberCard;
          remaining_length = total_length - numberCard;
          total_length = remaining_length;
        }
        count = count + 1;
      }
      this.setState({
        data: game_slice
      });
    }
  }
  onFailure(error) {
    console.log("@Error [Welcome]", error.message);
  }
  renderTrendingGames() {
    _TrendingGame(this.onSuccess, this.onFailure);
  }

  navigateToProductPage(game_id) {
    productLink(this.state.game_id)
      .then(response => {
        if (response.status == 200) {
        }
      })
      .catch(error => {
        console.log("@Error [Welcome]", error.message);
      });
  }

  render() {
    let iPhone= {}
    let largeScreen ={}
    let imageback1 ={}
    let imageback2={}
    const trendingData = this.state.data;
    if(Dimensions.get('window').height <= 568){
      iPhone = {
          height: Dimensions.get("window").height / 2.5 ,
          flex: 1,
        },
        imageback1={
          width: this.state.screen_width,
          backgroundColor: "transparent",
          borderRadius: 6,
          height: Dimensions.get("window").height / 3.2 - 35,
          marginLeft: 5,
        
        }
    }
    else{
      largeScreen =  {
        height: Dimensions.get("window").height / 2.1,
        flex: 1,
        justifyContent: "center"
      },
      imageback2={
        width: this.state.screen_width,
        backgroundColor: "transparent",
        borderRadius: 6,
        height: Dimensions.get("window").height / 4 - 35,
        marginLeft: 5
      }
    }
    return (
      <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      <View style={styles.welcomeView} >
        <View style={styles.logoImageAnimated}>
          <Image
            source={require("../../../assets/logoM.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.labelText}>Trending Games</Text>
          <Text
            style={styles.labelTwoText}>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}</Text>
        </View>

        <View
          style={[iPhone,largeScreen]
          }>
          <Swiper 
            dot={
              <View
                style={{
                  backgroundColor: "rgba(0,0,0,.2)",
                  width: 5,
                  height: 5,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
              
                }} />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: "#000",
                  width: 8,
                  height: 8,  
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3
                }} />
            }

            paginationStyle={{
              marginTop: Platform === "ios" ? "18%" : "6%",
              justifyContent: "center",
              alignItems: "center"
            }}
            loop={false}
            showsPagination={true}
            key={this.state.data.length}>
            {trendingData.map((items, index) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap"
                }} key={index}>
                {items.map((item, index1) => {
                  let card_image = item.card_image[0]
                    ? { uri: item.card_image[0] }
                    : require("../../../assets/Image/ABCme.jpeg");
                  return (
                    <View style={{ marginTop: 5 }} key={index1}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("GameInfo", {
                            productData: item,
                            game_id: item.id,
                            navigation_from: "WelcomePage"
                          });
                        }}>     
                        <ImageBackground
                          key={item.id}
                          source={card_image}
                          style={[imageback1,imageback2]}
                          imageStyle={{ borderRadius: 4 }}>
                          <View style={{ flex: 1, justifyContent: "flex-end" }}>
                            <LinearGradient
                              colors={['rgba(52, 52, 52, 0)', '#0F0E0E']}
                              style={{ flex: 1, justifyContent: "flex-end" }}
                              start={{ x: 0, y: 0 }}
                              end={{ x: 0, y: 1 }}>
                              <Text style={styles.textProfile}>{item.name}</Text>
                              {/* <Text style={styles.profilePlayer}>{item.minimum_players}-{item.maximum_players} Players</Text> */}
                            </LinearGradient>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            ))}
          </Swiper>
        </View>
        <View
          style={styles.MainView}>
          <TouchableOpacity
            style={styles.SignUpBtn}
            onPress={() => {
              this.props.navigation.navigate("SignupAuth");
            }}>
            <Text style={[styles.accountBtn, { color: "rgba(245, 239, 239, 0.99)" }]}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.LoginBtn}
            onPress={() => {
              this.props.navigation.navigate("LoginAuth");
            }}>
            <Text style={[styles.accountBtn, { color: "#1D365F" }]}>I have an account</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }
}
                     