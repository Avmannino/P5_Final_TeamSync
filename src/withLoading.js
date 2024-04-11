import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const withLoading = (WrappedComponent, fetchData) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchDataAndToggleLoading = async () => {
        try {
          // Perform data fetching logic here
          await fetchData(); // Assuming fetchData is a function that fetches data
        } finally {
          setIsLoading(false);
        }
      };

      fetchDataAndToggleLoading();

      // Cleanup function to clear loading state if component unmounts
      return () => setIsLoading(false);
    }, []);

    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <WrappedComponent {...props} />
        )}
      </>
    );
  };
};

export default withLoading;
