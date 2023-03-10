import { FunctionComponent, useMemo } from "react";
import DefaultContainer from "./DefaultContainer";
import DefaultFooter from "./DefaultFooter";
import DefaultHeader from "./DefaultHeader";
import EmptyContainer from "./EmptyContainer";
import styles from "./layout.module.scss";

type Props = {
  header?: "DefaultHeader" | false;
  container?: "DefaultContainer" | false;
  footer?: "DefaultFooter" | false;
};

const Layout: FunctionComponent<Props> = (props) => {
  const {
    header = "DefaultHeader",
    container = "DefaultContainer",
    footer = "DefaultFooter",
    children,
  } = props;

  const Container = useMemo((): FunctionComponent => {
    switch (container) {
      case "DefaultContainer":
        return DefaultContainer;

      default:
        return EmptyContainer;
    }
  }, [container]);

  return (
    <Container>
      <div className={styles["layout__content-container"]}>
        {header === "DefaultHeader" && <DefaultHeader />}

        {children}
      </div>

      {footer === "DefaultFooter" && <DefaultFooter />}
    </Container>
  );
};

export default Layout;
