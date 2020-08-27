import axios from 'axios';
import { AsyncStorage, Alert } from 'react-native'
import index from '../Constants/index'

export const Logout = () => {   
    let config = {
        url: "/api/users/logout/",
        method: 'GET',
        withCredentials: true
    };
    return (
        index(config)
    );
}

export const _removeUser = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
   
    } catch (error) {
       Alert.alert("User does not exits")
    }
}


