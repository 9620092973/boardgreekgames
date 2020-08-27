import index from "../Constants/index";

export const MyGameCollection = (
  onSuccess = undefined,
  onFailure = undefined
) => {
  //my collection url
  //   let config = {
  //     url: "/api/game/collection/",
  //     method: "GET",
  //     params: {
  //       user_id: user_id
  //     }
  //   };
  //   //console.log("$$$$$$$$",config)
  //   return index(config);
  index
    .get("/api/game/collection/")
    .then(response => {
      if (onSuccess != undefined) {
        onSuccess(response.data);
      }
    })
    .catch(errorResponse => {
      if (onFailure != undefined) {
        onFailure(errorResponse);
      }
    });
};

export const deleteGameFromCollection = (user_id, game_id) => {
  let config = {
    url: "/api/game/collection/",
    method: "POST",
    data: {
      user: user_id,
      game_id: game_id,
      add_to_collection: "True"
    }
  };
  console.log("config", config);
  return index(config);
};
