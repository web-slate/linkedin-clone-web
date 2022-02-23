import { useState, useEffect } from "react";
import axios from "axios";

const useGetPostList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [postItems, setPostItems] = useState(null);
    const [serverError, setServerError] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const apiUrl = 'https://linkedincloneapp01.herokuapp.com/api/feed?userId=2'
          const resp = await axios.get(apiUrl);
          const data = await resp?.data;
          setPostItems(data);
          setIsLoading(false);
        } catch (error) {
          setServerError(true);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [url]);
  
    return { isLoading, postItems, serverError };
  };

  export default useGetPostList;