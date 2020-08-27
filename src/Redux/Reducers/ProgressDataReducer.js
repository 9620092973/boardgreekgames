import * as Types from '../Actions/types'

const initialState = {
    progressData: null,
    progressDataInPercentage: null,
    progressMessage: ''
    
}

const progressData = ( state, action ) => ({
    ...state,
    progressData: action.progressData,
    progressDataInPercentage: action.progressDataInPercentage,
    progressMessage: action.progressMessage
})

export const ProgressDataReducer = (state=initialState, action) => {
    switch(action.type) {
        case Types.PROGRESS_DATA:
            return progressData(state, action) 
        default:
            return state
    }
}