import React, { Component } from 'react'
import { Text,
    ImageBackground,
    View,
    TouchableOpacity,
    Modal,
    Alert
   } from "react-native";
import Image from "react-native-remote-svg";
import styles from "../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle";
import { LinearGradient } from "expo-linear-gradient";
import {FontAwesome, AntDesign,} from "@expo/vector-icons";
import SortbyButton from './SortbyButton';
import GameInfoShopbutton from './ReUsableComponent/GameInfoShopbutton.js'
import ShareGame from "../Components/Share/Share.js";
import { AddCollectionGame,GameFollow,FetchCollectionGameStatus } from "../Networks/ProductPageCalls.js";
import { MyGameCollection } from "../Networks/MyCollectionCalls";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Types from "../Redux/Actions/types";
import AddToCollectionImage from "../../assets/Image/AddToCollectionImage"
import AddToCollectionActiveImage from "../../assets/Image/AddToCollectionActiveImage"
import ShareImage from "../../assets/Image/ShareImage"
import { GameImageOrVideo } from '../Networks/GameScreenCalls'

class GameHeader extends Component {
    constructor(props) {
        super(props)
        this.state={
            modalVisible: false,
            visibleModal:null,
            add_to_collection: false,
            imagesLength: 0,
            videosLength: 0,
        }
       this.handleSort = this.handleSort.bind(this)
       this.renderAddCollectionGame = this.renderAddCollectionGame.bind(this);
       this.gettingCollectionGameStatus = this.gettingCollectionGameStatus.bind(this);
       this.naviagtingToGameImages = this.naviagtingToGameImages.bind(this);
       this.naviagtingToGameVideos = this.naviagtingToGameVideos.bind(this);
       this.onSuccess = this.onSuccess.bind(this);
       this.fetchGameImagesData = this.fetchGameImagesData.bind(this);
       this.fetchGameVideosData = this.fetchGameVideosData.bind(this);
    }

    handleSort(sort) {
      this.props.handleSort(sort)
    }

    componentDidMount(){
        this.gettingCollectionGameStatus()
        this.fetchGameVideosData()
        this.fetchGameImagesData()
    }

    fetchGameImagesData() {
      GameImageOrVideo(this.props.gameId,"images")
    .then((response) => {

      this.setState({
              imagesLength:(response.data.images&&response.data.images.length) ? response.data.images.length : 0
            })
    }).catch((error)=> {
      console.log("[error] gameImage ",error.message)
    })
    }

    fetchGameVideosData() {
      GameImageOrVideo(this.props.gameId,"videos")
    .then((response) => {
      console.log("[success of GameVideo]")
      this.setState({
              videosLength:(response.data.videos&&response.data.videos.length) ? response.data.videos.length : 0
            })
    }).catch((error)=> {
      console.log("[error] GameVideo ",error.message)
    })
    }

     renderAddCollectionGame() {
      if (this.props.navigation_from == "WelcomePage") {
        this.props.setModalVisible(true);
      } else {
        AddCollectionGame(this.props.gameId)
          .then(response => {
            if (response.status == 200) {
              Alert.alert("Successfully Collected");
              MyGameCollection(this.onSuccess,this.onFailure)
              this.setState({
                add_to_collection: true
              });
            }
          })
          .catch(error => {
            console.log("@Error [GameMainHeader] AddToCollection", error.message);
          });
      }
    }

    onSuccess(response){
      this.props.loadGenericData({ genericData: response , moduleName: "MY_COLLECTION" })
    }

    onFailure(error){
      console.log("@Error [GameMainHeader] Failure",error.message)
    }

    gettingCollectionGameStatus() {
      FetchCollectionGameStatus(this.props.gameId)
        .then(response => {
          this.setState(
            {
              add_to_collection:
                response.data && response.data.length
                  ? response.data[0].status
                  : false
            },
          );
        })
        .catch(error => {
          console.log("@Error [GameMainHeader] FetchCollectionStatus", error.message);
        });
    }

    renderShare() {
      if (this.props.navigation_from == "WelcomePage") {
        this.props.setModalVisible(true);
      } else {
        this.child.onShare();
      }
    }
      naviagtingToGameImages() {
    if (this.props.navigation_from == "WelcomePage") {
      this.props.setModalVisible(true);
    } else {
      this.props.navigation.navigate("GameImages",{game_id:this.props.gameId});
    }
  }

  naviagtingToGameVideos() {
    if (this.props.navigation_from == "WelcomePage") {
      this.props.setModalVisible(true);
    } else {
      this.props.navigation.navigate("GameVideos",{game_id:this.props.gameId});  
    }
  }
  getCardImageSource() {
    const { card_image } = this.props.gameData
    return card_image && card_image.length ? 
            { uri: card_image[0] } : require('../../assets/Image/ABCme.jpeg')
}
// for git add
    renderGameImageBackground() {
        return (
        <View pointerEvents="box-none"  style={{ height: 184 }}>
          <ImageBackground
            source={this.getCardImageSource()}
              style={styles.gameimageImage} >
               <View style={{ flex: 1, justifyContent: "flex-end" }}>
                 <LinearGradient
                  colors={['rgba(52, 52, 52, 0)', '#0F0E0E']}
                  style={{ flex: 1, justifyContent: "flex-end" }}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}>
                  <View style={{ flexDirection: "row", marginBottom: 25, justifyContent: 'space-between' }}>
                      <View style={{flex:1, flexDirection:'row', justifyContent: 'flex-start', marginLeft:15}}>
                          <TouchableOpacity onPress={this.naviagtingToGameImages}
                            style={styles.icons}>
                                <FontAwesome name='camera' size={25} color={"#fff"} style={{ fontWeight: 'bold' }} />
                                <Text style={styles.labelFourText}>{this.state.imagesLength}</Text>  
                          </TouchableOpacity>

                          <TouchableOpacity onPress={this.naviagtingToGameVideos}
                            style={[styles.icons, {marginLeft:8}]}>
                              <AntDesign name='playcircleo' size={25} color={"#fff"} style={{ fontWeight: 'bold' }} />   
                              <Text style={styles.labelThreeText}>{this.state.videosLength}</Text>                           
                          </TouchableOpacity>
                      </View>
                      <View style={{flex:1, flexDirection:'row', justifyContent: 'flex-end', marginRight:15}}>
                      {(this.state.add_to_collection == false || this.state.add_to_collection == undefined) && (
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
                        )}
                          {/* share button styles */}
                             <ShareGame
                              ref={instance => {
                                this.child = instance;
                              }}
                            />
                            <TouchableOpacity
                              onPress={() => {
                                this.renderShare();
                              }}
                              style={styles.share}
                            >
                              <ShareImage width={20} height={20} />
                            </TouchableOpacity>
                      </View>
                  </View>
                </LinearGradient>
              </View>
            </ImageBackground>
        </View>
        )
    }
    categoryChange() {
      const { category } = this.props
      return(
        <View>
            <Text style={styles.profileTitle}>
            {category=='modstips' ? 'Mods & Tips' : category && category == 'photos' ? 'Media' : category}</Text>
        </View>
      )       
    }

    renderSecondSection() {
        const { category } = this.props
        // profile title and sort by button section
        return (
            <View style={[styles.ProfileTitleBox, { paddingLeft: '4%', paddingRight: '4%' }]}>
              <View style={styles.TitleandYearBox}>
                <Text style={styles.pYear}>{this.props[category] ? this.props[category].dataCount : 0}</Text>
                 {this.categoryChange()}
              </View>

              <SortbyButton 
                handleSort={this.handleSort}    
              />              
            </View>
        )
    }
    render() {
        return (
        <View>
          {this.renderGameImageBackground()}

          <View style={styles.ScreenContent}>
            <View style ={{width:"100%",flexDirection:"row"}}>
              <View style = {{flex:1,justifyContent:"flex-start", flexDirection:'row'}}>
                <Text style={styles.profileTitle}>{this.props.gameData.name} ({this.props.gameData.year_published})</Text>
              </View>
              {this.props.gameData.amazon || this.props.gameData.ebay ?
              <View style={{alignSelf:"flex-end", }}>
                <GameInfoShopbutton 
                  navigation_from={this.props.navigation_from}
                  setModalVisible={this.props.setModalVisible}
                  Amazonlink = {this.props.gameData.amazon}
                  Ebaylink = {this.props.gameData.ebay}
                />
              </View> : null }
            </View>
            <View style={styles.listBox}>
              <Text style={styles.players}>{this.props.gameData.minimum_players}-{this.props.gameData.maximum_players} Players</Text>
              <Text style={styles.GameTime}>{this.props.gameData.minimum_playing_time}-{this.props.gameData.maximum_playing_time} Min</Text>
              <Text style={styles.GameTimeAge}>Age: {this.props.gameData.mfg_suggested_ages}</Text>
            </View>
        </View>
        <View style={styles.hrLine} />
        { this.props.category != undefined && this.renderSecondSection()}
    </View>
        )
    }
}
export default connect(
    null,
    dispatch => ({
      loadGenericData: options => {
        dispatch({ ...options, type: 'LOAD_GENERIC_IDENTIFIER_DATA' })
      }
    })
)(GameHeader)
