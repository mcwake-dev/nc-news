import { useState } from "react";

export const LOADING = true;
export const LOADED = false;

const Loading = (WrappedComponent, loadingMessage, startLoading) => {
  function LoadingHOC(props) {
    const [isLoading, setIsLoading] = useState(startLoading);
    const [error, setError] = useState("");

    if (isLoading) {
      return <div>Loading...</div>;
    } else if (error) {
      return <div>Error</div>;
    } else {
      return (
        <WrappedComponent
          {...props}
          setIsLoading={setIsLoading}
          setError={setError}
        />
      );
    }
  }

  return LoadingHOC;
};

export default Loading;
