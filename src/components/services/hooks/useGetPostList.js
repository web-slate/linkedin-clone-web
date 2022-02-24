import { useState, useEffect } from "react";
import AxiosInstance from '../../../utils/axios-instance'
import { USER_FEED_URL } from '../../../utils/api-endpoints'

const useGetPostList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [postItems, setPostItems] = useState(null);
    const [serverError, setServerError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const resp = await AxiosInstance.get('/todos/1');
          const data = resp?.data;
          setPostItems(data);
          setIsLoading(false);
        } catch (error) {
          setServerError(true);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return { isLoading, postItems, serverError };
  };

  export default useGetPostList;