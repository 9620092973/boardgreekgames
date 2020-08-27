import axios from 'axios';

const environments = {
  development: {
    WEB_APP_BASE_URL: 'https://dcs7.s7works.io/',
    //  WEB_APP_BASE_URL: 'http://192.168.10.71:8000',
    //WEB_APP_BASE_URL: 'http://192.168.10.67:8000',
  },
}
const getEnv = () => {
  return environments.development.WEB_APP_BASE_URL
}

const axiosInstance = axios.create({
  baseURL: getEnv(),
});

export default axiosInstance;