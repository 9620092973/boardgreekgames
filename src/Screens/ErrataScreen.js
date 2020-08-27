import React from "react";
import {GameReviewsHiding,GameReviewsData,GameReviews} from '../Redux/Actions/index';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native'
import GamecomunityHeader from '../Components/GamecomunityHeader'


import GamePosts from "../Components/GamePosts";

class Reviews extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>
      <GamecomunityHeader
          title={"Errata"}
          navigation={this.props.navigation}
          category={"errata"}
        />
      <GamePosts category="errata" screenName = "Errata" {...this.props} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ugc_reviews_response: state.GameReviewsReducer.ugc_reviews_response,
  gameId: state.GameIDReducer.gameId,
  gameData : state.GameIDReducer.gameData,
  all_reviews_view: state.GameReviewsReducer.all_reviews_view,
  particular_review_view: state.GameReviewsReducer.particular_review_view,
  write_comment_view: state.GameReviewsReducer.write_comment_view,
  type_of_tab: state.tabTypeReducer.type_of_tab,
  errata: state.GameReviewsReducer.errata,
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