import { useTranslation } from "next-i18next";
import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "./defaultHeader.module.scss";

const DefaultHeader: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["default-header"]}>
      <Link href="/">
        <a>
          <h1>{t("title")}</h1>
        </a>
      </Link>
    </div>
  );
};

export default DefaultHeader;
