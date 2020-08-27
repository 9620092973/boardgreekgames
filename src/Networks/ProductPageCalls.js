import axios from 'axios';
import index from '../Constants/index'

export const ProductGame = (game_id) => {
    // product game url
    let config = {
        url:'/api/game/',
        method:'GET',
        params:{
            "game": game_id,
        }
    };
    console.log("ProductGame",config)
    return (index(config));
} 

// UGC product data
export const productUGC = (game_id) => {
    let config = {
        url:'/api/ugc/',     
        method:'GET',
        params:{
            "game":game_id
        }
    };
    console.log("productUGC",config)
    return (index(config));
}

// Game collections
export const AddCollectionGame = (game_id) => {
    // Addcollection url
    let config = {
        url:'/api/game/collection/',
        method:'POST',
        data:{
            "game_id":game_id,
            "add_to_collection":"True"
        }
    }
    console.log("Collections",config)
    return(index(config));
}

export const FetchCollectionGameStatus = (game_id) => {
    // Addcollection url
    let config = {
        url:'/api/game/collection/status/',
        method:'GET',
        params:{
            "game_id": game_id,
        }
       
    }
    console.log("FetchCollectionGameStatus",config)
    return(index(config));
}

// Game fallow
export const GameFollow = (game_id) => {
    // Gamefollow of the url
    let config = {
        url:'api/game/follow/',
        method:'POST',
        data:{
                "game" : game_id,
                "follow": "True"
        }
    }
    return index(config);
}

// Game rating
export const RateGame = (game_id,value) => {
    console.log("game rating:",value)
    let config = {
        url:'/api/game/rating/?game=' + game_id + '&game_rating=' + value,
        method:'POST',
        // data:{
        //         "game": game_id,
        //       //  "game_rating": value                    
        // }
    }
    console.log("rate game post",config)
    return index(config) ;
}

export const AverageRateGame = (game_id) => {
    let config = {
        url:'/api/game/rating/?game=' + game_id ,
        method:'GET',
    }
    console.log("rate game post",config)
    return index(config) ;
}




