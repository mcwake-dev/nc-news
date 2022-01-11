import styles from "./Loading.module.css";
import { useState } from "react";

const Loading = (WrappedComponent, loadingMessage) => {
  function HOC(props) {
    const [isLoading, setIsLoading] = useState(true);

    return (
      <>
        <div className={isLoading ? styles.visible : styles.invisible}>
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
            <p>{loadingMessage}</p>
          </div>
        </div>
        <div className={isLoading ? styles.invisible : styles.visible}>
          <WrappedComponent {...props} setIsLoading={setIsLoading} />
        </div>
      </>
    );
  }

  return HOC;
};

export default Loading;
