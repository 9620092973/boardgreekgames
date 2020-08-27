import React from "react";
import {GameReviewsHiding,GameReviewsData,GameReviews} from '../Redux/Actions/index';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GamePosts from "../Components/GamePosts";
import { View } from 'react-native'
import GamecomunityHeader from '../Components/GamecomunityHeader'

class Reviews extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>
      <GamecomunityHeader
          title={"Media"}
          navigation={this.props.navigation}
          category={"photos"}
        />
      <GamePosts category="photos" screenName = "Media" {...this.props} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ugc_reviews_response: state.GameReviewsReducer.ugc_reviews_response,
  //Ugc_Writereview: state.GameIDReducer.Ugc_Writereview,
  gameId: state.GameIDReducer.gameId,
  gameData : state.GameIDReducer.gameData,
  all_reviews_view: state.GameReviewsReducer.all_reviews_view,
  particular_review_view: state.GameReviewsReducer.particular_review_view,
  write_comment_view: state.GameReviewsReducer.write_comment_view,
  type_of_tab: state.tabTypeReducer.type_of_tab,
  photos: state.GameReviewsReducer.photos,
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

