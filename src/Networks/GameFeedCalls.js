import axios from 'axios';
import index from '../Constants/index'

 

    // Getting Game feed data
    export const FetchGameFeed = (user_id) => {
        let config = {
            url:'api/game/feed/',
            method:'GET',
            params:{
                "user":user_id,
            }
        } 
        console.log("fetch game feed",config)
        return(index(config));
}

    // Adding new feed
    export const PostNewFeed = (feed_title,feed,game_id,user_id) => {
        let config = {
            url:'api/game/feed/',
            method:'POST',
        data:{
            "user":user_id,
            "game":game_id,
            "game_description":feed,
            "game_title":feed_title,
            }
        } 
        console.log(config)
        return(index(config))  
        
    }

     // Getting Game feed comment data
     export const FetchGameFeedComment = (game_id) => {
         console.log("game_id is in FetchGameFeedComment:",game_id)
        let config = {
            url:'api/game/feed/comment/',
            method:'GET',
            params:{
                "game":1,
            }
        } 
        console.log("fetch game feed comments",config)
        return(index(config));
}

// Adding game feed comment
export const PostGameFeedComment = (user_id,game_id,game_comment,game_title) => {
    let config = {
        url:'api/game/feed/comment/',
        method:'POST',
    data:{
        "user":user_id,
        "game":1,
        "game_comment":game_comment,
        "game_title":game_title,
        }
    } 
    console.log(config)
    return(index(config))  
    
}
