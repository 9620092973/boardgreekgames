import axios from 'axios';
import index from '../Constants/index'

export const authRegistration = (username,FirstName,LastName,email,Password,date,State,Country,gender,Terms_Conditions,Newsletter) => {
    if(Terms_Conditions){
        Terms_Conditions = "True"
    }
    if(Newsletter){
        Newsletter = "True"
    }
    // registration of the url
     console.log("registration data")
    let config = {
        url: '/api/users/',
        method:'POST',
        data:{
            "username":username,
            "first_name":FirstName,
            "last_name":LastName,
            "email":email,
            "password":Password,
            "date_of_birth":date,
            "state":State,
            "country":Country,
            "gender":gender,
            "terms_conditions":Terms_Conditions,
            "newsletter":Newsletter,
        }
    }
    console.log(config)
    return(index(config));
} 