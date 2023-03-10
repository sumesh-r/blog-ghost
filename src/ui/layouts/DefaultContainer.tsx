import { FunctionComponent } from "react";
import styles from "./defaultContainer.module.scss";

const DefaultContainer: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <div className={styles["default-container"]}>
      <div className={styles['default-container__content-container']}>{children}</div>
    </div>
  );
};

export default DefaultContainer;
