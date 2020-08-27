import { combineReducers } from 'redux';

import { avatarReducer } from './avatarReducer'
import { loggedOutReducer } from './loggedOutReducer'
import { GameReviewsReducer } from './gameReviewsReducer'
import { GameIDReducer } from './GameIDReducer'
import { tabTypeReducer } from './tabTypeReducer'
import { GenericReducer } from './GenericReducer'
import { AverageGameReducer } from './AverageGameReducer'
import { ProgressDataReducer } from './ProgressDataReducer'


export const reducers = combineReducers({
    avatarReducer, 
    loggedOutReducer,
    GameReviewsReducer,
    GameIDReducer,
    tabTypeReducer,
    GenericReducer,
    AverageGameReducer,
    ProgressDataReducer,
});
