import axios from 'axios';
import index from '../Constants/index'

    //Discovery Mode swipe url
    export const discoveryMode = (user_id) => {
        let config = {
            url:'/api/discoverymode/swipe/',
            method: 'GET',
            params:{
                "user":user_id,
            },
        };
        console.log("config",config);
        return index(config);
    }

     // Product Link url
    export const productLink = (game_id) => {
        let config = {
            url:'/api/product/page/link/',
            method: 'GET',
            params:{
                "game":game_id
            }
        }
        console.log("$$$$$$$$$$",config)
        return (index(config));
}

    // Hot Or Not swipe url
    export const HotOrNotSwipe = (user_id) => {
        let config = {
            url:'/api/hotornot/swipe/',
            method:'GET',
            params:{
                "user":user_id
            }
        } 
        return(index(config));
}

    // Game like 
    export const GameLike = (user_id,game_id,Like) => {
        let config = {
            url:'/api/game/likes/',
            method:'POST',
        data:{
            "user":user_id,
            "game":game_id,
            "game_like":Like,
        }
        } 
        return(index(config))  
    }
