import { useTranslation } from "next-i18next";
import { FunctionComponent } from "react";
import styles from "./defaultFooter.module.scss";

const Footer: FunctionComponent = () => {
  const { t } = useTranslation("common");

  return (
    <footer className={styles['default-footer']}>
      <span>© nicolas-dmg.fr / 2019 - 2022</span>
    </footer>
  );
};

export default Footer;
