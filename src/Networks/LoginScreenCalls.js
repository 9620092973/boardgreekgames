import axios from 'axios';
import index from '../Constants/index'
import { AsyncStorage } from 'react-native';
import * as Expo from 'expo';

export const _storeData = async (response) => {
    console.log("[_storeData] response new",response)
    // store data of the user
    try {
      if(response !== null)
            console.log(JSON.stringify(response));
            await AsyncStorage.setItem('userToken', JSON.stringify(response));
    } catch (error) {
      // Error details displayed using toast.
    }
}

export const _retrieveData = async () =>{
    // retrive data of the user
    try {
        const response = await AsyncStorage.getItem('userToken');
        console.log("response data object",response);
        if (response !== null) {
          let authObjectToken = JSON.parse(response);
          return authObjectToken;
        }
      } catch (error) {
          return null;        
        // Error retrieving data
      }
      return null;
}
export const _removeToken = async () =>{
    try{
       return await AsyncStorage.removeItem('userToken');
    }catch(error){
        return null;
    }
}

export const _AuthStatus = async (UserName,password) => {
    // auth status url
    let config = {
        url:"/api/user/auth/status/",
        method:"GET",
        withCredentials:true,
    }
    return(index(config))
}


{/**const URL = 'api/users/status/';
	const config = {
		url:URL,
		method:'get',
		withCredentials:true
	};
	client(config).then(function(response){
		if(succesCallback !== undefined){
			succesCallback(response);
		}
	}).catch((error) => {
		if(errorCallback !== undefined){
			errorCallback(error);
		}else{
			console.log(error.message);
		}
	}); */}



 
export const LoginUsers = (UserName,Password) => {
    // login user axios
    let config = {
        url: "/api/users/login/",
        method: 'POST',
        withCredentials: true,
        data: {
            "username":UserName,
            "password":Password
        }
    };
    // console.log(config);
    return(
        index(config)
    );
}

     //Forget password
    export const authForgotPassword = (email) => {
        let config = {
            url:"/api/users/forgot_password/",
            method:'POST',
            data:{
            "email":email  
            }
        };
        return(
            index(config)
        );

    }

    export const OTPPassword = (email,otp) => {
        let config = {
            url:"/api/users/forgot_password/",
            method:'POST',
            data:{
            "email":email,
            "otp":otp,
            }
        };
        return(
            index(config)
        );

    }

    // ResetPassword 
    export const authResetPassword = ( email, Newpassword, otp) => {
        let config = {
            url:'/api/users/reset_password/',
            method:'POST',
            data:{
                "email": email,
                "password": Newpassword,
                "otp": otp
            }
        };
        console.log(config);
        return(index(config));
    }

// Google login
export const socialLogin = (socialProvider,accessToken,accessTokenExpirationDate,idToken,email,familyName,givenName,id,name,result) =>{
    let config = {
        url:"/api/users/google/login/",
        method:'POST',
        data:{
            "provider":socialProvider,
            "access_token":accessToken,
            "access_token_expiration_date":accessTokenExpirationDate, 
            "id_token":idToken,
            "email":email, 
            "family_name":familyName,
            "given_name":givenName,
            "client_id":id, 
            "username":name
       
        }
    };
    console.log("config",config)
    return(
        index(config)
    )}

     // Facebook login 
    export const socialLoginFB = (responseURL,token) =>{
        let config = {
            url:"/api/users/facebook/login/",
            method:'POST',
            data:{
                'url':responseURL,
                'access_token':token
            }
        };
        console.log("config",config) 
        return(
            index(config)
        )
}
