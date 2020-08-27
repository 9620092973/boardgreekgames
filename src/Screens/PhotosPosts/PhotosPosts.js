import React from "react";
import {
  FontAwesome,
  AntDesign,
  EvilIcons,
  MaterialIcons,
  Ionicons,
  Entypo
} from "@expo/vector-icons";
//import react in our code.
import {
  Text,
  ImageBackground,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  Modal,
  TouchableHighlight,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import styles from "../../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle.js";
import { LinearGradient } from "expo";
import { UgcWriteReview } from "../../Networks/UGCCalls.js";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { GameReviewsResponseType } from '../../Redux/Actions/'
import * as Types from '../../Redux/Actions/types'
//import CommentBox from "./CommentBox/CommentBox";
//import Profiledetails from "../feedScreens/Profiledetails";
import Replybox from "../../Screens/feedTabScreens/feedScreens/CommentBox/Replybox.js";
import { GameReviewsData } from "../../Redux/Actions";



 class PhotosPosts2 extends React.Component {
  // constructor(props){              
  //   super(props);
  //   this.state = {
      
  //   }
  // }
  // //Profile Screen to show from Open profile button
  // render() {
  //   return (
  //     <View style={styles.Fullpost}>
  //       <ScrollView>
  //         <View>
  //           <Profiledetails />
  //           <CommentBox />
  //         </View>
  //            </ScrollView>

  //       <View
  //         style={styles.comment_btn}
  //       >
  //         <Text
  //           style={comment_text}
  //           onPress={() => this.props.navigation.navigate("Commentbtn")}
  //         >
  //           Writecomment
  //         </Text>
  //       </View>
  //     </View>
  //   );
  // }


  constructor() {
    super();
    this.state = {
      reply: false,
      comment_reply: false,
      commentId: null,
    };
    this.writeComment = this.writeComment.bind(this);
  }
  ReplysDisplay = () => {
    this.setState({
      reply: !this.state.reply
    });
  };
  CommentReplysDisplay = (commentId) => {
    this.setState({
      comment_reply: !this.state.comment_reply,
      //commentId: commentId,
    });
    //this.props.ReviewsDisplay1('',"particular_review_view_comment")
    //this.props.GameReviewsResponseType(Types.GAME_REVIEWS_RESPONSE_TYPE,"comment_reply",commentId)
  };

  writeComment() {
    //this.props.ReviewsDisplay1('',"particular_review_view_comment")
    //this.props.GameReviewsResponseType(Types.GAME_REVIEWS_RESPONSE_TYPE,"comment")
  }

  render() {
    let card_image = (this.props.gameData.card_image&&this.props.gameData.card_image.length) ? { uri: this.props.gameData.card_image[0] } : require('../../../assets/Image/ABCme.jpeg')
    return (
      <View style={styles.Fullpost}>
        <ScrollView>  
        

          
      <View style={styles.game_comment}>
        <View style={{ marginLeft:10 }}>
          <Image
            source={require("../../../assets/Image/avatar.png")}
            style={{ width: 45,height: 45,borderRadius: 45 / 2}}
          />
        </View>
        <View style={{ width: "80%" }}>
          <View  >
            <View style={{ padding: "3%", paddingTop: 0, paddingBottom: 0 }}>
            {/*<TouchableOpacity onPress={()=>{ this.props.ReviewsDisplay1('',"particular_review_view") }}>*/}
            <TouchableOpacity>
              <View style={{flexDirection: "row",justifyContent: "space-between",alignItems:'flex-start'}}>
                {/* <View style={{ alignItems: "flex-start", marginBottom: "2%" }}> */}
                  <Text style={{ fontWeight: "700", fontSize: 16 }}>
                    gdfg
                  </Text>
                  <Text style={{ fontWeight: "400", fontSize: 10 }}>
                    2 days ago
                  </Text>
                {/* </View> */}
                {/* <Text
                  style={{
                    fontSize: 10,
                    textAlign: "right"
                  }}
                >
                  {this.props.reviews_data.commentCount} Comments
                </Text> */}
              </View>
              
                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  sdfaf
                </Text>
              </TouchableOpacity>
              <Text style={{fontSize: 12,paddingTop: "2%",paddingBottom: "2%"}}>
                dsfasf
              </Text>
            </View>
          </View>
          <View
            style={styles.comment_count}
          >
            <View
              style={styles.count_view}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={this.writeComment}>
                  <View style={{flexDirection: "row",alignItems: "center",marginRight: "10%"}}>
                    <MaterialIcons name="mode-comment" size={14} color={"rgba(0, 0, 0, 0.7)"}/>
                    <Text style={styles.mode_comment}>
                      dfsasf
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{flexDirection: "row",alignItems: "center"}}>
                    <AntDesign
                      name="like1"
                      size={14}
                      color={"rgba(0, 0, 0, 0.7)"}
                    />
                    <Text style={styles.like_count}>
                      dsf
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity>
              <View style={{flexDirection: "row",alignItems: "center",justifyContent: "flex-end",marginLeft:8}}>
                <MaterialIcons
                  name="report"
                  size={14}
                  color={"rgba(0, 0, 0, 0.7)"}
                />
                <Text
                  style={styles.report_text}
                >
                  Report
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {this.state.reply && <Replybox replies = {[{}]} />}
        </View>
      </View>

     <View
        style={styles.comment_box}
      >
        <View style={{ marginLeft:10 }}>
          <Image
            source={require("../../../assets/Image/avatar.png")}
            style={{width: 45,height: 45,borderRadius: 45 / 2}}
          />
        </View>
        <View style={{ width: "80%" }}>
          
            <View style={{ padding: "3%", paddingTop: 0, paddingBottom: 0 }}>
              <View
                style={{ flexDirection: "row",alignItems: "flex-start",justifyContent: "space-between"}}
              >
                <Text style={{ fontWeight: "700", fontSize: 16 }}>
                  dsfa
                </Text>
                <Text style={{ fontSize: 10 }}>3 hours ago</Text>
              </View>
              <Text
                style={{fontSize: 12,paddingTop: "2%",paddingBottom: "2%"}}
              >
                dsfa
              </Text>
            </View>
          
          <View
            style={styles.replay_view}
          >
            <View
              style={styles.replay_view1}
            >
              <View style={{ flexDirection: "row" }}>
                {/*<TouchableOpacity onPress={()=>{this.CommentReplysDisplay(comment.commentId)}}>*/}
                <TouchableOpacity>
                  <View
                    style={{ flexDirection: "row",alignItems: "center",marginRight: "10%"}}
                  >
                    <Entypo name="reply" size={14}color={"rgba(0, 0, 0, 0.7)"}/>
                    <Text style={styles.replay_text}>Reply</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{flexDirection: "row",alignItems: "center",marginLeft:8}}>
                    <AntDesign name="like1" size={14} color={"rgba(0, 0, 0, 0.7)"}/>
                    <Text style={{color: "rgba(0, 0, 0, 0.7)",fontSize: 12,paddingLeft: "6%",fontWeight: "400"}}>
                      12
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity>
              <View style={{flexDirection: "row",alignItems: "center",justifyContent: "flex-end"}}>
                <MaterialIcons name="report"  size={14} color={"rgba(0, 0, 0, 0.7)"}/>
                <Text style={styles.report_text}>Report</Text>
              </View>
            </TouchableOpacity>
            <View />
          </View>
         
          {/* {(comment.commentId == this.props.commentId) && (this.props.response_type == "comment_reply") && <Replybox replies = {comment.replies} />} */}
          <Replybox replies = {[{}]} />
        </View>
      </View>
  
      </ScrollView>

      {/* <View
         
        >
        <TouchableOpacity  style={styles.comment_btn}
        onPress={this.writeComment}>
          <Text style={styles.comment_text}>
              Writecomment
          </Text>
        </TouchableOpacity>
        </View> */}

      </View>
    );
  }

}
const mapStateToProps = state => ({
  ugc_reviews_response: state.GameReviewsReducer.ugc_reviews_response,
  reviews_data: state.GameReviewsReducer.reviews_data,
  response_type: state.GameReviewsReducer.response_type,
  commentId: state.GameReviewsReducer.commentId,
  gameData : state.GameIDReducer.gameData,
  //Ugc_Writereview: state.GameIDReducer.Ugc_Writereview,
})
const mapDispatchToProps = dispatch => (
	bindActionCreators({
		GameReviewsResponseType,
	}, dispatch)

)

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPosts2);

