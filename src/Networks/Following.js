import axios from 'axios';
import index from '../Constants/index'

export const Following = (userId) => {
    let config = {
        url:'api/user/follow/',
        method: 'POST',
        data : {
            following: userId
        },
    };
    console.log("config",config);
    return index(config);
}

export const followingStatus = (userId) => {
    let config = {
        url: 'api/user/follow_status/',
        method: 'GET',
        params: {
            follower: userId
        }
    }
    return index(config)
}

export const fetchFollowingData = (follower) => {
    let config = {
        url:'api/user/follow/',
        method: 'GET',
        // params:{
        //     "follower":'1',
        // },
    };
    console.log("config",config);
    return index(config);
}
export const unFollowUser = (userId) => {
    let config = {
        url:'api/user/follow/',
        method: 'PUT',
        data:{
            following: userId,
            unfollow: true,
        },
    };
    console.log("config",config);
    return index(config);
}

export const followingandfollower = ( ) =>{

    let config = {

        url : "api/user/follow/",
        method :"GET",
        // params : {
        //     "GameCollections" :"1",
        //     "followers" : "2",
            
        // },
    };
    console.log("config",config);
    return index(config);

}