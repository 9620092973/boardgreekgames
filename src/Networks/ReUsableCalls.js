import axios from "axios";
import index from "../Constants/index";

export const _TrendingGame = (onSuccess = undefined, onFailure = undefined) => {
  index
    .get("/api/game/trending/")
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

// const config = {
//     url : "/api/game/trending/",
//     method: 'GET',

// };
// return (index(config));
