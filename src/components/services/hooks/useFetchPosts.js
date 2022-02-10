import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPosts = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [postItems, setPostItems] = useState(null);
    const [serverError, setServerError] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const resp = await axios.get(url);
          const data = await resp?.data;
  
          setPostItems(data);
          setIsLoading(false);
        } catch (error) {
          setServerError(error);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [url]);
  
    return { isLoading, postItems, serverError };
  };

  export default useFetchPosts;