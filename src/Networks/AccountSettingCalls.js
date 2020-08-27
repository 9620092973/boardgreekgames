import axios from "axios";
import index from "../Constants/index";

export const updateEmailPasswordFields = (new_email, new_password) => {
  let config = {
    url: "/api/users/update/email/",
    method: "PUT",
    data: {
      email: new_email,
      password: new_password
    }
  };

  return index(config);
};


// getting user information
export const ProfileInfocal = () => {
  let config = {
    url: "/api/users/profile/",
    method: "GET"
  };

  return index(config);
};
