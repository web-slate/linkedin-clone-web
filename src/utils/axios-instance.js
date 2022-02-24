import axios from 'axios';

// TODO: get BASE_URL .env file
const BASE_URL = 'https://linkedincloneapp01.herokuapp.com/api';

const AxiosInstance = axios.create({
    baseURL: BASE_URL,
  });

export default AxiosInstance;