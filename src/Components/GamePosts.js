import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import * as Types from "../Redux/Actions/types";
import { UgcWriteReviewGet, UgcReview } from "../Networks/UGCCalls";
import FeedContainer from "../Components/FeedContainer";
import { NavigationEvents } from "react-navigation";
import { withNavigation } from "react-navigation";

class GamePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataId: 0,
      page: 1,
      commentPage: 1,
      open: false,
      reviews_data: {},
      userId: ""
    };
    this.UgcWritereview = this.UgcWritereview.bind(this);
    this.ReviewsDisplay1 = this.ReviewsDisplay1.bind(this);
    this.UGCReviews = this.UGCReviews.bind(this);
    this.infiniteLoad = this.infiniteLoad.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.onDidFocus = this.onDidFocus.bind(this)
  }

  /* HACK: use this for loading while moving from one screen to another */
  UNSAFE_componentWillReceiveProps(props) {
    if (
      this.props.category != props.category ||
      this.props.gameId != props.gameId ||
      this.props.reviews_data != props.reviews_data
    ) {
      const { gameId, category } = props;
      this.UGCReviews(gameId, category);
    }
  }

  componentDidMount() {
    const { gameId, category } = this.props;
    this.UGCReviews(gameId, category);
    this.setState({ page: 1, commentPage: 1 })
  }

  onDidFocus() {
    const { gameId, category } = this.props
    this.UGCReviews(gameId, category)
    this.setState({ page: 1, commentPage: 1 })
  }

  handleOpen = (val) => {
    this.setState({ open: val })
  }

  UgcWritereview(dataId, page = 1) {
    UgcWriteReviewGet(dataId, page)
      .then(response => {
        let { reviews_data } = this.props;
        let responseData = response.data;
        if (page != 1) {
          responseData["comments"] = reviews_data.comments.concat(
            response.data.comments
          );
        }
        this.props.GameReviewsData(Types.GAME_REVIEWS_DATA, responseData);
        this.setState({
          reviews_data: responseData,
          dataId: dataId,
          open: true,
          commentPage: responseData.pageNo
        });
        this.props.navigation.navigate('SinglePostModal', {
          'props': { ...this.props }, handleOpen: (val) => this.handleOpen(val),
          ReviewsDisplay1: (dataId, view, userId = "") => this.ReviewsDisplay1(dataId, view, userId),
          dataId: this.state.dataId,
          userId: this.state.userId,
          open: this.state.open,
          infiniteLoad: this.infiniteLoad,
          handleSort: (sort) => this.handleSort(sort),
          onGoBack: () => this.props.GameReviewsResponseType(
            Types.GAME_REVIEWS_RESPONSE_TYPE,
            "",
            null
          )
        })
      })
      .catch(error => {
        console.log("@Error [GamePosts]", error.message);
      });
  }

  ReviewsDisplay1(dataId, view, userId = "") {
    this.setState({
      userId: userId
    });
    if (view == "all_reviews_view") {
      this.UgcWritereview(dataId, 1);
      this.props.GameReviewsHiding(
        Types.GAME_REVIEWS_HIDING,
        false,
        true,
        false
      );
    } else if (view == "particular_review_view_comment") {
      this.props.GameReviewsHiding(
        Types.GAME_REVIEWS_HIDING,
        false,
        false,
        true
      );
    } else if (view == "particular_review_view") {
      this.props.GameReviewsHiding(
        Types.GAME_REVIEWS_HIDING,
        true,
        false,
        false
      );
    } else if (view == "write_comment_view") {
      this.props.GameReviewsHiding(
        Types.GAME_REVIEWS_HIDING,
        false,
        true,
        false
      );
    }
  }

  UGCReviews(gameId, category, page = 1, sort = { sort: "new" }) {
    UgcReview(gameId, category, page, sort)
      .then(response => {
        let { data } = this.props[this.props.category];
        let isLoadingMore;
        let responseData = response.data;
        if (responseData.data.length > 0) {
          isLoadingMore = true;
        } else if (
          responseData.data.length == 0 ||
          responseData.data.length == undefined
        ) {
          isLoadingMore = false;
        }
        if (page != 1) {
          responseData["data"] = data.concat(response.data.data);
          responseData["pageNo"] = response.pageNo;
        }
        this.props.GameReviews(
          Types.GAME_REVIEWS,
          this.props.category,
          responseData,
          isLoadingMore
        );
      })
      .catch(error => {
        console.log("@Error [GamePosts]", error.message);
      });
  }

  handleSort(sort) {
    const { gameId, category } = this.props;
    this.UGCReviews(gameId, category, 1, sort);
  }

  getCardImageSource() {
    const { card_image } = this.props.gameData;
    return card_image && card_image.length
      ? { uri: card_image[0] }
      : require("../../assets/Image/ABCme.jpeg");
  }

  infiniteLoad() {
    let { page, commentPage, open, dataId } = this.state;
    const { gameId, category } = this.props;
    if (open) {
      this.setState({ commentPage: commentPage + 1 });
      this.UgcWritereview(dataId, commentPage + 1);
    } else {
      this.setState({ page: page + 1 });
      this.UGCReviews(gameId, category, page + 1);
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents onDidFocus={() => this.onDidFocus()} />
        <FeedContainer
          {...this.props}
          ReviewsDisplay1={this.ReviewsDisplay1}
          dataId={this.state.dataId}
          userId={this.state.userId}
          open={this.state.open}
          infiniteLoad={this.infiniteLoad}
          handleOpen={this.handleOpen}
          handleSort={this.handleSort}
        />
      </View>
    );
  }
}

export default withNavigation(GamePosts);
