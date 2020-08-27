import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Modal,
  Platform, TouchableHighlight
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GameReviewsResponseType } from "../../Redux/Actions";
import { NavigationEvents } from "react-navigation";
import PostedReview from "./PostedReview";
import RepliedPosts from "./RepliedPosts";
import CommentBox from "../CommentBox.js";
import styles from "../../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle.js";
import { CustomTouchableIcon } from "../../Components/Header/CustomTouchableIcon";
class SinglePostModal extends React.Component {
  constructor() {
    super();
    this.state = {
      reply: false,
      comment_reply: false,
      commentId: null,
      isLoading: true,
      isLoadingMore: false,
      modalVisible: true
    };
    this.renderModalContent = this.renderModalContent.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onDidFocus() {
    this.props.resetResponseType();
    this.props.navigation.state.params.handleOpen(false);
  }

  render_FlatList_header = () => {
    var header_View = (
      <View>
        <PostedReview
          {...this.props.navigation.state.params.props}
          {...this.props}
          handleOpen={this.props.navigation.state.params.handleOpen}
          ReviewsDisplay1={this.props.navigation.state.params.ReviewsDisplay1}
          dataId={this.props.navigation.state.params.dataId}
          userId={this.props.navigation.state.params.userId}
          open={this.props.navigation.state.params.open}
          infiniteLoad={this.props.navigation.state.params.infiniteLoad}
          handleSort={this.props.navigation.state.params.handleSort}
        />
      </View>
    );
    return header_View;
  };

  render_FlatList_footer = () => {
    var footer_View = this.state.isLoadingMore && (
      <View style={{ flex: 1, padding: 10, marginBottom: 10 }}>
        <ActivityIndicator size="large" />
      </View>
    );
    return footer_View;
  };

  renderComment({ item, index }) {
    comment = item;
    indexItem = index;
    return (
      <RepliedPosts
        {...this.props.navigation.state.params.props}
        {...this.props}
        handleOpen={this.props.navigation.state.params.handleOpen}
        ReviewsDisplay1={this.props.navigation.state.params.ReviewsDisplay1}
        dataId={this.props.navigation.state.params.dataId}
        userId={this.props.navigation.state.params.userId}
        open={this.props.navigation.state.params.open}
        infiniteLoad={this.props.navigation.state.params.infiniteLoad}
        handleSort={this.props.navigation.state.params.handleSort}
        comment={comment}
        indexVal={indexItem}
      />
    );
  }

  onCloseModal() {
    this.setState({ modalVisible: false });
    this.props.navigation.state.params.handleOpen(false);
    this.props.navigation.goBack();
  }

  renderModalContent() {
    const { isLoadingMore } = this.props.navigation.state.params.props;
    return (
      <View style={{ height: "100%" }}>
        <View style={{ flexDirection: "row" }}>
          <LinearGradient
            colors={["#001a33", "#004f99"]}
            style={styles.GradientStyle}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >


            <View style={styles.headerContainer}>
              <View style={{
                flexDirection: "row", alignItems: "center", marginRight: 10, marginLeft: 8
              }}>
                <CustomTouchableIcon
                  onPress={this.onCloseModal}
                >
                  <Ionicons name="ios-arrow-back" size={25} color={"white"} />
                </CustomTouchableIcon>
                <View style={{ marginBottom: Platform.OS === 'ios' ? 6 : 1 }}>
                  <Text style={styles.screenNamestyle}>
                    {this.props.navigation.state.params.props.screenName}
                  </Text>
                </View>
              </View>
            </View>


          </LinearGradient>
        </View>
        {!(
          Object.entries(this.props.navigation.state.params.props.reviews_data)
            .length === 0 &&
          this.props.navigation.state.params.props.reviews_data.constructor ===
          Object
        ) && (
            <FlatList
              data={this.props.reviews_data.comments}
              renderItem={data => this.renderComment(data)}
              onEndReached={() =>
                this.setState({ isLoadingMore: isLoadingMore }, () =>
                  this.props.navigation.state.params.infiniteLoad()
                )
              }
              onEndReachedThreshold={Platform.OS == "ios" ? 0 : 0.5}
              ListHeaderComponent={this.render_FlatList_header}
            />
          )}
        <CommentBox
          {...this.props.navigation.state.params.props}
          {...this.props}
          handleOpen={this.props.navigation.state.params.handleOpen}
          ReviewsDisplay1={this.props.navigation.state.params.ReviewsDisplay1}
          dataId={this.props.navigation.state.params.dataId}
          userId={this.props.navigation.state.params.userId}
          open={this.props.navigation.state.params.open}
          infiniteLoad={this.props.navigation.state.params.infiniteLoad}
          handleSort={this.props.navigation.state.params.handleSort}
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        <NavigationEvents onDidFocus={() => this.onDidFocus()} />

        <View>

          {this.renderModalContent()}

        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  ugc_reviews_response: state.GameReviewsReducer.ugc_reviews_response,
  response_type: state.GameReviewsReducer.response_type,
  commentId: state.GameReviewsReducer.commentId,
  reviews_data: state.GameReviewsReducer.reviews_data
});

const resetResponseType = () => ({
  type: "RESET_RESPONSE_TYPE",
  response_type: "comment"
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GameReviewsResponseType,
      resetResponseType
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePostModal);
