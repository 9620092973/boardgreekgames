//
//  BarCodeScan4
//  DoubleCritical
//
//  Created by Supernova.
//  Copyright © 2018 S7works. All rights reserved.
//

import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
  ScrollView,
  Alert,
  Platform,
  ImageBackground
} from "react-native";
import React from "react";
import Image from "react-native-remote-svg";
import styles from "../../Styles/BarCodeScannerStyles/BarCodeGameStyleSheet";
import {
  FontAwesome,
  AntDesign,
  EvilIcons,
  MaterialIcons,
  Feather,Ionicons
} from "@expo/vector-icons";
import ShareGame from "../../Components/Share/Share.js";
import {
  AddCollectionGame,
  FetchCollectionGameStatus,
  GameFollow,
  RateGame
} from "../../Networks/ProductPageCalls";
import { MyGameCollection } from "../../Networks/MyCollectionCalls";
import { Container, Content, Input, Footer, FooterTab } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { CustomTouchableIcon } from "../../Components/Header/CustomTouchableIcon";
import AddToCollectionImage from "../../../assets/Image/AddToCollectionImage"
import AddToCollectionActiveImage from "../../../assets/Image/AddToCollectionActiveImage"

export default class BarCodeGame extends React.Component {
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
          Game
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

  static tabBarItemOptions = ({ navigation }) => {
    return {
      tabBarLabel: null
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      productData: this.props.navigation.state.params.productData,
      game_id: this.props.navigation.state.params.game_id,
      add_to_collection: false,
    };
    this.renderAddCollectionGame = this.renderAddCollectionGame.bind(this);
    this.barcodeCollection = this.barcodeCollection.bind(this);
  }

  renderAddCollectionGame(game_id) {
    AddCollectionGame(game_id)
      .then(response => {
        if (response.status == 200) {
        }
      })
      .catch(error => {
        console.log("AddCollectionGame", error.message);
      });
  }

  // renderAddCollectionGame() {
   
  //     AddCollectionGame(this.state.game_id)
  //       .then(response => {
  //         if (response.status == 200) {
  //           Alert.alert("Successfully Collected");
  //           MyGameCollection(this.onSuccess,this.onFailure)
  //           this.setState({
  //             add_to_collection: true
  //           });
  //         }
  //       })
  //       .catch(error => {
  //         console.log("@Error [GameMainHeader] AddToCollection", error.message);
  //       });
    
  // }

  barcodeCollection() {
    FetchCollectionGameStatus(this.state.game_id)
      .then(response => {
        let add_to_collection_status = response.data && response.data.length
          ? response.data[0].status
          : false
        if (add_to_collection_status == false) {
          this.renderAddCollectionGame(this.state.game_id)
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

  onFailure(error){
    console.log("@Error [GameMainHeader] Failure",error.message)
  }

  componentDidMount() {
    console.log(
      "product data is::::::::",
      this.props.navigation.state.params.productData
    );
    console.log("game id is:::::", this.props.navigation.state.params.game_id);
  }

  render() {
    let card_image =
      this.state.productData.card_image &&
      this.state.productData.card_image.length
        ? { uri: this.state.productData.card_image[0] }
        : require("../../../assets/Image/ABCme.jpeg");
    return (
      <View style={styles.welcomeView}>
       <View pointerEvents="box-none"  style={{ height: 184 }}>
          <ImageBackground
            source={card_image}
              style={styles.gameimageImage} >
               <View style={{ flex: 1, justifyContent: "flex-end" }}>
                 <LinearGradient
                  colors={['rgba(52, 52, 52, 0)', '#0F0E0E']}
                  style={{ flex: 1, justifyContent: "flex-end" }}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}>
                  <View style={{ flexDirection: "row", marginBottom: 25, justifyContent: 'space-between' }}>
                      <View style={{flex:1, flexDirection:'row', justifyContent: 'flex-start', marginLeft:15}}>
                          <TouchableOpacity  onPress={() => {
                              this.props.navigation.navigate("GameImages",{game_id:this.props.navigation.state.params.game_id});
                            }}
                            style={{flexDirection: "row"}}>
                                <FontAwesome name='camera' size={25} color={"#fff"} style={{ fontWeight: 'bold' }} />
                                <Text style={styles.labelFourText}>12</Text>  
                          </TouchableOpacity>

                          <TouchableOpacity   onPress={() => {
                              this.props.navigation.navigate("GameVideos",{game_id:this.props.navigation.state.params.game_id});
                            }}
                            style={{flexDirection: "row", marginLeft:10}}>
                              <AntDesign name='playcircleo' size={25} color={"#fff"} style={{ fontWeight: 'bold', marginLeft:10 }} />   
                              <Text style={styles.labelThreeText}>5</Text>                           
                          </TouchableOpacity>
                      </View>
                  </View>
                </LinearGradient>
              </View>
            </ImageBackground>
        </View>
        <View style={{height: 74}}>
          <ScrollView style={styles.viewScrollView} />
          <View style={styles.barcodeGameview}>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <Text style={styles.labelEightText}>
                {this.state.productData.name}
              </Text>
              <Text style={{ fontSize: 17 }}>
                {" "}
                ({this.state.productData.year_published})
              </Text>
            </View>
            <View  style={styles.barGameView}>
              <Text style={styles.labelSevenText}>
                {this.state.productData.minimum_players}-
                {this.state.productData.maximum_players} Players
              </Text>
              <Text style={styles.labelSixText}>
                {this.state.productData.minimum_playing_time}-
                {this.state.productData.maximum_playing_time} Min
              </Text>
              <Text style={styles.labelFiveText}>
                Age: {this.state.productData.mfg_suggested_ages}
              </Text>
            </View>
            <View style={styles.viewFiveView} />
          </View>
        </View>
        
        <View style={styles.ViewbarGame}>

          <View>
            <TouchableOpacity onPress={this.barcodeCollection}>
              <MaterialIcons
                name="list"
                size={22}
                color={"#2BB3E5"}
                style={{alignSelf:'center'}}
              />
              {/* {(this.state.add_to_collection == false || this.state.add_to_collection == undefined) && (
                <TouchableOpacity
                  onPress={this.renderAddCollectionGame}
                  style={styles.add_collection}
                >
                    <AddToCollectionImage width={20} height={20} />  
                </TouchableOpacity>
                )}
                {this.state.add_to_collection == true && (
                      <View
                        style={styles.collected_view}
                      >
                          <AddToCollectionActiveImage width={20} height={20} />
                      </View>
                )} */}
               <Text style={styles.labelSixteenText}>Add to collection</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("GameInfo", {
                productData: this.state.productData,
                game_id: this.state.game_id
              });
            }}>
              <Feather
                name="external-link"
                size={22}
                color={"#2BB3E5"}
                style={{alignSelf:'center'}}
              />
              <Text style={styles.labelSeventeenText}>Game Info</Text>
            </TouchableOpacity>
          </View>

          <View>
            <ShareGame
              ref={instance => {
                this.child = instance;
              }}
            />
            <TouchableOpacity
              onPress={() => {
                this.child.onShare();
              }}
            >
              <MaterialIcons
                name="share"
                size={22}
                color={"#2BB3E5"}
                style={{alignSelf:'center'}}
              />
              <Text style={styles.btn_share}>Share</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}
