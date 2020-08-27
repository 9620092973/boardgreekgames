

import {Text,View,Image,ScrollView,TouchableOpacity,Platform} from "react-native";
import React from "react";
import styles from "../../Styles/GameScreenStyles/GameVideosStyleSheet";
import { LinearGradient } from "expo-linear-gradient";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { GameImageOrVideo } from '../../Networks/GameScreenCalls.js'
import { Video } from 'expo-av';
import { CustomTouchableIcon } from "../../Components/Header/CustomTouchableIcon";

export default class GameVideos extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
    headerRight: (
      <View style={{marginRight:10}}>
        <CustomTouchableIcon onPress={() => {navigation.navigate("Search");}}
                  style={{marginRight:20}}>
           <EvilIcons name='search' size={28} color={'white'} />
        </CustomTouchableIcon>
        </View>
    ),
    headerBackground: (
      <LinearGradient
        colors={['#001a33', '#004f99']}
        style={{ flex: 1 }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
      />  
    ),
    headerTintColor: 'white',
    headerLeft: (
        <View style={{ flexDirection: "row", alignItems: "center",marginLeft:8,marginRight:10}}>

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
            Game Videos
          </Text>
        </View>
      ),
  })
  constructor(props) {
    super(props);

    this.state = {
      gameVideo:[],
      video:null
    }
    this.renderGameVideos = this.renderGameVideos.bind(this)
    this.renderVideo = this.renderVideo.bind(this)
  }

  componentDidMount() {
    this.renderGameVideos()

  }

  //fetching the data of the Game Videos
  renderGameVideos(){
   GameImageOrVideo(this.props.navigation.state.params.game_id,"videos")
    .then((response) => {
      console.log("[success of GameVideo]")
      this.setState({gameVideo:response.data.videos,
              video:response.data.videos[0]
            })
    }).catch((error)=> {
      console.log("[error] GameVideo ",error.message)
    })
  }

  onPressVideo = (items) => {
    this.setState({video:items})

  }
  renderVideo(items,index){
    return(
         <View style={styles.gameImageView}>
           <TouchableOpacity 
              onPress={() => {this.onPressVideo(items)}}>
              <Video 
                 source={{ uri: items}}
                  isMuted={false}
                  rate={1.0}
                  resizeMode="cover"
                  //shouldPlay
                  isLooping
                  style={styles.imageSixImage}
                  useNativeControls={true}
                />
           </TouchableOpacity>   
          </View>
      )
  }
  render() {
    return (
      <View>
        {this.state.gameVideo && this.state.video ? 
        <View style={styles.profileView}>
          <View>
          <Video 
             source={{ uri:this.state.video }}
              isMuted={false}
              rate={1.0}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={styles.imageSevenImage}
              useNativeControls={true}
          />
          </View>
          <ScrollView horizontal={true}>
            {this.state.gameVideo.map(this.renderVideo)}
          </ScrollView>
        </View>
        :
        <View style={{padding:25}}> 
                <Text style={styles.NoImages}>Sorry, there are no game videos.</Text>
              </View>}
      </View>
      // </View>
    );
  }
}
