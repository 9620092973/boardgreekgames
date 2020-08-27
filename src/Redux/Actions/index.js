
import * as Types from './types'

import { GetProfilePic } from '../../Networks/UserProfileCalls';

export const avatarUploading = (type, avatar=null, error=undefined) => ({
    // var uploading = () => ({
        type: type,
        avatar: avatar,
       // error: error
    // })
})

  
export const loggedOutScreen = (type, screenName="", gameId=0) => ({
	type: type, screenName: screenName, gameId: gameId, 
})
export const GameId = (type,gameId=0,gameData={}) => ({
    type:type,
    gameId:gameId,
    gameData: gameData,
})

export const GameReviews = (type, category, ugc_reviews_response={}, isLoadingMore) => {
    let state = { isLoadingMore, type: type, response: {
        'reviews':{},
        'tutorials':{},
        'photos':{},
        'modstips':{},
        'strategy':{},

} }
    state.response[category] = ugc_reviews_response
    return state
}

export const GameReviewsHiding = (type, all_reviews_view = true, particular_review_view = false, write_comment_view = false) => ({
    type: type, 
    all_reviews_view: all_reviews_view,
    particular_review_view: particular_review_view,
    write_comment_view: write_comment_view,
})

export const GameReviewsData = (type, reviews_data={}) => {
    let state = { type: type, reviews_data: reviews_data }
    return state
}

export const GameReviewsResponseType = (type, response_type = '', commentId = null) => ({
    type: type, 
    response_type: response_type,
    commentId: commentId,
})

export const UGCTabType = (type, type_of_tab) => ({
    type: type, 
    type_of_tab: type_of_tab,
})
export const AverageGameRating = (type,  oneCount ='', twoCount='',threeCount='',fourCount='') => ({
    type: type, 
    oneCount:oneCount,
     twoCount:twoCount,
      threeCount:threeCount,
       fourCount:fourCount,
})

export const progressData = (type, progressData = null, progressDataInPercentage = null, progressMessage = '') => ({
    type: type, 
    progressData: progressData,
    progressDataInPercentage: progressDataInPercentage,
    progressMessage: progressMessage
})


