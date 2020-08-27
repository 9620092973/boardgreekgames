import * as Types from '../Actions/types'

const initialState = {
    gameId:'',
    gameData:{},
}

const Gameid = ( state, action ) => ({
    ...state,
   gameId:action.gameId,
   gameData:action.gameData,
})

export const GameIDReducer = (state=initialState, action) => {
    switch(action.type) {
        case Types.GAME_ID:
            return Gameid(state, action) 
        default:
            return state
    }
}