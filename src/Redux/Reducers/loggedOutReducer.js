import * as Types from '../Actions/types'

const initialState = {
    screen_name: '',
    game_id:''
}

const lastLoggedOutScreen = ( state, action ) => ({
    ...state,
    screen_name: action.screenName,
    game_id: action.gameId
})

export const loggedOutReducer = (state=initialState, action) => {
    switch(action.type) {
        case Types.LAST_LOGGEDOUT_SCREEN:
            return lastLoggedOutScreen(state, action) 
        default:
            return state
    }
}