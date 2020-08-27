import index from '../Constants/index'
 export const UploadGames = (name,minimum_players,maximum_players,minimum_playing_time,maximum_playing_time,mfg_suggested_ages,year_published,designer,publisher,artist,category,mechanism,description,Barcode_ID,expansion,expands,integrates_with,contains,contained_in,reimplemented_by,reimplements,family,note_to_admin,video_game_adaptation,game_images) => {

    const apiUrl = `/api/game/`;
    const formData = new FormData();
    game_images && game_images.length > 0 ? 
    game_images.forEach((image, i) => {
        const { uri } = image
        const uriParts = uri.split('.') 
        const uriPartsBySlash = uri.split('/')
        const imageName = uriPartsBySlash[uriPartsBySlash.length-1]
        const fileType = uriParts[uriParts.length - 1]

        let name = image.name ? image.name : imageName
        
        formData.append("card_image", {
        uri,
        name : name,
        type: `image/${fileType}`,
        })
    }) : formData.append("card_image", null)

    formData.append("name", name)
            formData.append("minimum_players", minimum_players)
            formData.append("maximum_players", maximum_players)
            formData.append("minimum_playing_time", minimum_playing_time)
            formData.append("maximum_playing_time", maximum_playing_time)
            formData.append("mfg_suggested_ages", mfg_suggested_ages)
            formData.append("year_published", year_published)
            formData.append("designer",  designer)
            formData.append("publisher", publisher)
            formData.append("artist", artist)
            formData.append("category", category)
            formData.append("mechanism", mechanism)
            formData.append("description", description)
            formData.append("expansion",  expansion)
            formData.append("Barcode_ID",  Barcode_ID)
            formData.append("expands",  expands)
            formData.append("integrates_with",  integrates_with)
            formData.append("contains",  contains)
            formData.append("contained_in",  contained_in)
            formData.append("reimplemented_by", reimplemented_by)
            formData.append("reimplements",  reimplements)
            formData.append("family",  family)
            formData.append("note_to_admin",  note_to_admin )
            formData.append("video_game_adaptation",  video_game_adaptation)
            formData.append("views",  0)
            formData.append("like_count",  0)
            formData.append("dislike_count",  0)
            formData.append("game_status",  "published")
            formData.append("hotornot",  true)
            formData.append("upc",  "Game UPC")
            formData.append("origin",  "publisher")
            formData.append("description",  null)
            formData.append("data",  null)
            formData.append("scan_type",  null)
            formData.append("game",  null)
            formData.append("swipe_image", null)
            formData.append("info_image", null )

    // registration of the url 
     console.log("uploadGames",typeof category);
    let config = {
        url: apiUrl,
        method:'POST',
        data: formData,
        headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            }
    }
    console.log(config)
    return(index(config));
} 