import { useState, useEffect, useRef } from "react";
import axios from "axios";

interface Data {
  email?: string;
  message?: string;
  username?: string;
}

const useFetch = (url: string) => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean | undefined>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return controller.abort();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
