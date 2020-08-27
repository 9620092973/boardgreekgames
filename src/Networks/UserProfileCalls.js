import axios from "axios";
import index from "../Constants/index";

export const GameCollection = user_id => {
  // GameCollection of the url
  let config = {
    url: "/api/game/collection/",
    method: "GET",
    params: {
      user: user_id
    }
  };
  return index(config);
};

export const FollowUserProfile = user_id => {
  //Follow user profile of the url
  let config = {
    url: "/api/user/follow/",
    method: "POST",
    data: {
      follower: user_id,
      following: 2
    }
  };
  return index(config);
};

export const Game_Common = async (user_id="", onSuccess, onFailure) => {
  let config = {
    url: "/api/game/common/",
    method: "get",
    params: {
      user: user_id,
      other_user: 1
    }
  };
  index(config).then(response => {
      onSuccess(response.data)
    }
  ).catch(error => {
      onFailure(error);
    }
  )
};

export const GetProfilePic = (user_id, image) => {
  let config = {
    url: "/api/users/profile/",
    method: "GET"
  }
  return index(config);
};


export const User_profilePut = (user_id, image) => {
  var formData = new FormData();
  formData.append("image", {
    uri: image,
    type: "image/png",
    name: "photo"
  });
  formData.append("user", user_id);
  let config = {
    url: "/api/users/profile/",
    method: "PUT",

    data: formData,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };
  console.log("user profile", config);
  return index(config);
};

export const User_profile = (user_id, image) => {
  var formData = new FormData();
  formData.append("image", {
    uri: image,
    type: "image/png",
    name: image
  });
  formData.append("user", user_id);
  let config = {
    url: "/api/users/profile/",
    method: "POST",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };
  console.log("user profile", config);
  return index(config);
}

export const GenericCommunity = (getParams={}, onSuccess, onFailure) => {
  let config = {
    url: '/api/users/follow/profile/',
    method: 'GET',
    params: getParams
  }
  responseFunc(index(config), onSuccess, onFailure)
} 

const responseFunc = (axiosFunc, onSuccess, onFailure) => {
  axiosFunc.then(response => {
    console.log('response generic community', response.data)
      onSuccess(response.data.images)
    }
  ).catch(error => {
      onFailure(error);
    }
  )
}

export const FetchUserProfileData = (
  user_id = "",
  onSuccess = undefined,
  onFailure = undefined,
  typeOfGameSlider = undefined,          
  extra=''
) => {
  console.log("inside user profile fetch and typeOfGameSlider1234",extra)
  let config = {
    url: "/api/users/follow/profile/",
    method: "get",
    params: {
      user_id: user_id,
      pageNo:'1',
      extra:extra

    }
  };
  index(config)
    .then(response => {
      console.log("response is:",response.data)
      if (onSuccess != undefined) {
        console.log("inside onsuccess undefined")
        onSuccess(response.data,typeOfGameSlider);
      }
    })
    .catch(errorResponse => {
      console.log("errorResponse",errorResponse)
      if (onFailure != undefined) {
        onFailure(errorResponse);
      }
    });
};

//Updating Profile details in Edit Personal Info screen
export const profileUpdate = (username, first_name, last_name, state, country, date_of_birth, gender) => {
  let config = {
    url: "/api/users/profile/update/",
    method: "PUT",
    data: {
      'username':username,
      'first_name':first_name,
      'last_name':last_name,
      'state':state,
      'country':country,
      'date_of_birth':date_of_birth,
      'gender':gender
    }
  };
  console.log("Profile Update Config", config);
  return index(config);
};



