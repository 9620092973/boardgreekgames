import index from '../Constants/index'
export const GameImageOrVideo = (gameId,media) => {
	let config = {
		url:'/api/game/gallery/',
		method:"GET",
		params:{
			gameId:gameId,
			media:media

		}
	}
	console.log("gameIMAGE",config)
	return(index(config))
}
