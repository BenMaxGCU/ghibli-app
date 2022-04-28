import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { data, error };
};

export default useFetch;
