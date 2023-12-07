import { useEffect, useState } from "react";

const useLoading = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
  const handleLoading = () => {
    setIsLoading(true);
    setError(error)
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    handleLoading();
}, []);

  return { error, isLoading };
};
export default useLoading;
