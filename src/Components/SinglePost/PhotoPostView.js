import React from "react";
import {
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import styles from "../../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle";
import Replybox from "../../Screens/feedTabScreens/feedScreens/CommentBox/Replybox"
import PostReport from "../../Components/ReUsableComponent/PostReport";
import { DisplayFormatedTime } from "../../Utils";
import { UGCPostLike } from "../../Networks/UGCCalls";
import { _retrieveData } from "../../Networks/LoginScreenCalls";
import { Video } from 'expo-av';

export default class PhotoPostView extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            reply: false,
            likeCounts: this.props.reviews_data.likes,
            modalVisible: false,
            isliked: false,
        }
        this.postLike = this.postLike.bind(this);
    }

    renderAvatar(avatar) {
      if (avatar) {
        return (
          <Image
            source={{ uri: avatar }}
            style={{ width: 45, height: 45, borderRadius: 45 / 2 }}
          />
        );
      } else {
        return (
          <Image
            source={require("../../../assets/Image/avatar.png")}
            style={{ width: 45, height: 45, borderRadius: 45 / 2 }}
          />
        );
      }
    }

    postLike() {
      UGCPostLike(this.props.dataId)
        .then(response => {
          this.setState({
            isliked: !this.state.isliked
          });
          if (this.state.isliked == true) {
            this.setState({ likeCounts: this.state.likeCounts + 1 });
          } else {
            this.setState({ likeCounts: this.state.likeCounts - 1 });
          }
        })
        .catch(error => {
          console.log("@Error [PostedReview]", error.message);
        });
    }

    async HidePopUpMyProfile() {
      const { user_id } = await _retrieveData();
      const { reviews_data} = this.props;
      this.props.navigation.navigate("Profile", {
        userName: reviews_data.user,
        userId: reviews_data.user_id,
        profileType: reviews_data.user_id == user_id ? "MyProfile" : "UserProfile",
        ProfilePic:reviews_data.avatar
      });
      this.props.handleOpen(false);
      this.setState({
        modalVisible: false
      });
    }

    render(){
        let image = this.props.reviews_data.images[0] ? { uri: this.props.reviews_data.images[0] } : require('../../../assets/Image/ABCme.jpeg')
        let imageFormats = ["png", "jpg", "jpeg", "bmp", "gif", "webp", "psd"];
        let videoFormats = ["mp4","m4a","m4v","f4v","f4a","m4b","m4r","f4b","mov","3gp","3gp2","3g2","3gpp","3gpp2","ogg","oga","ogv","ogx", "wmv","wma","asf*","webm","flv","AVI*","QuickTime*","HDV*","OP1a*","OP-Atom*","ts","MPEG-2 PS","MPEG-2 TS*","WAV","Broadcast","WAV*","LXF","GXF*","VOB*"];
        const fileType = this.props.reviews_data.images[0].split('.').pop()
        return (
          <View style={{}}>
          <View style={{marginHorizontal:20}}>
            <View style={{flexDirection:'row', marginTop:10}}>
              <TouchableOpacity onPress={this.HidePopUpMyProfile.bind(this)}>
              <View style={{justifyContent:'center'}}>
                  {this.renderAvatar(this.props.reviews_data.avatar)}
              </View>
              </TouchableOpacity>
              <View>
                <View style={styles.user_name}>
                  <Text style={{fontSize:16, fontWeight:"500"}}>{this.props.reviews_data.user}</Text>
                  <Text style={{fontSize:12, fontWeight:"400"}}>{DisplayFormatedTime(this.props.reviews_data.date)}</Text>
                </View> 
              </View>
            </View>
            <View style={styles.title_view}>
              <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.goBack()
                  }}
                >
                  <Text style={{fontSize:18, fontWeight:"700"}}>{this.props.reviews_data.post_title}</Text>
              </TouchableOpacity>    
                  <Text style={{marginTop:1,fontSize:14, fontWeight:"400"}}>{this.props.reviews_data.post_content}</Text>
            </View>
          </View>
          <View>
            <View style={{marginTop:10}}>
              <ScrollView horizontal={true}>
                      {/* <Image  source={image}
                        style={{height:200,width:Dimensions.get('screen').width}}
                    /> */}
                       {imageFormats.includes(fileType) &&
                      <Image  source={image}
                        style={{height:200,width:Dimensions.get('screen').width}}
                    />
              }
              {videoFormats.includes(fileType) &&
              <View style={{ flexDirection: "row" }}>
                <Video
                  source={image}
                  isMuted={false}
                  rate={1.0}
                  resizeMode="cover"
                  isLooping
                  style={{height:200,width:Dimensions.get('screen').width}}
                  useNativeControls={true}
                />
              </View>
          }
              </ScrollView>
            </View>
          <View style={styles.Likephoto}>  
            <View style={styles.photoView}>
            <TouchableOpacity onPress={this.postLike}>
              <View style={styles.likeIcon}>
                  <AntDesign
                    name="like1"
                    size={16}
                    color={"rgba(0, 0, 0, 0.7)"}
                  />
                  <Text style={styles.like_count}>
                     {this.state.likeCounts}
                  </Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.props.writeComment}>
              <View style={styles.commentIcon}>
                    <MaterialIcons
                      name="mode-comment"
                      size={16}
                      color={"rgba(0, 0, 0, 0.7)"}
                    />
                  <Text style={styles.mode_comment}>
                      {this.props.reviews_data.commentCount}
                  </Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.report}>
                          <PostReport 
                            reportButtonView={{
                              alignItems: "flex-end"
                          }}
                          feedItemId = {this.props.reviews_data.dataId}
                          feedType = {"gamepost"}/>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            {this.state.reply && <Replybox replies={[{}]} />}
          </View>
          </View>
    </View>
        )
    }
}