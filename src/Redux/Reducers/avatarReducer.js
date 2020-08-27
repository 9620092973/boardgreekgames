import {AVATAR_INIT,
        AVATAR_UPLOADING,
        AVATAR_UPLOAD_FAILED,
        AVATAR_UPLOADCOMPLETED,} from '../Actions/types'

const initialState = {
    avatar: null,
    loading:true,
    type:'',
    error:''
}
// const avatarInit = (state,action) => ({
//         ...state,
//         loading:true,
//         type:AVATAR_INIT
// })
const avatarUpload = (state,action) => ({
        ...state,
        //loading:false,
        avatar: action.avatar,
        type: AVATAR_UPLOADING
})
// const avatarFailed = (state,action) => ({
//     ...state,
//     loading:false,
//     error:action.error,
//     type:AVATAR_UPLOAD_FAILED
// })

// reducers.js
export const avatarReducer = (state = initialState, action) => {
    switch (action.type) {
        // case AVATAR_INIT:
        //     return avatarInit(state,action)
        case AVATAR_UPLOADING:
            return avatarUpload(state,action) 
                // case AVATAR_UPLOAD_FAILED:
                //     return avatarFailed(state,action)
        default:
            return state;
    }
};