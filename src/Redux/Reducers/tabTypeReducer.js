import * as Types from '../Actions/types'
//import { GameReviewsResponseType } from '../Actions';

const initialState = {
    type_of_tab: '',
    
}

const tabType = ( state, action ) => ({
    ...state,
    type_of_tab: action.type_of_tab,
    //Ugc_Writereview:action.Ugc_Writereview,
    //gameData:action.gameData,
    //reviews_data:action.reviews_data,
})

export const tabTypeReducer = (state=initialState, action) => {
    switch(action.type) {
        case Types.UGC_TAB_TYPE:
            return tabType(state, action) 
        default:
            return state
    }
}