import * as Types from '../Actions/types'

const initialState = {
   oneCount:"",
     twoCount:"",
      threeCount:"",
       fourCount:"",
}

const AverageGame = ( state, action ) => ({
    ...state,
   oneCount:action.oneCount,
   twoCount:action.twoCount,
   threeCount:action.threeCount,
   fourCount:action.fourCount,
})

export const AverageGameReducer = (state=initialState, action) => {
    switch(action.type) {
        case Types.AVERAGE_GAMERATING:
            return AverageGame(state, action) 
        default:
            return state
    }
}