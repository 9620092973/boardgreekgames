import * as Types from '../Actions/types'
//import { GameReviewsResponseType } from '../Actions';

const initialState = {
    //gameId:'',
    //gameData:'',
    ugc_reviews_response:{},
    all_reviews_view: true,
    particular_review_view: false,
    write_comment_view: false,
    reviews:{},
    strategy: {},
    photos: {},
    tutorials: {},
    rules: {},
    faq: {},
    errata: {},
    response_type: 'comment',
    commentId: null,
    isLoadingMore: false
}

const GameReiviews = ( state, action ) => ({
    ...state,
    ...action.response,
    isLoadingMore: action.isLoadingMore
})

const GameReiviewsHiding = ( state, action ) => ({
    ...state,
    all_reviews_view: action.all_reviews_view,
    particular_review_view: action.particular_review_view,
    write_comment_view: action.write_comment_view,
})

const GameReiviewsData = ( state, action ) => ({
    ...state,
    reviews_data: action.reviews_data,
})

const GameReviewsResponseType = ( state, action ) => ({
    ...state,
    response_type: action.response_type,
    commentId: action.commentId,
})

export const GameReviewsReducer = (state=initialState, action) => {
    switch(action.type) {
        case Types.GAME_REVIEWS:
            return GameReiviews(state, action) 
        case Types.GAME_REVIEWS_HIDING:
            return GameReiviewsHiding(state, action)
        case Types.GAME_REVIEWS_DATA:
            return GameReiviewsData(state, action)
        case Types.GAME_REVIEWS_RESPONSE_TYPE:
            return GameReviewsResponseType(state, action)
        case 'SET_LOADING':
            return { ...state, loading: action.loading }
        case 'RESET_RESPONSE_TYPE':
            const { response_type } = action
            return { ...state, response_type }
        default:
            return state
    }
}