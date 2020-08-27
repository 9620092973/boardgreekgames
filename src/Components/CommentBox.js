import React from "react";
import {
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
//import react in our code.
import {
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  Platform
} from "react-native";
import styles from "../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle";
import { LinearGradient } from "expo-linear-gradient";
import {
  UGCCommentPost,
  UgcWriteReviewGet,
  UGCCommentReplyPost
} from "../Networks/UGCCalls";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GameReviewsData } from "../Redux/Actions";
import * as Types from "../Redux/Actions/types";

class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {
      keyboardOffset: 10,
      comment: ""
    };
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
    this.sendComments = this.sendComments.bind(this);
    this.postComments = this.postComments.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
    this.UgcWriteReview = this.UgcWriteReview.bind(this);
  }

  componentWillReceiveProps(props) {
    if(this.props.response_type!=props.response_type) {
      if(props.response_type != 'comment' || props.response_type != 'comment_reply') {
        this.inputText.focus()
      }
    }
  }
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }
  _keyboardDidShow(event) {
    this.setState({
      keyboardOffset: parseInt(event.endCoordinates.height) + 5
    });
  }

  _keyboardDidHide() {
    this.setState({
      keyboardOffset: 10
    });
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  sendComments() {
    this.props.ReviewsDisplay1("", "write_comment_view");
    this.postComments();
    Keyboard.dismiss();
  }

  UgcWriteReview() {
    UgcWriteReviewGet(this.props.dataId)
      .then(write_review_response => {
        this.props.GameReviewsData(
          Types.GAME_REVIEWS_DATA,
          write_review_response.data
        );
      })
      .catch(error => {
        console.log("@Error [SinglePostModal CommentBox] post",
          error.message
        );
      });

    this.setState({ comment: "" })
  }

  postComments() {
    
    if (this.props.response_type == "comment") {
      UGCCommentPost(this.props.dataId, this.state.comment)
        .then(response => {
          this.UgcWriteReview();
        })
        .catch(error => {
          console.log("@Error [SinglePostModal CommentBox] comments", error.message);
        });
    } else if (this.props.response_type == "comment_reply") {
      UGCCommentReplyPost(this.props.commentId, this.state.comment)
        .then(response => {
          this.UgcWriteReview();
        })
        .catch(error => {
          console.log("@Error [SinglePostModal CommentBox] replies", error.message);
        });
    }
  }

  onCommentChange(comment) {
    this.setState({
      comment: comment
    });
  }

  //Profile Screen to show from Open profile button
  render() {
    return (
      <React.Fragment>
        {/* bottom write comment view for users to write comment */}
        <View
          style={{
            backgroundColor: "#fff",
            paddingBottom: Platform.OS == 'ios' ? this.state.keyboardOffset : 5,
            flexDirection: "row",
            paddingLeft: 10,
            paddingRight: 10
          }}>
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.3)",
              borderRadius: 25,
              elevation: 1,
              padding: 6,
              paddingLeft: 14,
              paddingRight: 14
            }}
          > 
           <TextInput
              ref ={ref => this.inputText = ref}
              autoCapitalize="none"
              multiline={true}
              onChangeText={this.onCommentChange}
              placeholder="Write a comment"
              value={this.state.comment}
              style={[styles.textarea, { borderRadius: 10, width: "90%" }]}
           />
            
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "10%"
              }}
            >
              <TouchableOpacity onPress={this.sendComments}>
                <MaterialIcons
                  name="send"
                  size={25}
                  color={"rgba(0, 0, 0, 0.7)"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  response_type: state.GameReviewsReducer.response_type,
  commentId: state.GameReviewsReducer.commentId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GameReviewsData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBox);
