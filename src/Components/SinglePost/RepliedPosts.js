import React from "react";
import {
  AntDesign,
  MaterialIcons,
  Entypo
} from "@expo/vector-icons";
//import react in our code.
import {
  Text,
  Image,
  View,
  TouchableOpacity,

} from "react-native";
import styles from "../../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle";
import * as Types from "../../Redux/Actions/types";
import Hyperlink from 'react-native-hyperlink';
import { UGCPostCommentLike } from "../../Networks/UGCCalls";
import Replybox from "../../Screens/feedTabScreens/feedScreens/CommentBox/Replybox";
import PostReport from "../../Components/ReUsableComponent/PostReport";
import { DisplayFormatedTime } from "../../Utils"

import {
  _retrieveData
} from "../../Networks/LoginScreenCalls"

export default class RepliedPosts extends React.Component{

    constructor(props){
        super(props);
        this.state={
            commentId: null,
            comment_reply: false,
            modalVisible: true,
            isliked:false,
            likeCounts:this.props.comment.likes
        }
      
        this.postCommentLike = this.postCommentLike.bind(this);
    }
    componentDidMount(){
    }

    async HidePopUpUserProfile(){
      const { user_id } = await _retrieveData();
      const { comment } = this.props;
        this.props.navigation.navigate(
            'Profile', {
                userName: comment.user, 
                userId: comment.user_id, 
                profileType: comment.user_id == user_id ? "MyProfile" : "UserProfile",
                ProfilePic:comment.avatar
            })
        
        this.props.handleOpen(false)
        this.setState({
          modalVisible: false,
        })
    }
    
    ReplysDisplay = () => {
        this.setState({
          reply: !this.state.reply
        });
      };
    CommentReplysDisplay = commentId => {
        this.setState({
          comment_reply: !this.state.comment_reply,
          commentId: commentId
        });
        this.props.ReviewsDisplay1("", "particular_review_view_comment");
        this.props.GameReviewsResponseType(
          Types.GAME_REVIEWS_RESPONSE_TYPE,
          "comment_reply",
          commentId
        );
    };

    
    postCommentLike() {
      UGCPostCommentLike(this.props.comment.commentId).then((response) => {

         this.setState({
          isliked:!this.state.isliked
        })
        if(this.state.isliked == true){
          this.setState({likeCounts:this.state.likeCounts+1})
        }else{
          this.setState({likeCounts:this.state.likeCounts-1})
        }
      })
        .catch((error) => {
          console.log("UGCPostCommentLike error", error.message)
        })
    }

    renderAvatar(avatar) {
      if(avatar) {
        return (
          <Image
            source={{ uri: avatar }}
            style={{ marginTop:5, width: 45, height: 45, borderRadius: 45 / 2 }}
          />  
        )
      } else {
        return (
          <Image
            source={require("../../../assets/Image/avatar.png")}
            style={{ marginTop:5, width: 45, height: 45, borderRadius: 45 / 2 }}
          />
        )
      }
    }
      
    render(){

        return (
          <View>
            <View key={this.props.indexVal} style={styles.replyView}>

              <TouchableOpacity onPress={this.HidePopUpUserProfile.bind(this)}>
              <View style={styles.replyImageView}>
                {this.renderAvatar(this.props.comment.avatar)}
              </View>
              </TouchableOpacity>

              <View style={{flexDirection:'column', flex:1}}>

                <View style={styles.commentreplyView}>
                  <View style={{alignSelf:'flex-start'}}>
                    <Text style={{fontSize:16, fontWeight:"500"}}>{this.props.comment.user}</Text>
                  </View>
                  <View styele={{alignSelf:'flex-start'}}>
                    <Text style={styles.replyTime}>{DisplayFormatedTime(this.props.comment.date_created)}</Text>
                  </View>
                </View>
                  
                <View style={{flex:1,flexDirection:'row'}}>
                  <Hyperlink linkDefault={true} linkStyle={{ color: '#344feb', }}>
                    <Text style={styles.commentReply}>{this.props.comment.comment}</Text>
                  </Hyperlink>
                </View>

                <View style={styles.commentBoxView}>

                  <View style={styles.commentreplyIcon}>

                 
                  <TouchableOpacity
                        onPress={() => {
                          this.CommentReplysDisplay(this.props.comment.commentId);
                        }}>
                  <View style={styles.replyIconView}>
                      <Entypo
                        name="reply"
                        size={16}
                        color={"rgba(0, 0, 0, 0.7)"}
                      />
                      <Text style={styles.replay_text}>Reply</Text>
                  </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {this.postCommentLike}>
                  <View style={styles.replyLikeIcon}>
                      <AntDesign
                        name="like1"
                        size={16}
                        color={"rgba(0, 0, 0, 0.7)"}
                      />
                      <Text style={styles.replyLikeCount}> {this.state.likeCounts}</Text>
                  </View>
                  </TouchableOpacity>
                  </View>
                  <TouchableOpacity >
                    <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                        <PostReport 
                            reportButtonView={{
                              alignItems: "flex-end"
                          }}
                          feedItemId = {this.props.comment.commentId}
                          feedType = {"comment"}/>


                    </View>
                  </TouchableOpacity>

                </View>

              </View>
            </View>
                <Replybox replies={this.props.comment.replies} 
                          navigation={this.props.navigation}
                          userId={this.props.userId} />
            </View>
          )
    }
}