import { useState } from "react";

export const LOADING = true;
export const LOADED = false;

const Loading = (WrappedComponent, loadingMessage, startLoading) => {
  function LoadingHOC(props) {
    const [isLoading, setIsLoading] = useState(startLoading);
    const [error, setError] = useState(null);

    return (
      <>
        <div className={isLoading ? "notification is-info" : "is-invisible"}>
          {loadingMessage}
        </div>
        <div className={error ? "notification is-error" : "is-invisible"}>
          {error}
        </div>
        <WrappedComponent
          {...props}
          setIsLoading={setIsLoading}
          setError={setError}
        />
      </>
    );
  }

  return LoadingHOC;
};

export default Loading;
