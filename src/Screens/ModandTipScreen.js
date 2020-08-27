import React from "react";

// import Gamepostreviews from '../../feedTabScreens/feedScreens/Gamepostreviews';
// import Commentbtn from '../../feedTabScreens/feedScreens/CommentBox/Commentbtn';
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
          title={"Mods/Tips"}
          navigation={this.props.navigation}
          category={"modstips"}
        />
      <GamePosts category="modstips" screenName = "Mods/Tips" {...this.props} />
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
  modstips: state.GameReviewsReducer.modstips,
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


