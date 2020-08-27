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
import VideoComponent from "../../Components/VideoComponent"
import * as Types from "../../Redux/Actions/types";
import PhotoPostView from "../SinglePost/PhotoPostView"
import {
  UGCPostLike
} from "../../Networks/UGCCalls";

export default class PostLikes extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isliked:false,
            likeCounts:this.props.reviews_data.likes
        }
        this.writeComment = this.writeComment.bind(this);
        this.postLike = this.postLike.bind(this);
    }

    postLike() {
        UGCPostLike(this.props.dataId).then((response) => {
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
            console.log("@Error [PostLikes]", error.message)
          })
      }

      writeComment() {
        this.props.ReviewsDisplay1("", "particular_review_view_comment");
        this.props.GameReviewsResponseType(
          Types.GAME_REVIEWS_RESPONSE_TYPE,
          "comment"
        );
      }  

      render(){
          return(
            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>  
            <View style={{flexDirection:'row', justifyContent:'flex-start', marginTop:20, alignItems:'center', marginLeft:20}}>
            <TouchableOpacity onPress={this.postLike}>
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
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

              <TouchableOpacity onPress={this.writeComment}>
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingLeft:"20%"}}>
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

            <View style={{flexDirection:'row', marginTop:20, alignItems:'flex-end', marginRight:20}}>
                <MaterialIcons
                  name="report"
                  size={16}
                  color={"rgba(0, 0, 0, 0.7)"}
                />
                 <Text style={styles.report_text}>Report</Text>
            </View>
          </View>
          )
      }
}    