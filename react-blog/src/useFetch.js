import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Sorry! Could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);

        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });
    return () => controller.abort();
  }, [url]);

  return { projects, isLoading, error };
};

export default useFetch;
