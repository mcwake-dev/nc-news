import styles from "./Loading.module.css";
import { useState } from "react";

export const LOADING = true;
export const LOADED = false;

const Loading = (WrappedComponent, loadingMessage, startLoading) => {
  function LoadingHOC(props) {
    const [isLoading, setIsLoading] = useState(startLoading);
    const [error, setError] = useState("");

    return (
      <>
        <div className={isLoading ? styles.visible : styles.invisible}>
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
            <p>{loadingMessage}</p>
          </div>
        </div>
        <div className={isLoading ? styles.invisible : styles.visible}>
          <div className={styles.errorDisplay}>
            {error ? error.message : ""}
          </div>
          <WrappedComponent
            {...props}
            setIsLoading={setIsLoading}
            setError={setError}
          />
        </div>
      </>
    );
  }

  return LoadingHOC;
};

export default Loading;
