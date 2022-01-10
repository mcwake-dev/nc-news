import styles from "./Loading.module.css";
import { useState } from "react";

const Loading = (WrappedComponent, loadingMessage) => {
  function HOC(props) {
    const [isLoading, setIsLoading] = useState(true);

    return (
      <>
        {isLoading && (
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
            <p>{loadingMessage}</p>
          </div>
        )}
        <WrappedComponent
          {...props}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      </>
    );
  }

  return HOC;
};

export default Loading;
