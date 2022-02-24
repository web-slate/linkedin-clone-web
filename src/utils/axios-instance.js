import axios from 'axios';

// TODO: get BASE_URL .env file
const BASE_URL = 'https://linkedincloneapp01.herokuapp.com/api';

const defaultHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true',
}

const Axios = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: defaultHeaders,
  })

  return axiosInstance
}

export default Axios;