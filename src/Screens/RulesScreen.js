import React from "react";
import { GameReviewsHiding, GameReviewsData, GameReviews } from '../Redux/Actions/index';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GamecomunityHeader from '../Components/GamecomunityHeader.js'
import { View } from 'react-native'


import GamePosts from "../Components/GamePosts";

class Reviews extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GamecomunityHeader
          title={"Rules"}
          navigation={this.props.navigation}
          category={"rules"}
        />
        <GamePosts category="rules" screenName="Rules" {...this.props} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ugc_reviews_response: state.GameReviewsReducer.ugc_reviews_response,
  gameId: state.GameIDReducer.gameId,
  gameData: state.GameIDReducer.gameData,
  all_reviews_view: state.GameReviewsReducer.all_reviews_view,
  particular_review_view: state.GameReviewsReducer.particular_review_view,
  write_comment_view: state.GameReviewsReducer.write_comment_view,
  type_of_tab: state.tabTypeReducer.type_of_tab,
  rules: state.GameReviewsReducer.rules,
  reviews_data: state.GameReviewsReducer.reviews_data,
  isLoadingMore: state.GameReviewsReducer.isLoadingMore
})
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    GameReviewsHiding,
    GameReviewsData,
    GameReviews,
  }, dispatch)

)

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);