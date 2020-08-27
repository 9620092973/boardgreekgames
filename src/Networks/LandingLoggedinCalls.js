import axios from "axios";
import index from "../Constants/index";

// Game follow
export const follow_game = user_id => {
  let config = {
    url: "/api/game/following/feed/",
    method: "GET",
    params: {
      follower: user_id
    }
  };
  return index(config);
};

// Game search
export const search = text => {
  let config = {
    url: "/api/search/",
    method: "GET",
    params: {
      text: text
    }
  };
  return index(config);
};

//Category search
export const CategorySearch = () => {
  let config = {
    url: "/api/search/category/",
    method: "GET"
  };
  console.log("category search", config);
  return index(config);
};

//Fetching filter data
export const fetchingSearchFilterData = (
  selected_minimum_player,
  selected_maximum_player,
  selected_min_time,
  selected_max_time,
  selected_Age_item,
  selected_start_year,
  selected_end_year
) => {
  let config = {
    url: "/api/search/filter/?",
    method: "GET",
    params: {
      minimum_player: selected_minimum_player,
      maximum_player: selected_maximum_player,
      min_playing_time: selected_min_time,
      max_playing_time: selected_max_time,
      minimum_ages: selected_Age_item,
      min_year: selected_start_year,
      max_year: selected_end_year
    }
  };
  console.log("filter data", config);
  return index(config);
};
