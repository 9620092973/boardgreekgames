const initialState = {
    genericData: '{}'
}

const loadGenricData = (state, action) => {
    let genericData = JSON.parse(state.genericData)
    genericData[action.moduleName] = action.genericData
    return { ...state, genericData: JSON.stringify(genericData) }
}

export const GenericReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOAD_GENERIC_IDENTIFIER_DATA':
            return loadGenricData(state, action)
        default:
            return state
    }
}